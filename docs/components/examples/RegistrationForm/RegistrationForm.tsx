import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";

function RegistrationForm() {
    return (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // handle code
            }}
        />
    );
}

export default RegistrationForm;
