import React from "react";
import Metaform from "mui-forms";
import schema from "./schema.json";

function MixedLayout() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // to be added
            }}
        />
    );
}

export default MixedLayout;
