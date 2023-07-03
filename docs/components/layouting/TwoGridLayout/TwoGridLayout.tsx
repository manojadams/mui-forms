import React from "react";
import Metaform from "@manojadams/metaforms-mui";
import schema from "./schema.json";

function TwoGridLayout() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default TwoGridLayout;
