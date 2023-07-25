import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";

function CreditCardForm() {
    return (
        <MuiForms
            config={{
                variant: "outlined",
                size: "small"
            }}
            schema={schema}
            onSubmit={() => {
                // to do
            }}
        />
    );
}

export default CreditCardForm;
