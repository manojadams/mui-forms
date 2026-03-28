import { render } from "@testing-library/react";
import React from "react";
import FormControl from "../../forms/FormControl";

// Mock the core components
jest.mock("@manojadams/metaforms-core", () => {
    const React = require("react");
    return {
        BaseFormControl: class extends React.Component {
            constructor(props) {
                super(props);
                this.field = props.field || {};
                this.section = props.section;
                this.state = { error: { hasError: false, errorMsg: "" } };
                this.context = {
                    formConfig: { config: {} },
                    getIcon: jest.fn()
                };
            }

            getWrapperClassName() {
                return "meta-wrapper";
            }

            handleChange() {}

            handleValidation() {}

            setError() {}

            render() {
                const type = this.field.type;
                if (type === "text") return this.text();
                if (type === "select") return this.select();
                if (type === "checkbox") return this.checkbox();
                return null;
            }
        }
    };
});

// Mock child components to simplify
jest.mock("../../components/InputControl", () => (props) => (
    <div data-testid="input-control">{props.form.displayName}</div>
));
jest.mock("../../components/SelectControl", () => (props) => (
    <div data-testid="select-control">{props.form.displayName}</div>
));
jest.mock("../../components/CheckboxControl", () => (props) => (
    <div data-testid="checkbox-control">{props.form.displayName}</div>
));

describe("FormControl", () => {
    const defaultProps = {
        field: { name: "username", type: "text" },
        form: { displayName: "Username", value: "", validation: {} },
        name: "username"
    };

    it("should render text input correctly", () => {
        const { getByTestId } = render(<FormControl {...defaultProps} />);
        expect(getByTestId("input-control")).toBeTruthy();
    });

    it("should render select correctly", () => {
        const props = {
            ...defaultProps,
            field: { ...defaultProps.field, type: "select" },
            form: { ...defaultProps.form, displayName: "Country" }
        };
        const { getByTestId } = render(<FormControl {...props} />);
        expect(getByTestId("select-control")).toBeTruthy();
    });

    it("should render checkbox correctly", () => {
        const props = {
            ...defaultProps,
            field: { ...defaultProps.field, type: "checkbox" },
            form: { ...defaultProps.form, displayName: "Agree" }
        };
        const { getByTestId } = render(<FormControl {...props} />);
        expect(getByTestId("checkbox-control")).toBeTruthy();
    });

    it("should show validation error", () => {
        // To test showValidation, we can call it directly or trigger an error state
        const instance = new FormControl(defaultProps);
        instance.state = { error: { hasError: true, errorMsg: "Required field" } };
        const validation = instance.showValidation();
        const { getByText } = render(<div>{validation}</div>);
        expect(getByText("Required field")).toBeTruthy();
    });
});
