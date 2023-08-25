import React, { ReactNode, useEffect } from "react";
import css from "./style.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cards from "./Cards";
import Head from "next/head";
// import Cube from "../Cube";

interface IProps {
    children: ReactNode;
}
function LandingPage(props: IProps) {
    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            router.prefetch("/getting-started");
        }
    }, [router]);
    return (
        <>
            <Head>
                <title>Mui Forms - Create dynamic forms</title>
            </Head>
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
                        {/* <Cube /> */}
                    </div>
                </div>
                <div className={css.wave} />
                <div className={`${css.wave} ${css.wave2}`} />
                <div className={`${css.wave} ${css.wave3}`} />
                <Footer />
            </div>
        </>
    );
}

export default LandingPage;
