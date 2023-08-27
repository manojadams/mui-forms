import React from "react";
import schemaDisabledTabs from "./schema-disabled-tabs.json";
import MuiForms from "mui-forms";

function Tab() {
    return (
        <MuiForms
            schema={schemaDisabledTabs}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Tab;
