//svg
import authPerson from "../../assets/svg/icon-auth.svg";
import plus from "../../assets/svg/icon-plus.svg";
import party from "../../assets/svg/icon-party.svg";

//styled components
import {
  AboutContainer,
  Heading,
  Content,
  ContentList,
  ContentItem,
  ImageContainer,
  TextContainer,
  Text,
} from "./About.styled";

import { useMemo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  // hidden: { x: -1000 },

  // visible: { x: 0, transition: { type: "spring", duration: 1, bounce: 0.3 } },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      // duration: 1,
      bounce: 0.3,
      staggerChildren: 0.8,
    },
  },
  hidden: { scale: 0 },
};

const items = {
  visible: { scale: 1 },
  hidden: { scale: 0 },
};

function About() {
  const contentItemConfig = useMemo(
    () => [
      {
        img: authPerson,
        alt: "auth person",
        gridArea: "one",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        img: plus,
        alt: "auth person",
        gridArea: "three",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        img: party,
        alt: "auth person",
        gridArea: "one",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    []
  );

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("view", inView);
    }
  }, [controls, inView]);

  return (
    <AboutContainer>
      <Heading>How does it work?</Heading>
      <Content
      // initial={{ x: 100 }}
      // whileInView={{
      //   x: 0,
      //   transition: { type: "spring", duration: 1, bounce: 0.3 },
      // }}
      // viewport={{ once: true, amount: 0.8 }}
      >
        <ContentList
          as={motion.ul}
          ref={ref}
          variants={squareVariants}
          initial="hidden"
          animate={controls}
        >
          {contentItemConfig.map((item, index) => (
            <ContentItem
              key={index}
              as={motion.li}
              // ref={ref}
              variants={items}
              // initial="hidden"
              // animate={controls}
            >
              <ImageContainer>
                <img src={item.img} alt={item.alt} />
              </ImageContainer>
              <TextContainer area={item.gridArea}>
                <Text>{item.text}</Text>
              </TextContainer>
            </ContentItem>
          ))}
        </ContentList>
      </Content>
    </AboutContainer>
  );
}

export default About;
