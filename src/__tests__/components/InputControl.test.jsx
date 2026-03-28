import { render, fireEvent } from "@testing-library/react";
import React from "react";
import InputControl from "../../components/InputControl/InputControl";

describe("InputControl", () => {
  const defaultProps = {
    form: {
      displayName: "Username",
      value: "",
      validation: {},
      isDisabled: false,
      isReadonly: false
    },
    name: "username",
    type: "text",
    variant: "outlined",
    error: { hasError: false, errorMsg: "" },
    context: {
      getFn: jest.fn()
    },
    handleChange: jest.fn(),
    handleValidation: jest.fn()
  };

  it("should render label and value correctly", () => {
    const { getByLabelText } = render(<InputControl {...defaultProps} />);
    const input = getByLabelText("Username");
    expect(input).toBeTruthy();
    expect(input.value).toBe("");
  });

  it("should render with asterisk when required", () => {
    const props = {
      ...defaultProps,
      form: { ...defaultProps.form, validation: { required: true } }
    };
    const { getByLabelText } = render(<InputControl {...props} />);
    expect(getByLabelText("Username *")).toBeTruthy();
  });

  it("should call handleChange on value change", () => {
    const { getByLabelText } = render(<InputControl {...defaultProps} />);
    const input = getByLabelText("Username");
    fireEvent.change(input, { target: { value: "testuser" } });
    expect(defaultProps.handleChange).toHaveBeenCalled();
  });

  it("should call handleValidation on blur", () => {
    const { getByLabelText } = render(<InputControl {...defaultProps} />);
    const input = getByLabelText("Username");
    fireEvent.blur(input);
    expect(defaultProps.handleValidation).toHaveBeenCalled();
  });

  it("should show error message when error is present", () => {
    const props = {
      ...defaultProps,
      error: { hasError: true, errorMsg: "Invalid username" }
    };
    const { getByText } = render(<InputControl {...props} />);
    expect(getByText("Invalid username")).toBeTruthy();
  });

  it("should show info text when provided", () => {
    const props = {
      ...defaultProps,
      form: {
        ...defaultProps.form,
        validation: { info: "Enter your username" }
      }
    };
    const { getByText } = render(<InputControl {...props} />);
    expect(getByText("Enter your username")).toBeTruthy();
  });
});