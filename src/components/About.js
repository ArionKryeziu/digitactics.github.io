import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]  bg-top"
          ></motion.div>
          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-white">About Us</h2>
            <h3 className="h3 mb-4">
              At NewPrint, we will create the best logos, printings and the best websites.
            </h3>
            <p className="mb-6">
              From crafting comprehensive strategies to executing individualized
              tactics, we cover every aspect of your brand's online journey. Our
              services include search engine optimization (SEO), pay-per-click
              (PPC) advertising, social media management, content marketing,
              website development, email marketing, captivating design,
              compelling ad campaigns, and much more. Our team of skilled
              designers creates visually stunning assets that align with your
              brand identity, while our advertising experts craft targeted
              campaigns to reach your ideal audience and drive conversions.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="test-[40px] font-teritary text-white font-bold mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="test-[40px] font-teritary text-white font-bold mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="test-[40px] font-teritary text-white font-bold  mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact us</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
