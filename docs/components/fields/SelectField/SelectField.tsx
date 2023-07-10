import React from "react";
import schema from "./schema.json";
import Metaform from "mui-forms";

function SelectField() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default SelectField;
