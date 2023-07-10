import React from "react";
import schema from "./schema.json";
import Metaform from "mui-forms";

function Form2() {
    return (
        <Metaform
            theme={{
                type: "mui",
                config: {
                    variant: "outlined"
                }
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Form2;
