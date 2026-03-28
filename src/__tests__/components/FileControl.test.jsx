import { render, fireEvent } from "@testing-library/react";
import React from "react";
import FileControl from "../../components/FileControl/FileControl";

describe("FileControl", () => {
  const defaultProps = {
    form: {
      displayName: "Profile Picture",
      value: "",
      validation: {},
      isDisabled: false,
      config: {}
    },
    field: { name: "profilePic" },
    name: "profilePic",
    section: "default",
    error: { hasError: false, errorMsg: "" },
    context: {
      setFieldProp: jest.fn()
    },
    handleChange: jest.fn(),
    handleValidation: jest.fn(),
    showValidation: jest.fn(() => <div data-testid="validation" />)
  };

  it("should render correctly", () => {
    const { getByText } = render(<FileControl {...defaultProps} />);
    expect(getByText("Profile Picture")).toBeTruthy();
  });

  it("should toggle popper when button is clicked", () => {
    const { getByRole, queryByText } = render(<FileControl {...defaultProps} />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(queryByText("Upload")).toBeTruthy();
    expect(queryByText("Remove")).toBeTruthy();
  });

  it("should call handleChange with empty value when removed", () => {const { getByRole, getByText } = render(<FileControl {...defaultProps} />);
    const button = getByRole("button");
    fireEvent.click(button);

    const removeMenuItem = getByText("Remove");
    fireEvent.click(removeMenuItem);

    expect(defaultProps.handleChange).toHaveBeenCalledWith(null, "");
    expect(defaultProps.context.setFieldProp).toHaveBeenCalledWith("default", "profilePic", "file", null);
  });

  it("should show multi-file text when multiple config is true", () => {
    const props = {
      ...defaultProps,
      form: {
        ...defaultProps.form,
        config: { multiple: true },
        files: [{}, {}]
      }
    };
    const { getByText } = render(<FileControl {...props} />);
    expect(getByText("2 file(s) selected")).toBeTruthy();
  });
});