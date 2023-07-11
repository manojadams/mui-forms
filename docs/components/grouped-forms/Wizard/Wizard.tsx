import React from "react";
import schema from "./schema.json";
import MaterialMetaform from "mui-forms";

function Wizard() {
    return (
        <MaterialMetaform
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
