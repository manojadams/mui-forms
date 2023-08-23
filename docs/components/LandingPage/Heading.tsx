import React from "react";
import styled from "@emotion/styled";

function Heading() {
    return (
        <HeadingStyled>
            Make dynamic forms quickly <br />
            using{" "}
            <a className="underline black" href="https://json-schema.org/" target="_blank" rel="noreferrer">
                json
            </a>
        </HeadingStyled>
    );
}

const HeadingStyled = styled.h2`
    font-size: 48px;
    font-weight: bold;
`;

export default Heading;
