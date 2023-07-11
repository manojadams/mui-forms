import React from "react";
import schema from "./schema.json";
import MuiForms from "mui-forms";

function Form2() {
    return (
        <MuiForms
            config={{
                variant: "outlined"
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Form2;
