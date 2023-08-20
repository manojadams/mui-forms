import MuiForms from "mui-forms";
import React from "react";
import schema from "./schama.json";

function InteractiveScoreChart() {
    return (
        <MuiForms 
            // components
            schema={schema}
            onSubmit={() => {
                // to do
            }}
        />
    )
}

export default InteractiveScoreChart;