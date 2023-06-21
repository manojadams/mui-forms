import React from "react";
import Metaform from "@manojadams/metaforms-mui";
import schema from "./schema.json";

function TextField() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default TextField;
