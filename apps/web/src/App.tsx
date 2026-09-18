import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

type HealthState =
  | { status: "checking" }
  | { status: "up"; database: string }
  | { status: "down" };

async function fetchHealth(): Promise<HealthState> {
  try {
    const response = await fetch(`${API_URL}/health`);
    if (!response.ok) {
      return { status: "down" };
    }
    const body = await response.json();
    return { status: "up", database: body.database };
  } catch {
    return { status: "down" };
  }
}

export function App() {
  const [health, setHealth] = useState<HealthState>({ status: "checking" });

  useEffect(() => {
    fetchHealth().then(setHealth);
  }, []);

  return (
    <main>
      <h1>Share-it</h1>
      {health.status === "checking" && <p>Checking API status…</p>}
      {health.status === "up" && <p>API is up, database {health.database}.</p>}
      {health.status === "down" && <p>Could not reach the API.</p>}
    </main>
  );
}
