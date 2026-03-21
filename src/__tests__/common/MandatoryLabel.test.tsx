import { render } from "@testing-library/react";
import React from "react";
import MandatoryLabel from "../../common/MandatoryLabel";

describe("MandatoryLabel", () => {
    it("should render an asterisk", () => {
        const { getByText } = render(<MandatoryLabel />);
        expect(getByText("*")).toBeTruthy();
    });
});
