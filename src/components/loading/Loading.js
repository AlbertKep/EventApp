import { motion } from "framer-motion";

import { LoadingContainer, Dots, Dot, Text } from "./Loading.styled";

const dotsContainer = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const dotsVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};

function Loading() {
  return (
    <LoadingContainer>
      <Text>Loading...</Text>
      <Dots
        as={motion.div}
        variants={dotsContainer}
        initial="initial"
        animate="animate"
      >
        <Dot as={motion.span} variants={dotsVariants}></Dot>
        <Dot as={motion.span} variants={dotsVariants}></Dot>
        <Dot as={motion.span} variants={dotsVariants}></Dot>
      </Dots>
    </LoadingContainer>
  );
}

export default Loading;
