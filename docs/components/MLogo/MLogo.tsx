import React from "react";
import { motion } from "framer-motion";

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)"
    }
};

function MLogo() {
    return (
        <div
            className="container"
            style={{
                width: "50px"
            }}
        >
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="item">
                <motion.path
                    d="M0 100l0 100l50 50 50-50v100L75 75l-25 25-25-25z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
            </motion.svg>
        </div>
    );
}

export default MLogo;
