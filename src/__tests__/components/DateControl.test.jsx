import { render, fireEvent } from "@testing-library/react";
import React from "react";
import DateControl from "../../components/DateControl/DateControl";

describe("DateControl", () => {
    const defaultProps = {
        form: {
            displayName: "Birthday",
            value: "2023-10-01",
            validation: { required: true },
            placeholder: "Select date",
            config: { inputFormat: "dd/MM/yyyy" }
        },
        name: "birthday",
        size: "small",
        variant: "outlined",
        error: { hasError: false, errorMsg: "" },
        context: {
            emit: jest.fn()
        },
        handleChange: jest.fn(),
        handleValidation: jest.fn(),
        setError: jest.fn(),
        section: "personal"
    };

    it("should render correctly with label and value", () => {
        const { getByLabelText } = render(<DateControl {...defaultProps} />);
        const input = getByLabelText("Birthday *");
        expect(input).toBeTruthy();
        // The value might be formatted based on inputFormat
        // "2023-10-01" with "dd/MM/yyyy" should be "01/10/2023"
        expect(input.value).toBe("01/10/2023");
    });

    it("should call handleValidation on blur", () => {
        const { getByLabelText } = render(<DateControl {...defaultProps} />);
        const input = getByLabelText("Birthday *");
        fireEvent.blur(input);
        expect(defaultProps.handleValidation).toHaveBeenCalled();
    });

    it("should show error message when error is present", () => {
        const props = {
            ...defaultProps,
            error: { hasError: true, errorMsg: "Invalid date" }
        };
        const { getByText } = render(<DateControl {...props} />);
        expect(getByText("Invalid date")).toBeTruthy();
    });

    it("should call handleChange when value is changed via input", () => {
        const { getByLabelText } = render(<DateControl {...defaultProps} />);
        const input = getByLabelText("Birthday *");
        // Triggering change on the input field
        fireEvent.change(input, { target: { value: "02/10/2023" } });
        // The component's onChange will be called by DatePicker
        // We expect handleChange to be called eventually
        expect(defaultProps.handleChange).toHaveBeenCalled();
    });
});
