import React from "react";
import schema from "./schema.json";
import MaterialMetaform from "@manojadams/metaforms-mui";

function Wizard() {
    return (
        <MaterialMetaform
            theme={{
                sectionLayout: "wizard",
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

export default Wizard;
