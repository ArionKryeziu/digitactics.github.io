import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

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
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
