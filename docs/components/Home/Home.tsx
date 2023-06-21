import React from "react";
import Metaform from "@manojadams/metaforms-mui";
import schema from "./schema.json";

function Home() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // handle submit
            }}
        />
    );
}

export default Home;
