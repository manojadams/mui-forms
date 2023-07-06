import React from "react";
import schema from "./schema.json";
import MaterialMetaform from "@manojadams/metaforms-mui";

function Stepper() {
    return (
        <MaterialMetaform
            theme={{
                sectionLayout: "stepper",
                type: "default",
                config: {
                    variant: "filled"
                }
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Stepper;
