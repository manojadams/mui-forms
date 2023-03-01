import { render } from "@testing-library/react";
import React from "react";
import FormRenderer from "..";

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
                onSubmit={() => {
                    // todo
                }}
                schema={schema}
            />
        );
        expect(output.getByText("abc")).toBeTruthy();
    });
});
