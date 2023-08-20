import MuiForms from "mui-forms";
import React from "react";
import schema from "./schema.json";
import Bar from "./Bar";

function InteractiveScoreChart() {
    return (
        <MuiForms
            components={{
                "barchart": Bar
            }}
            schema={schema}
            onSubmit={() => {
                // to do
            }}
        />
    )
}

export default InteractiveScoreChart;