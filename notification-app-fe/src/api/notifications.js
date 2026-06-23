import { Log } from "../utils/logger";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjaGVubmFnYW5hc3VyeWEuMjMuY3NtQGFuaXRzLmVkdS5pbiIsImV4cCI6MTc4MjIwMDI1NSwiaWF0IjoxNzgyMTk5MzU1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjE3YWIxZjMtMjE2Ny00YTg5LWFkNzYtYWY0NzZlMzY5MDdkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiY2guIGdhbmEgc3VyeWEiLCJzdWIiOiIxYmI2ZDBjZC1lNmI3LTQxYjUtYTBkYi05YTM0NzkzM2RkZDIifSwiZW1haWwiOiJjaGVubmFnYW5hc3VyeWEuMjMuY3NtQGFuaXRzLmVkdS5pbiIsIm5hbWUiOiJjaC4gZ2FuYSBzdXJ5YSIsInJvbGxObyI6ImEyMzEyNjU1MjI3NyIsImFjY2Vzc0NvZGUiOiJNVHF4YXIiLCJjbGllbnRJRCI6IjFiYjZkMGNkLWU2YjctNDFiNS1hMGRiLTlhMzQ3OTMzZGRkMiIsImNsaWVudFNlY3JldCI6Im1IbUVRUEJmYW1LS0JGeEUifQ.a9rnsICehjVUHVbnzJpa3vGdbw9U8_uluImGHxUUkmE";
export async function fetchNotifications() {
  try {
    Log(
      "info",
      "api",
      "Fetching notifications"
    );

    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const data = await response.json();

    Log(
      "info",
      "api",
      `Fetched ${data.notifications.length} notifications`
    );

    return data;
  } catch (error) {
    Log(
      "error",
      "api",
      "Failed to fetch notifications"
    );

    throw error;
  }
}