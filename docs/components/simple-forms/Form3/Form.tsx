import React from "react";
import schema from "./schema.json";
import Metaform from "@manojadams/metaforms-mui";

function Form() {
    return (
        <Metaform
            theme={{
                type: "mui",
                config: {
                    variant: "filled"
                }
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Form;
