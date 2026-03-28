import { render } from "@testing-library/react";
import React from "react";
import CustomControl from "../../components/CustomControl/CustomControl";

describe("CustomControl", () => {
    const defaultProps = {
        form: {
            displayName: "Custom",
            value: "",
            validation: {},
            isDisabled: false,
            config: { template: "myCustomTemplate" }
        },
        name: "custom",
        error: { hasError: false, errorMsg: "" },
        context: {
            getControlElements: jest.fn(),
            form: {}
        },
        handleChange: jest.fn(),
        handleValidation: jest.fn(),
        showValidation: jest.fn(() => <div data-testid="validation" />)
    };

    it("should render custom component when template is found", () => {
        const CustomComp = ({ field }) => <div data-testid="custom-comp">{field.displayName}</div>;
        defaultProps.context.getControlElements.mockReturnValue(() => <CustomComp field={defaultProps.form} />);

        const { getByTestId, getByText } = render(<CustomControl {...defaultProps} />);

        expect(getByTestId("custom-comp")).toBeTruthy();
        expect(getByText("Custom")).toBeTruthy();
        expect(getByTestId("validation")).toBeTruthy();
    });

    it("should render empty when template is not found", () => {
        defaultProps.context.getControlElements.mockReturnValue(null);
        const { container } = render(<CustomControl {...defaultProps} />);
        expect(container.firstChild).toBeNull();
    });
});
