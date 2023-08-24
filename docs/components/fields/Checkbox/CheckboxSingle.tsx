import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema-single.json";

function CheckboxSingle() {
    return (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default CheckboxSingle;
