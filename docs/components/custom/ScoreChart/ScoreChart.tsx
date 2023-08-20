import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import Pie from "./Pie";

function ScoreChart() {
    return (
        <div>
            <MuiForms 
                controls={{
                    "piechart": <Pie />
                }}
                schema={schema} 
                onSubmit={() => {
                    // handle submit
                }}/>
        </div>
        
    )
}

export default ScoreChart;
