import { render } from "@testing-library/react";
import React from "react";
import Label from "../../components/Label/Label";

describe("Label", () => {
  const defaultProps = {
    form: {
      displayName: "User ID",
      value: "USER123",
      config: {}
    },
    context: {
      getIcon: jest.fn()
    },
    size: "medium",
    className: "test-label"
  };

  it("should render display name and value correctly", () => {
    const { getByText } = render(<Label {...defaultProps} />);
    expect(getByText("User ID")).toBeTruthy();
    expect(getByText("USER123")).toBeTruthy();
  });

  it("should render start icon when provided in config", () => {
    const props = {
      ...defaultProps,
      form: {
        ...defaultProps.form,
        config: {
          icons: {
            userIcon: { type: "start" }
          }
        }
      },
      context: {
        getIcon: jest.fn(() => <span data-testid="start-icon">Icon</span>)
      }
    };
    const { getByTestId } = render(<Label {...props} />);
    expect(getByTestId("start-icon")).toBeTruthy();
  });
});