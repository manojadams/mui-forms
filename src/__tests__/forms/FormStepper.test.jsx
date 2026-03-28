import { render } from "@testing-library/react";
import React from "react";
import { FormStepper } from "../../forms/FormStepper";

// Mock the core components
jest.mock("@manojadams/metaforms-core", () => {
    const React = require("react");
    return {
        BaseFormStepper: class extends React.Component {
            constructor(props) {
                super(props);
                this.state = { activeIndex: 0 };
                this.fields = props.fields || [];
                this.context = {
                    formConfig: { config: { size: "medium" } }
                };
            }
            render() {
                return <div>{this.steps()}</div>;
            }
        },
        Sections: ({ sections, activeIndex }) => (
            <div data-testid="sections">
                {(sections || []).map((s, i) => (
                    <div key={i} data-testid={`section-${i}`}>
                        {activeIndex === i && s.name}
                    </div>
                ))}
            </div>
        )
    };
});

describe("FormStepper", () => {
    const fields = [
        { name: "step1", meta: { displayName: "Step 1" } },
        { name: "step2", meta: { displayName: "Step 2" } }
    ];

    it("should render steps correctly", () => {
        const { getByText } = render(<FormStepper fields={fields} />);
        expect(getByText("Step 1")).toBeTruthy();
        expect(getByText("Step 2")).toBeTruthy();
    });
});
