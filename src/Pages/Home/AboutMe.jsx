import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutMe() {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end center"],
    });

    const yHeader = useTransform(scrollYProgress, [0, 1], ["40%", "-120%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"]);
    const yImg = useTransform(scrollYProgress, [0, 1], ["50%", "-200%"]);

    return (
        <section id="AboutMe" className="about--section" ref={ref}>

            <motion.div style={{ y: yImg }}>
                <div className="about--section--img">
                    <img src="./img/about-pic-2.png" alt="About Me" />
                </div>
            </motion.div>

            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="sub--title">About</p>
                    <motion.h1 style={{ y: yHeader }}  className="skills--section--heading">About Me</motion.h1>
                    <motion.p style={{ y: yText }} p className="hero--section--description">I'm a Computer Engineering student at Costa Rica Institute of Technology. Through my career a have worked in several projects that involved learning multiple programming languages, algorithms and data structures, frameworks, database engines, HDLs, operating systems and other technologies and tools.</motion.p>
                    <motion.p style={{ y: yText }} p className="hero--section--description">I love playing soccer, working out at the gym, playing video games, and hanging out with my friends. Additionally, I absolutely love pasta!</motion.p>
                </div>
            </div>
        </section>
    )
}