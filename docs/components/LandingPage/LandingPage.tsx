import React, { ReactNode, useEffect } from "react";
import css from "./style.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cards from "./Cards";
import Head from "next/head";
import { Row } from "layout-emotions";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
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
                <div className={css.features}>
                    <h2 className={css.features_title}>Features</h2>
                    <hr className={css.features_divider} />
                    <Row className={css.features_row}>
                        <div className={"mcol " + css.features_column}>
                            <ul>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="https://mui.com/material-ui/getting-started/supported-components/">
                                        Material UI Components
                                    </a>
                                </li>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Custom components</a>
                                </li>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">
                                        Easily define field relationships
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={"mcol " + css.features_column}>
                            <ul>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Built-in layouting</a>
                                </li>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Responsive</a>
                                </li>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Load data from API</a>
                                </li>
                            </ul>
                        </div>
                        <div className={"mcol " + css.features_column}>
                            <ul>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Mobile ready</a>
                                </li>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Extensible</a>
                                </li>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Production ready</a>
                                </li>
                            </ul>
                        </div>
                        <div className={"mcol " + css.features_column}>
                            <ul>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Simple forms</a>
                                </li>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Stepper forms</a>
                                </li>
                                <li>
                                    <ArrowRightAltIcon />
                                    <a href="">Wizard forms</a>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </div>
                {/* <div className={css.wave_wrapper}>
                    <div className={css.wave} />
                    <div className={`${css.wave} ${css.wave2}`} />
                    <div className={`${css.wave} ${css.wave3}`} />
                </div> */}
                <Footer />
            </div>
        </>
    );
}

export default LandingPage;
