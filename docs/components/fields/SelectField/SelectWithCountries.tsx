import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema-countries.json";

function SelectWithCountries() {
    return (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default SelectWithCountries;
