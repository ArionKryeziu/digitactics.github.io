import React from "react";
// Images
import Image from "../assets/bgphototest.png";
// Icons
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope, FaLocationArrow} from "react-icons/fa";
// Type Animation
import { TypeAnimation } from "react-type-animation";
// Motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-white lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ampunt: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[80px] mb-5 text-gradient"
            >
              NEWPRINT
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ampunt: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[-1]"
            >
              {/* <span className="text-white mr-8 mb-8 text-[36px]">
                Digital Marketing Agency
              </span> */}
              <TypeAnimation
                sequence={[
                  "NEWPRINT",
                  2000,
                  "PRINT",
                  2000,
                  "Design",
                  2000,
                  "WebDevelopment",
                  2000,
                  "3D Reklama",
                  2000,
                  "Reklama",
                  2000,
                ]}
                speed={50}
                className="text-gradient break-normal"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ampunt: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Mirë se vini në NEWPRINT, destinacioni juaj për stil personalizuar dhe shprehje! Zbuloni shërbimet e printimit të personalizuar me cilësi të lartë për rroba dhe më shumë. Nga veshjet e bukura deri te printime unike, ne sjellim ide të tua në jetë me ngjyra tërheqëse dhe cilësi të qëndrueshme. Ngriti pamjen tënde dhe hapsirën lehtë – fillo krijimin me NEWPRINT sot!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ampunt: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Na Kontaktoni</button>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.instagram.com/newprint_ks/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61553912956307" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://www.tiktok.com/@ariony0" target="_blank">
                <FaTiktok />
              </a>
              <a href="https://wa.me/+38349251299?text=Pershendetje" target="_blank">
                <FaWhatsapp />
              </a>
              <a href="tel://+38349251299" target="_blank">
                <FaPhone />
              </a>
              <a target="_blank" href="mailto:kryeziuarion15@gmail.com">
                <FaEnvelope />
              </a>
              <a target="_blank" href="https://maps.app.goo.gl/E948E1m42Ar5uu4a9">
                <FaLocationArrow />
              </a>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            width="300"
            height="300"
            className="hidden lg:flex flex-1 max-w-[270px] lg:max-w-[422px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
