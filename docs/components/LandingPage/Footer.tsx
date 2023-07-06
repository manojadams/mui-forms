import styled from "@emotion/styled";
import React from "react";

function Footer() {
    return (
        <Wrapper>
            <InnerWrapper>
                <div>&copy; Copyright 2023. All rights reserved.</div>
                <div></div>
            </InnerWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border-top: 1px solid #ccc;
    padding-right: calc(max(env(safe-area-inset-right), 1.5rem));
    padding-left: calc(max(env(safe-area-inset-left), 1.5rem));
    padding-top: 12px;
    font-size: 12px;
`;

const InnerWrapper = styled.div`
    max-width: 90rem;
`;

export default Footer;
