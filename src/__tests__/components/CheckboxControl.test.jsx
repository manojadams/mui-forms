import { render, fireEvent } from "@testing-library/react";
import React from "react";
import CheckboxControl from "../../components/CheckboxControl/CheckboxControl";

describe("CheckboxControl", () => {
  const defaultProps = {
    form: {
      displayName: "Interests",
      value: "coding",
      options: [
      { label: "Coding", value: "coding" },
      { label: "Reading", value: "reading" }],

      config: { multiple: true },
      isDisabled: false
    },
    handleChange: jest.fn(),
    handleValidation: jest.fn(),
    showValidation: jest.fn(() => <div data-testid="validation-error">Error</div>),
    className: "test-checkbox"
  };

  it("should render correctly with options", () => {
    const { getByLabelText } = render(<CheckboxControl {...defaultProps} />);
    expect(getByLabelText("Coding")).toBeTruthy();
    expect(getByLabelText("Reading")).toBeTruthy();
    expect(getByLabelText("Coding").checked).toBe(true);
    expect(getByLabelText("Reading").checked).toBe(false);
  });

  it("should call handleChange and handleValidation when a checkbox is clicked", () => {
    const { getByLabelText } = render(<CheckboxControl {...defaultProps} />);
    const readingCheckbox = getByLabelText("Reading");
    fireEvent.click(readingCheckbox);
    expect(defaultProps.handleChange).toHaveBeenCalled();
    expect(defaultProps.handleValidation).toHaveBeenCalled();
  });

  it("should render validation error via showValidation", () => {
    const { getByTestId } = render(<CheckboxControl {...defaultProps} />);
    expect(getByTestId("validation-error")).toBeTruthy();
  });

  it("should disable checkboxes when isDisabled is true", () => {
    const props = {
      ...defaultProps,
      form: { ...defaultProps.form, isDisabled: true }
    };
    const { getByLabelText } = render(<CheckboxControl {...props} />);
    expect(getByLabelText("Coding").disabled).toBe(true);
    expect(getByLabelText("Reading").disabled).toBe(true);
  });
});