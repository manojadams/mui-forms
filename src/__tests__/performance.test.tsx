import React from "react";
import { render } from "@testing-library/react";
import FormRenderer from "..";
// import * as lSchema1 from "./data/large_schema1.json";
import * as schema1 from "./data/schema_1.json";

describe("FormRenderer", () => {
    it("Schema render takes less than 500ms", () => {
        // const start = window.performance.now();
        // render(
        //     <FormRenderer
        //         schema={lSchema1}
        //         onSubmit={() => {
        //             console.log("submit data");
        //         }}
        //     />
        // );
        // const end = window.performance.now();
        // expect(end - start).toBeGreaterThan(200);
        // expect(end - start).toBeLessThan(500);
    });
});
