import { useEffect, useState } from "react";
import { useNotifications } from "./hooks/useNotifications";
import { Log } from "./utils/logger";

export default function App() {
  const {
    notifications,
    loading,
    error,
  } = useNotifications();

  const [filter, setFilter] =
    useState("All");

  const [
    readNotifications,
    setReadNotifications,
  ] = useState(() => {
    return (
      JSON.parse(
        localStorage.getItem(
          "readNotifications"
        )
      ) || []
    );
  });

  useEffect(() => {
    Log(
      "info",
      "page",
      "Notifications page loaded"
    );
  }, []);

  const handleFilter = (type) => {
    setFilter(type);

    Log(
      "info",
      "component",
      `Filter changed to ${type}`
    );
  };

  const markAsRead = (id) => {
    if (
      readNotifications.includes(id)
    )
      return;

    const updated = [
      ...readNotifications,
      id,
    ];

    setReadNotifications(updated);

    localStorage.setItem(
      "readNotifications",
      JSON.stringify(updated)
    );

    Log(
      "info",
      "component",
      `Notification ${id} marked as read`
    );
  };

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (n) => n.Type === filter
        );

  const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  const priorityNotifications =
    [...notifications]
      .sort(
        (a, b) =>
          priorityMap[b.Type] -
          priorityMap[a.Type]
      )
      .slice(0, 10);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <h2>
        Error loading notifications
      </h2>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Notifications App</h1>

      <h2>
        Top 10 Priority Notifications
      </h2>

      {priorityNotifications.map(
        (notification) => (
          <div
            key={notification.ID}
            onClick={() =>
              markAsRead(
                notification.ID
              )
            }
            style={{
              border:
                "2px solid red",
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              backgroundColor:
                readNotifications.includes(
                  notification.ID
                )
                  ? "#e0e0e0"
                  : "#ffffff",
            }}
          >
            <h3>
              {notification.Type}
            </h3>

            <p>
              {
                notification.Message
              }
            </p>

            <small>
              {
                notification.Timestamp
              }
            </small>

            <br />

            <strong>
              {readNotifications.includes(
                notification.ID
              )
                ? "Read"
                : "Unread"}
            </strong>
          </div>
        )
      )}

      <hr
        style={{
          margin: "20px 0",
        }}
      />

      <h2>Filter Notifications</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() =>
            handleFilter("All")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            handleFilter(
              "Placement"
            )
          }
        >
          Placement
        </button>

        <button
          onClick={() =>
            handleFilter(
              "Result"
            )
          }
        >
          Result
        </button>

        <button
          onClick={() =>
            handleFilter("Event")
          }
        >
          Event
        </button>
      </div>

      <h2>
        {filter === "All"
          ? "All Notifications"
          : `${filter} Notifications`}
      </h2>

      {filteredNotifications.map(
        (notification) => (
          <div
            key={notification.ID}
            onClick={() =>
              markAsRead(
                notification.ID
              )
            }
            style={{
              border:
                "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              backgroundColor:
                readNotifications.includes(
                  notification.ID
                )
                  ? "#e0e0e0"
                  : "#ffffff",
            }}
          >
            <h3>
              {notification.Type}
            </h3>

            <p>
              {
                notification.Message
              }
            </p>

            <small>
              {
                notification.Timestamp
              }
            </small>

            <br />

            <strong>
              {readNotifications.includes(
                notification.ID
              )
                ? "Read"
                : "Unread"}
            </strong>
          </div>
        )
      )}
    </div>
  );
}