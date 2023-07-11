import React from "react";
import schema from "./schema.json";
import MuiForms from "mui-forms";

function Form() {
    return (
        <MuiForms
            config={{
                variant: "filled"
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Form;
