import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import { Log } from "../utils/logger";

export function useNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    Log(
      "debug",
      "hook",
      "useNotifications initialized"
    );

    const load = async () => {
      try {
        const data =
          await fetchNotifications();

        setNotifications(
          data.notifications || []
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return {
    notifications,
    loading,
    error,
  };
}