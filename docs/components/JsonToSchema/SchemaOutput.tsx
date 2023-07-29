import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import SchemaUtil from "./SchemaUtil";
import { Button } from "@mui/material";

interface IProps {
    jsonData: string;
    setJsonData: (val: string) => void;
    handlePrevious: () => void;
    handleNext: (arg) => void;
}
function SchemaOutput(props: IProps) {
    const [schema, setSchema] = useState("");
    useEffect(() => {
        if (props.jsonData) {
            const schema = SchemaUtil.jsonToSchema(props.jsonData);
            setSchema(JSON.stringify(schema));
        }
    }, [props.jsonData]);
    return (
        <Wrapper>
            <TextAreaStyled
                placeholder="Edit your schema"
                value={schema}
                onChange={(e) => {
                    // props.setJsonData(e.target.value);
                }}
            />
            <ButtonGrp>
                <Button variant="contained" onClick={props.handlePrevious}>
                    Previous
                </Button>
                <Button variant="contained" onClick={() => props.handleNext(schema)}>
                    Next
                </Button>
            </ButtonGrp>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: calc(100% - 120px);
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const TextAreaStyled = styled.textarea`
    flex: 1;
    border: 1px solid #ccc;
    padding: 12px;
`;

const ButtonGrp = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;

export default SchemaOutput;
