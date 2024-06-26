import * as React from "react";
import { getAllByText, render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe("Basic Test", () => {
    it("render", async () => {
        render(<App />);
        expect(screen.getByText(/loading.../i)).toBeInTheDocument();
        expect(await screen.findByTestId(/noFollower/i)).toBeInTheDocument();
        waitFor(() => {
            expect(screen.getAllByText(/Sample/i)).toBeInTheDocument();
            expect(screen.getAllByText(/Sample/i)).toHaveLength(5);
        });
    });
});