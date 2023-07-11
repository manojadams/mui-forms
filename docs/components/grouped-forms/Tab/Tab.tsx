import React from "react";
import schema from "./schema.json";
import MuiForms from "mui-forms";

function Tab() {
    return (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Tab;
