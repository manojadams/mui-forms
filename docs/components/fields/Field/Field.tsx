import React from "react";
import Metaform from "@manojadams/metaforms-mui";
// import { ISchema } from "@manojadams/metaforms-core";

interface IProps {
    schema: any;
}

function Field(props: IProps) {
    return (
        <Metaform
            schema={props.schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Field;
