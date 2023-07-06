import React from "react";
import schema from "./schema.json";
import MaterialMetaform from "@manojadams/metaforms-mui";

function Tab() {
    return (
        <MaterialMetaform
            theme={{
                sectionLayout: "tabs",
                type: "default",
                config: {
                    variant: "filled",
                    tabs: {
                        variant: "standard",
                        disableRiple: "true"
                    }
                }
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Tab;
