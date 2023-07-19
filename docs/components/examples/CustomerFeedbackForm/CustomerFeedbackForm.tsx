import MuiForms from "mui-forms";
import React from "react";
import schema from "./schema.json";

function CustomerFeedbackForm() {
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

export default CustomerFeedbackForm;
