import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IProps {
    examples: Array<{ title: string; img: string; href: string }>;
}
function Cards(props: IProps) {
    const router = useRouter();
    return (
        <Wrapper>
            {props.examples.map((example) => (
                <Card
                    key={example.title}
                    title={example.title}
                    img={example.img}
                    handleClick={() => {
                        router.push(example.href);
                    }}
                />
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
