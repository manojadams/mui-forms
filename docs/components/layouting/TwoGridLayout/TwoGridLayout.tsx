import React from "react";
import MaterialMetaform from "mui-forms";
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
