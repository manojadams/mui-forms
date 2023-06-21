import React from "react";
import schema from "./schema.json";
import Metaform from "@manojadams/metaforms-mui";

function Form2() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Form2;
