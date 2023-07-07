import styled from "@emotion/styled";
import React from "react";

function Cards() {
    return (
        <div className="">
            <Card>
                <img className="form1" src="images/form1.png" alt="Form 1" />
            </Card>
        </div>
    );
}

const Card = styled.div`
    width: 90%;
    margin-left: auto;
    height: 400px;
    background: #fff;
    border-radius: 20px 20px 0 0;
    .form1 {
        width: 90%;
        margin: auto;
    }
`;
export default Cards;
