import React from "react";
import schema from "./schema.json";
import MuiForms from "mui-forms";

function Form1() {
    return (
        <MuiForms
            config={{
                variant: "standard"
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Form1;
