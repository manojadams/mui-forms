import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import RadioButtonControl from "../../components/RadioButtonControl/RadioButtonControl";

describe("RadioButtonControl", () => {
    const defaultProps: any = {
        form: {
            displayName: "Frequency",
            value: "monthly",
            options: [
                { label: "Daily", value: "daily" },
                { label: "Monthly", value: "monthly" }
            ],
            validation: { required: true },
            isDisabled: false
        },
        handleChange: jest.fn(),
        handleValidation: jest.fn(),
        showValidation: jest.fn(() => <div data-testid="validation-error">Error</div>),
        context: {
            getIcon: jest.fn()
        },
        size: "medium",
        className: "test-class"
    };

    it("should render correctly with options", () => {
        const { getByText } = render(<RadioButtonControl {...defaultProps} />);
        expect(getByText("Frequency")).toBeTruthy();
        expect(getByText("Daily")).toBeTruthy();
        expect(getByText("Monthly")).toBeTruthy();
    });

    it("should call handleChange and handleValidation when an option is clicked", () => {
        const { getByText } = render(<RadioButtonControl {...defaultProps} />);
        const dailyButton = getByText("Daily");
        fireEvent.click(dailyButton);
        expect(defaultProps.handleChange).toHaveBeenCalled();
        expect(defaultProps.handleValidation).toHaveBeenCalled();
    });

    it("should render validation error via showValidation", () => {
        const { getByTestId } = render(<RadioButtonControl {...defaultProps} />);
        expect(getByTestId("validation-error")).toBeTruthy();
    });

    it("should disable buttons when isDisabled is true", () => {
        const props = {
            ...defaultProps,
            form: { ...defaultProps.form, isDisabled: true }
        };
        const { getByText } = render(<RadioButtonControl {...props} />);
        const dailyButton = getByText("Daily").closest("button");
        const monthlyButton = getByText("Monthly").closest("button");
        expect(dailyButton).toBeDisabled();
        expect(monthlyButton).toBeDisabled();
    });
});
