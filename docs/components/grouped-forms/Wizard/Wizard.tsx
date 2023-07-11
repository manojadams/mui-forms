import React from "react";
import schema from "./schema.json";
import MuiForms from "mui-forms";

function Wizard() {
    return (
        <MuiForms
            sectionLayout="wizard"
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

export default Wizard;
