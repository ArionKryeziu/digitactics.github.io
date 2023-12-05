import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
// Icons
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-white font-medium mb-2 tracking-wide">
                Mos Hezitoni Te Na Kontaktoni
              </h4>
              <h2 className="text-[45px] uppercase lg:text-[90px] leading-none mb-12">
                Ne mund te punojm <br /> Bashke
              </h2>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start border-white"
          >
            <input
              className="bg-transparent border-b border-white py-3 outline-none w-full placeholder:text-white focus:border-white transition-all text-white"
              type="text"
              placeholder="Emri"
            />
            <input
              className="bg-transparent border-b border-white py-3 outline-none w-full placeholder:text-white focus:border-white transition-all"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="bg-transparent border-b border-white py-12 outline-none w-full placeholder:text-white focus:border-white transition-all resize-none mb-12"
              placeholder="Mesazhi"
            ></textarea>
            <button className="btn btn-lg">Dergo Mesazhin</button>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ampunt: 0.7 }}
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
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
