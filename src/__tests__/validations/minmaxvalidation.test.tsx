import { render } from "@testing-library/react";
import FormRenderer from "../../MetaformRenderer";
import * as minschema from "./../data/validation/min_validation.json";
import React from "react";

describe("Min. max validations for date", () => {
    it("Invalid min. date should not submit", () => {
        const mockFn = jest.fn();
        const { queryByText } = render(
            <FormRenderer
                schema={minschema}
                onSubmit={() => {
                    mockFn();
                }}
            />
        );
        const saveBtn = queryByText("Save");
        saveBtn?.click();
        expect(mockFn).not.toBeCalled();
    });
});
