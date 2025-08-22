import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TinyReactDialog } from "../src";
import { useState } from "react";
import { userEvent } from "@testing-library/user-event";

const ExamplePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisible = () => setIsVisible(!isVisible);

    return (
        <>
            <button onClick={toggleVisible}>Test click</button>
            <TinyReactDialog visible={isVisible} onClose={toggleVisible}>
                Test content
            </TinyReactDialog>
        </>
    );
};

describe("Tiny React Dialog integration tests", () => {
    it("should not be visible when mounted with visible=false", () => {
        render(
            <TinyReactDialog visible={false} onClose={() => {}}>
                Test content
            </TinyReactDialog>
        );

        expect(screen.queryByText("Test content")).toBeNull();
    });
    it("should be visible when mounted with visible=true", () => {
        render(
            <TinyReactDialog visible={true} onClose={() => {}}>
                Test content
            </TinyReactDialog>
        );

        expect(screen.queryByText("Test content")).not.toBeNull();
    });
    it("should open and close correctly", async () => {
        render(<ExamplePage />);

        // visibility of the component initialised to false
        expect(screen.queryByText("Test content")).toBeNull();

        // visible when visibility toggles to true
        await userEvent.click(screen.getByText("Test click"));
        expect(screen.queryByText("Test content")).not.toBeNull();

        //stopPropagation prevents closing when the container is clicked
        await userEvent.click(
            document.querySelector(".tiny-react-dialog__container")!
        );
        expect(screen.queryByText("Test content")).not.toBeNull();

        //the dialog closes when close button is clicked
        await userEvent.click(
            document.querySelector(".tiny-react-dialog__close")!
        );
        expect(screen.queryByText("Test content")).toBeNull();

        //the dialog closes when the background overlay is clicked
        await userEvent.click(screen.getByText("Test click"));
        await userEvent.click(
            document.querySelector(".tiny-react-dialog__overlay")!
        );
        expect(screen.queryByText("Test content")).toBeNull();
    });
});
