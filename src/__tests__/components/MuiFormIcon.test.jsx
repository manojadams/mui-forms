import { render } from "@testing-library/react";
import React from "react";
import MuiFormIcon from "../../components/MuiFormIcon/MuiFormIcon";

describe("MuiFormIcon", () => {
    it("should render icon name from props.name", () => {
        const { getByText } = render(<MuiFormIcon name="home" />);
        expect(getByText("home")).toBeTruthy();
    });

    it("should render icon name from props.config.name", () => {
        const { getByText } = render(<MuiFormIcon config={{ name: "person", position: "start" }} />);
        expect(getByText("person")).toBeTruthy();
    });

    it("should render empty when no name is provided", () => {
        const { container } = render(<MuiFormIcon />);
        expect(container.textContent).toBe("");
    });
});
