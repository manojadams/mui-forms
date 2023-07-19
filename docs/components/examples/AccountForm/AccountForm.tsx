import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";

function AccountForm() {
    return (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // to do
            }}
        />
    );
}

export default AccountForm;
