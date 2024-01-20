import { render } from "@testing-library/react";
import React from "react";
import FormRenderer from "..";
import * as schema1 from "./data/schema_1.json";

const schema = {
    fields: [
        {
            name: "abc",
            meta: {
                displayName: "abc",
                displayType: "text"
            }
        }
    ]
};

describe("t1", () => {
    it("t11", () => {
        const output = render(
            <FormRenderer
                schema={schema}
                onSubmit={() => {
                    // todo
                }}
                
            />
        );
        expect(output.getByText("abc")).toBeTruthy();
    });
    it("Min. schema test", () => {
        const output = render(
            <FormRenderer
                schema={{ fields: [] }}
                onSubmit={() => {
                    console.log("Schema submit");
                }}
            />
        );
        expect(output.getByText("")).toBeTruthy();
    });
    it("Schema 1 test", () => {
        render(
            <FormRenderer
                schema={schema1}
                onSubmit={() => {
                    console.log("Schema1 submit");
                }}
            />
        );
    });
});
