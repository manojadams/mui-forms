import React from "react";
import schema from "./schema.json";
import Metaform from "mui-forms";

function EmailField() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default EmailField;
