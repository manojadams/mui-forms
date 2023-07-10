import React from "react";
import schema from "./schema.json";
import Metaform from "mui-forms";

function Form1() {
    return (
        <Metaform
            theme={{
                type: "mui",
                config: {
                    variant: "standard"
                }
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Form1;
