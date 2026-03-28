import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Section from "../../forms/Section";

// Mock the core components
jest.mock("@manojadams/metaforms-core", () => ({
  FormFieldRenderer: (props) =>
  <div data-testid={`field-${props.name}`}>{props.form?.displayName}</div>

}));

describe("Section", () => {
  const defaultProps = {
    section: {
      name: "personalInfo",
      fields: [
      { name: "firstName", meta: { displayName: "First Name" } },
      { name: "lastName", meta: { displayName: "Last Name" } }],

      meta: { type: "section" }
    },
    form: {
      personalInfo: {
        firstName: { displayName: "First Name" },
        lastName: { displayName: "Last Name" }
      }
    },
    activeIndex: 0,
    index: 0,
    context: {
      getGridConfig: jest.fn()
    }
  };

  it("should render correctly when active", () => {
    const { getByTestId, container } = render(<Section {...defaultProps} />);

    expect(container.firstChild).toHaveClass("active");
    expect(getByTestId("field-firstName")).toBeTruthy();
    expect(getByTestId("field-lastName")).toBeTruthy();
  });

  it("should not be active when index doesn't match activeIndex", () => {
    const { container } = render(<Section {...defaultProps} activeIndex={1} />);
    expect(container.firstChild).not.toHaveClass("active");
  });
});