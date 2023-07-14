import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";

function RatingForm() {
    return (
        <MuiForms
            config={{
                variant: "outlined"
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default RatingForm;
