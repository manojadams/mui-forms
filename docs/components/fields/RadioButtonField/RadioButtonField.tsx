import React from "react";
import schema from "./schema.json";
import Metaform from "@manojadams/metaforms-mui";

function RadioButtonField() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default RadioButtonField;
