import { render, fireEvent } from "@testing-library/react";
import React from "react";
import RadioControl from "../../components/RadioControl/RadioControl";

describe("RadioControl", () => {
  const defaultProps = {
    form: {
      displayName: "Gender",
      value: "male",
      options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" }],

      validation: { required: true },
      isDisabled: false
    },
    handleChange: jest.fn(),
    handleValidation: jest.fn()
  };

  it("should render radio buttons correctly", () => {
    const { getByLabelText, getByText } = render(<RadioControl {...defaultProps} />);
    expect(getByText("Gender")).toBeTruthy();
    expect(getByLabelText("Male")).toBeTruthy();
    expect(getByLabelText("Female")).toBeTruthy();
    expect(getByLabelText("Male").checked).toBe(true);
  });

  it("should call handleChange when a radio button is clicked", () => {
    const { getByLabelText } = render(<RadioControl {...defaultProps} />);
    const femaleRadio = getByLabelText("Female");
    fireEvent.click(femaleRadio);
    expect(defaultProps.handleChange).toHaveBeenCalled();
  });

  it("should render as disabled when isDisabled is true", () => {
    const props = {
      ...defaultProps,
      form: { ...defaultProps.form, isDisabled: true }
    };
    const { getByLabelText } = render(<RadioControl {...props} />);
    expect(getByLabelText("Male").disabled).toBe(true);
    expect(getByLabelText("Female").disabled).toBe(true);
  });
});