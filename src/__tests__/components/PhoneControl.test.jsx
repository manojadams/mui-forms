import { render, fireEvent } from "@testing-library/react";
import React from "react";
import PhoneControl from "../../components/PhoneControl/PhoneControl";

// Mock react-phone-input-2
jest.mock("react-phone-input-2", () => {
  return (props) =>
  <input
    data-testid="phone-input"
    value={props.value}
    onChange={(e) => props.onChange(e.target.value)}
    onBlur={props.onBlur}
    placeholder={props.placeholder} />;


});

describe("PhoneControl", () => {
  const defaultProps = {
    form: {
      displayName: "Phone Number",
      value: "919876543210",
      placeholder: "Enter phone number",
      validation: { required: true },
      config: { country: "in" }
    },
    name: "phone",
    handleChange: jest.fn(),
    handleValidation: jest.fn(),
    validate: jest.fn()
  };

  it("should render correctly", () => {
    const { getByTestId, getByPlaceholderText } = render(<PhoneControl {...defaultProps} />);
    const input = getByTestId("phone-input");
    expect(input).toBeTruthy();
    expect(input.value).toBe("919876543210");
    expect(getByPlaceholderText("Enter phone number")).toBeTruthy();
  });

  it("should call handleChange and validate on value change", () => {
    const { getByTestId } = render(<PhoneControl {...defaultProps} />);
    const input = getByTestId("phone-input");
    fireEvent.change(input, { target: { value: "919999999999" } });
    expect(defaultProps.handleChange).toHaveBeenCalledWith(null, "919999999999");
    expect(defaultProps.validate).toHaveBeenCalledWith("919999999999");
  });

  it("should call handleValidation on blur", () => {
    const { getByTestId } = render(<PhoneControl {...defaultProps} />);
    const input = getByTestId("phone-input");
    fireEvent.blur(input);
    expect(defaultProps.handleValidation).toHaveBeenCalled();
  });
});