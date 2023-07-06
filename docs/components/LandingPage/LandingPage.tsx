import React, { ReactNode } from "react";
import css from "./style.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cards from "./Cards";

interface IProps {
    children: ReactNode;
}
function LandingPage(props: IProps) {
    const router = useRouter();
    return (
        <div className={`${css.wrapper} ${css.gradient}`}>
            <div className={css.main_content}>
                <div className={css.text_block}>
                    {props.children}
                    <div className={css.get_started_block}>
                        <Button
                            className="bg-primary border-24"
                            variant="contained"
                            size="large"
                            onClick={() => {
                                router.push("/getting-started");
                            }}
                        >
                            Get Started &nbsp;
                            <ArrowForwardIcon />
                        </Button>
                    </div>
                </div>
                <div className={css.card_wrapper}>
                    <Cards />
                </div>
            </div>
            <div className={css.wave} />
            <div className={`${css.wave} ${css.wave2}`} />
            <div className={`${css.wave} ${css.wave3}`} />
            <Footer />
        </div>
    );
}

export default LandingPage;
