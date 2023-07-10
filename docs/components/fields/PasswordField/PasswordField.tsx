import React from "react";
import Metaform from "mui-forms";
import schema from "./schema.json";

function PasswordField() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default PasswordField;
