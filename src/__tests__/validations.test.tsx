import { render } from "@testing-library/react";
import FormRenderer from "../MetaformRenderer";
import React from "react";
import * as schema from "./data/required_validation.json";
import * as schema2 from "./data/validation_schema2.json";

describe("test form submit", () => {
    it("should not submit", () => {
        const obj = render(
            <FormRenderer
                schema={schema}
                onSubmit={() => {
                    // failed
                    expect(true).toEqual(false);
                }}
            />
        );
        const saveBtn = obj.queryByText("Save");
        saveBtn?.click();
    });
    it("should submit", () => {
        const obj = render(
            <FormRenderer
                schema={schema2}
                onSubmit={() => {
                    expect(true).toEqual(true);
                }}
            />
        );
        const saveBtn = obj.queryByText("Save");
        saveBtn?.click();
    });
});
