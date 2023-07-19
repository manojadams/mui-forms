import React from "react";
import MuiForms from "mui-forms";
import schema from "./../examples/RegistrationForm/schema.json";

function Home() {
    return (
        <>
            <MuiForms
                schema={schema}
                onSubmit={() => {
                    // handle submit
                }}
            />
        </>
    );
}

export default Home;
