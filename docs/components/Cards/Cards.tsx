import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

interface IProps {
    examples: Array<{ title: string; img: string }>;
}
function Cards(props: IProps) {
    return (
        <Wrapper>
            {props.examples.map((example) => (
                <Card key={example.title} title={example.title} img={example.img} />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    gap: 50px;
    margin: 20px 0;
`;

export default Cards;
