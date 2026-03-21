import { render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import Search from "../../components/Search/Search";

describe("Search", () => {
    const defaultProps: any = {
        form: {
            displayName: "Search Country",
            value: "in",
            options: [
                { label: "India", value: "in" },
                { label: "USA", value: "us" }
            ],
            events: {
                input: {
                    url: "/api/countries"
                }
            }
        },
        name: "country",
        label: "Search Country",
        variant: "outlined",
        error: { hasError: false, errorMsg: "" },
        context: {
            getData: jest.fn(() => Promise.resolve([{ label: "Canada", value: "ca" }])),
            handleError: jest.fn()
        },
        handleChange: jest.fn(),
        handleValidation: jest.fn(),
        loading: false,
        section: "general"
    };

    it("should render correctly with label and value", () => {
        const { getByLabelText } = render(<Search {...defaultProps} />);
        const input = getByLabelText("Search Country") as HTMLInputElement;
        expect(input).toBeTruthy();
        expect(input.value).toBe("India");
    });

    it("should call handleValidation on blur", () => {
        const { getByLabelText } = render(<Search {...defaultProps} />);
        const input = getByLabelText("Search Country");
        fireEvent.blur(input);
        expect(defaultProps.handleValidation).toHaveBeenCalled();
    });

    it("should call context.getData on input change", async () => {
        const { getByLabelText } = render(<Search {...defaultProps} />);
        const input = getByLabelText("Search Country");
        fireEvent.change(input, { target: { value: "Can" } });
        await waitFor(() => {
            expect(defaultProps.context.getData).toHaveBeenCalled();
        });
    });

    it("should show error message when error is present", () => {
        const props = {
            ...defaultProps,
            error: { hasError: true, errorMsg: "Country not found" }
        };
        const { getByText } = render(<Search {...props} />);
        expect(getByText("Country not found")).toBeTruthy();
    });
});
