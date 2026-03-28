import { render, fireEvent } from "@testing-library/react";
import React from "react";
import MonthControl from "../../components/MonthControl/MonthControl";

describe("MonthControl", () => {
  const defaultProps = {
    form: {
      displayName: "Expiry Date",
      value: "2023-10-01",
      validation: { required: true },
      placeholder: "Select month"
    },
    name: "expiry",
    size: "small",
    variant: "outlined",
    error: { hasError: false, errorMsg: "" },
    context: {},
    handleChange: jest.fn(),
    handleValidation: jest.fn()
  };

  it("should render correctly with label and value", () => {
    const { getByLabelText } = render(<MonthControl {...defaultProps} />);
    const input = getByLabelText("Expiry Date *");
    expect(input).toBeTruthy();
    // "2023-10-01" with "MMM yyyy" should be "Oct 2023"
    expect(input.value).toBe("Oct 2023");
  });

  it("should call handleValidation on blur", () => {
    const { getByLabelText } = render(<MonthControl {...defaultProps} />);
    const input = getByLabelText("Expiry Date *");
    fireEvent.blur(input);
    expect(defaultProps.handleValidation).toHaveBeenCalled();
  });

  it("should show error message when error is present", () => {
    const props = {
      ...defaultProps,
      error: { hasError: true, errorMsg: "Invalid month" }
    };
    const { getByText } = render(<MonthControl {...props} />);
    expect(getByText("Invalid month")).toBeTruthy();
  });

  it("should call handleChange when value is changed", () => {
    const { getByLabelText } = render(<MonthControl {...defaultProps} />);
    const input = getByLabelText("Expiry Date *");
    fireEvent.change(input, { target: { value: "Nov 2023" } });
    // The component's onChange will be called by DatePicker
    expect(defaultProps.handleChange).toHaveBeenCalled();
  });
});