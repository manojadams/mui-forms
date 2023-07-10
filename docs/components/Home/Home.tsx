import React from "react";
import MaterialMetaform from "mui-forms";
import schema from "./schema.json";

function Home() {
    return (
        <MaterialMetaform
            theme={{
                sectionLayout: "tabs",
                type: "section",
                config: {
                    variant: "filled",
                    tabs: {
                        variant: "standard"
                        // disableRiple: "true"
                    }
                }
            }}
            schema={schema}
            onSubmit={() => {
                // handle submit
            }}
        />
    );
}

export default Home;