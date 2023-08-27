import styled from "@emotion/styled";
import React from "react";

function Cards() {
    return (
        <div className="">
            <Card>
                <div className="img-wrapper">
                    <img className="form1" src="images/form1.png" alt="Form 1" />
                </div>
            </Card>
        </div>
    );
}

const Card = styled.div`
    width: 90%;
    margin-left: auto;
    height: 420px;
    overflow: hidden;
    background: #fff;
    border-radius: 20px 20px 0 0;
    .img-wrapper {
        max-height: calc(100% - 12px);
    }
    .form1 {
        width: 90%;
        margin: auto;
    }
`;
export default Cards;
