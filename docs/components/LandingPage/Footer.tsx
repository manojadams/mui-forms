import styled from "@emotion/styled";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <Wrapper>
            <InnerWrapper>
                <div>
                    <p>
                        <GitHubIcon style={{
                            marginRight: "8px"
                        }}/>
                        <a href="https://github.com/manojadams/mui-forms">
                            Star us at github
                        </a>
                    </p>
                </div>
                <div><p>&copy; Copyright 2023 MuiForms.</p></div>
            </InnerWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border-top: 1px solid #ccc;
    padding-right: calc(max(env(safe-area-inset-right), 1.5rem));
    padding-left: calc(max(env(safe-area-inset-left), 1.5rem));
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 12px;
`;

const InnerWrapper = styled.div`
    max-width: 90rem;
    display: flex;
    justify-content: space-between;
`;

export default Footer;
