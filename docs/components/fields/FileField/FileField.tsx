import React from "react";
import Metaforms from "@manojadams/metaforms-mui";
import schema from "./schema.json";

function FileField() {
    return (
        <Metaforms
            schema={schema}
            onSubmit={() => {
                // to do
            }}
        />
    );
}

export default FileField;
