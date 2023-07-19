import React from "react";
import styled from "@emotion/styled";

interface IProps {
    title: string;
    img: string;
    handleClick: () => void;
}

function Card(props: IProps) {
    return (
        <CardStyled onClick={props.handleClick}>
            <img src={props.img} alt="form" />
            <BackdropStyled className="backdrop">{props.title}</BackdropStyled>
        </CardStyled>
    );
}

const CardStyled = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    min-height: 12rem;
    background-color: var(--color-grey-1);
    width: 100%;
    box-shadow: #0000001a 0 20px 25px -5px, #0000000a 0 10px 10px -5px;
    &:hover .backdrop {
        visibility: visible;
        opacity: 1;
    }
    cursor: pointer;
`;

const BackdropStyled = styled.div`
    position: absolute;
    inset: 0;
    color: #fff;
    background-color: #000000a6;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
`;

export default Card;
