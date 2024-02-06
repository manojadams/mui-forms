import React from "react";
import schema from "./schema.json";
import Metaform from "mui-forms";

function SearchField() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default SearchField;
