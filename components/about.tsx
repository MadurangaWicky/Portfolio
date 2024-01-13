"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After selecting to the <span className="font-medium"> University of Moratuwa</span> for the degree in{" "}
        <span className="font-medium">Information Technology</span>, I decided to pursue my
        passion for programming. In University, I learned coding and learned 
        <span className="font-medium"> full-stack web development</span>.
        <span className="italic"> My favorite part of the programming</span> is 
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. My core stack in Web development
        is{" "}
        <span className="font-medium">
           React, .NET, Spring Boot, SQL and MongoDB
        </span>
        . I am also familiar with React Native and Flutter. I am always looking to
        learn new technologies. I worked in several Machine Learning and Deep Learning projects as well. 
        So i'm ok with <span className="front-medium"> Python with Tensorflow, PyTorch and Keras</span>. I am currently looking for a
        <span className="font-medium"> full-time position</span> as a software
        Engineer or Machine Learning Engineer.
      </p>

      <p>
        When I'm not coding, I enjoy playing
        video games, watching movies, and playing Cricket. Also i enjoy
        <span className="font-medium"> learning new things</span>. I am currently
        learning about
        <span className="font-medium"> IoT and AI Engineering</span>.
      </p>
    </motion.section>
  );
}
