import React from "react";
import styled from "@emotion/styled";

function Heading() {
    return (
        <HeadingStyled>
            Create <span className="black">Material forms </span>
            from{" "}
            <a className="underline black" href="https://json-schema.org/" target="_blank" rel="noreferrer">
                json
            </a>
        </HeadingStyled>
    );
}

const HeadingStyled = styled.h2`
    font-size: 48px;
    font-weight: bold;
    text-align: center;
`;

export default Heading;
