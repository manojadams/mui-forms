import { render, fireEvent, within } from "@testing-library/react";
import React from "react";
import SelectControl from "../../components/SelectControl/SelectControl";

describe("SelectControl", () => {
    const defaultProps: any = {
        form: {
            displayName: "Gender",
            value: "",
            options: [
                { label: "Male", value: "male" },
                { label: "Female", value: "female" }
            ],
            validation: {},
            isDisabled: false
        },
        name: "gender",
        error: { hasError: false, errorMsg: "" },
        context: {},
        loading: false,
        handleChange: jest.fn(),
        handleValidation: jest.fn(),
        handleOpen: jest.fn(),
        showValidation: jest.fn(() => <div data-testid="validation" />)
    };

    it("should call handleOpen when clicked", () => {
        const props = {
            ...defaultProps,
            form: { ...defaultProps.form, events: { open: true } }
        };
        const { getByRole } = render(<SelectControl {...props} />);
        const select = getByRole("combobox");
        fireEvent.mouseDown(select);
        expect(props.handleOpen).toHaveBeenCalled();
    });

    it("should call handleChange when an option is selected", () => {
        const { getByRole } = render(<SelectControl {...defaultProps} />);
        const select = getByRole("combobox");
        fireEvent.mouseDown(select);

        const listbox = within(getByRole("listbox"));
        fireEvent.click(listbox.getByText("Male"));

        expect(defaultProps.handleChange).toHaveBeenCalled();
    });

    it("should show progress bar when loading", () => {
        const props = {
            ...defaultProps,
            loading: true
        };
        const { getByRole } = render(<SelectControl {...props} />);
        expect(getByRole("progressbar")).toBeTruthy();
    });

    it("should call handleValidation on blur", () => {
        const { getByRole } = render(<SelectControl {...defaultProps} />);
        const select = getByRole("combobox");
        fireEvent.blur(select);
        expect(defaultProps.handleValidation).toHaveBeenCalled();
    });
});
