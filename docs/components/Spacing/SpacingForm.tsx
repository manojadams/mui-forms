import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";

const SpacingForm = ({ gapX, gapY }) => {
    return (
        <div>
            <MuiForms
                config={{
                    gapX,
                    gapY
                }}
                schema={schema}
                onSubmit={(formData) => {
                    // TO DO
                }}
            />
        </div>
    );
};

export default SpacingForm;
