import React, { useState } from "react";
import styled from "@emotion/styled";
import JsonInput from "./JsonInput";
import SchemaOutput from "./SchemaOutput";
import FormOutput from "./FormOutput";

function JsonToSchema() {
    const [jsonData, setJsonData] = useState("");
    const [views, setViews] = useState(1);
    const [schema, setSchema] = useState({});
    const handlePrevious = () => {
        setViews(views - 1);
    };
    const handleNext = () => {
        setViews(views + 1);
    };
    return (
        <Wrapper>
            <HeaderStyled>Json to schema converter</HeaderStyled>
            <p>Work in prgress</p>
            {/* <Slider>
                {views === 1 && (
                    <JsonInput
                        jsonData={jsonData}
                        setJsonData={setJsonData}
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                    />
                )}
                {views === 2 && (
                    <SchemaOutput
                        jsonData={jsonData}
                        setJsonData={setJsonData}
                        handlePrevious={handlePrevious}
                        handleNext={(schema) => {
                            setSchema(JSON.parse(schema));
                            handleNext();
                        }}
                    />
                )}
                {views === 3 && <FormOutput schema={schema} />}
            </Slider> */}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100%;
`;

const HeaderStyled = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;

const Slider = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export default JsonToSchema;
