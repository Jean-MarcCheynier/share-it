import { render, screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, expect, it } from "vitest";
import { App } from "./App";
import { server } from "./test/msw-server";

describe("App", () => {
  it("shows the API health status once the request succeeds", async () => {
    server.use(
      http.get("*/health", () => HttpResponse.json({ status: "ok", database: "connected" })),
    );

    render(<App />);

    expect(screen.getByText(/checking api status/i)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(/api is up, database connected/i)).toBeInTheDocument());
  });

  it("shows an error message when the health check fails", async () => {
    server.use(http.get("*/health", () => HttpResponse.json(null, { status: 500 })));

    render(<App />);

    await waitFor(() => expect(screen.getByText(/could not reach the api/i)).toBeInTheDocument());
  });
});
