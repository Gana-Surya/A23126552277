const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjaGVubmFnYW5hc3VyeWEuMjMuY3NtQGFuaXRzLmVkdS5pbiIsImV4cCI6MTc4MjIwMDI1NSwiaWF0IjoxNzgyMTk5MzU1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjE3YWIxZjMtMjE2Ny00YTg5LWFkNzYtYWY0NzZlMzY5MDdkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiY2guIGdhbmEgc3VyeWEiLCJzdWIiOiIxYmI2ZDBjZC1lNmI3LTQxYjUtYTBkYi05YTM0NzkzM2RkZDIifSwiZW1haWwiOiJjaGVubmFnYW5hc3VyeWEuMjMuY3NtQGFuaXRzLmVkdS5pbiIsIm5hbWUiOiJjaC4gZ2FuYSBzdXJ5YSIsInJvbGxObyI6ImEyMzEyNjU1MjI3NyIsImFjY2Vzc0NvZGUiOiJNVHF4YXIiLCJjbGllbnRJRCI6IjFiYjZkMGNkLWU2YjctNDFiNS1hMGRiLTlhMzQ3OTMzZGRkMiIsImNsaWVudFNlY3JldCI6Im1IbUVRUEJmYW1LS0JGeEUifQ.a9rnsICehjVUHVbnzJpa3vGdbw9U8_uluImGHxUUkmE";

export async function Log(
  level,
  packageName,
  message
) {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stack: "frontend",
          level,
          package: packageName,
          message,
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}