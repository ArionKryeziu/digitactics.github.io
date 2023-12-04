import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//services data
const services = [
  {
    name: "PRINT",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    link: "Learn more",
  },
  {
    name: "REKLAMA 3D",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    link: "Learn more",
  },
  {
    name: "PRINT ON DEMAND",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    link: "Learn more",
  },
  {
    name: "WEB   DEVELOPMENT",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    link: "Learn more",
  },
  {
    name: "Social Media",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat  mb-12 lg:mb-0 text-black"
          >
            <h2 className="h2 text-white mb-6">What We Do</h2>
            <h3 className="h3 text-white max-w-[455px] mb-16">
              We are a company with more than 10 years of experience in printing and also creating 3D marketing logos.<br/>
            </h3>
            <button className="btn btn-sm container-flex">See my work</button>
          </motion.div>
          {/* Services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
