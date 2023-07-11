import React from "react";
import schema from "./schema.json";
import MuiForms from "mui-forms";

function Stepper() {
    return (
        <MuiForms
            sectionLayout="stepper"
            config={{
                variant: "filled"
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Stepper;
