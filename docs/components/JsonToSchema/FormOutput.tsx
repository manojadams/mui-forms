import React from "react";
import MuiForms from "mui-forms";

interface IProps {
    schema;
}
function FormOutput(props: IProps) {
    return (
        <div>
            <MuiForms
                schema={props.schema}
                onSubmit={() => {
                    // handle submit
                }}
            />
        </div>
    );
}

export default FormOutput;
