import React from "react";
import MaterialMetaform from "@manojadams/metaforms-mui";
import schema from "./schema.json";

function TwoGridLayout() {
    return (
        <MaterialMetaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default TwoGridLayout;
