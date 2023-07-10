import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";

function Checkbox() {
    return (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Checkbox;
