import { render, fireEvent, within } from "@testing-library/react";
import React from "react";
import MultiSelectControl from "../../components/MultiSelectControl/MultiSelectControl";

describe("MultiSelectControl", () => {
    const defaultProps = {
        form: {
            displayName: "Skills",
            value: [],
            options: [
                { label: "React", value: "react" },
                { label: "Angular", value: "angular" },
                { label: "Vue", value: "vue" }
            ],

            validation: {},
            isDisabled: false
        },
        name: "skills",
        error: { hasError: false, errorMsg: "" },
        context: {},
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
        const { getByRole } = render(<MultiSelectControl {...props} />);
        const select = getByRole("combobox");
        fireEvent.mouseDown(select);
        expect(props.handleOpen).toHaveBeenCalled();
    });

    it("should call handleChange when an option is selected", () => {
        const { getByRole } = render(<MultiSelectControl {...defaultProps} />);
        const select = getByRole("combobox");
        fireEvent.mouseDown(select);

        const listbox = within(getByRole("listbox"));
        fireEvent.click(listbox.getByText("React"));

        expect(defaultProps.handleChange).toHaveBeenCalled();
    });

    it("should call handleValidation on blur", () => {
        const { getByRole } = render(<MultiSelectControl {...defaultProps} />);
        const select = getByRole("combobox");
        fireEvent.blur(select);
        expect(defaultProps.handleValidation).toHaveBeenCalled();
    });

    it("should render values as chips when variant is chip", () => {
        const props = {
            ...defaultProps,
            form: {
                ...defaultProps.form,
                value: ["react", "angular"],
                config: { variant: "chip" }
            }
        };
        const { getByText } = render(<MultiSelectControl {...props} />);
        expect(getByText("react")).toBeTruthy();
        expect(getByText("angular")).toBeTruthy();
    });

    it("should render values as CSV by default", () => {
        const props = {
            ...defaultProps,
            form: {
                ...defaultProps.form,
                value: ["react", "angular"]
            }
        };
        const { getByText } = render(<MultiSelectControl {...props} />);
        expect(getByText("react, angular")).toBeTruthy();
    });
});
