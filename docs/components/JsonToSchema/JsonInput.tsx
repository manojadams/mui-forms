import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

interface IProps {
    jsonData: string;
    setJsonData: (val: string) => void;
    handlePrevious: () => void;
    handleNext: () => void;
}
function JsonInput(props: IProps) {
    return (
        <Wrapper>
            <TextAreaStyled
                placeholder="Paste your json data here"
                value={props.jsonData}
                onChange={(e) => {
                    props.setJsonData(e.target.value);
                }}
            />
            <ButtonGrp>
                <Button variant="contained" onClick={props.handlePrevious}>
                    Previous
                </Button>
                <Button variant="contained" onClick={props.handleNext}>
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

export default JsonInput;
