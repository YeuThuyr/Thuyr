'use client'

import React, { Children } from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

interface Props {
    children: string
}

const Motion_1 = ({children} : Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div>
            <motion.img ref={ref}
            src={children}
            initial={{opacity: 0}}
            animate={{opacity: isInView ? 1: 0}}
            transition={{duration: 1, ease: "easeOut"}}></motion.img>
        </div>
    )
}
export default Motion_1;
