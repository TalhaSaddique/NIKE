import React from "react";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex flex-row items-center justify-between max-lg:flex-col gap-10 "
    >
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold "
      >
        Sign Up for <span className="text-coral-red"> Updates </span> &
        Newsletters
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 150,
          damping: 10,
        }}
        className="lg:max-w-[40%] w-full flex flex-1 flex-row items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray dark:sm:border-white-400 rounded-full "
      >
        <input type="text" placeholder="subscribe@nike.ocm" className="input dark:bg-slate-900 " />
        <div className="flex flex-row max-sm:justify-end items-center justify-center max-sm:w-full ">
          <button className="flex flex-row items-center justify-center font-montserrat border gap-2 px-7 py-4 text-lg leading-none bg-coral-red rounded-full text-white border-coral-red w-full ">
            Sign Up
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
