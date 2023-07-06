import React from "react";
import styled from "@emotion/styled";

function Heading() {
    return (
        <HeadingStyled>
            Make dynamic forms quickly <br />
            using{" "}
            <a className="underline blue" href="https://mui.com" target="_blank" rel="noreferrer">
                Material UI
            </a>{" "}
            and{" "}
            <a className="underline black" href="https://json-schema.org/" target="_blank" rel="noreferrer">
                json schema
            </a>
            .
        </HeadingStyled>
    );
}

const HeadingStyled = styled.h2`
    font-size: 48px;
    font-weight: bold;
`;

export default Heading;
