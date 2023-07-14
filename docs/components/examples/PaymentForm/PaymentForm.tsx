import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";

function PaymentForm() {
    return (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // to do
            }}
        />
    );
}

export default PaymentForm;
