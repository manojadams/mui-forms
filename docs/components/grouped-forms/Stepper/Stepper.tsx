import React from "react";
import schema from "./schema.json";
import Metaform from "@manojadams/metaforms-mui";

function Stepper() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Stepper;
