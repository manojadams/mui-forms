import React from "react";
import schema from "./schema.json";
import MaterialMetaform from "mui-forms";

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
