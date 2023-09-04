import React from "react";

import { motion } from "framer-motion";

import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-row items-center justify-between max-lg:flex-col gap-10 w-full max-container "
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col flex-1"
      >
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <button className="flex flex-row items-center justify-center font-montserrat border gap-2 px-7 py-4 text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ">
            View Details
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="flex flex-1 items-center justify-center "
      >
        <img
          className="object-contain"
          width={570}
          height={522}
          src={shoe8}
          alt="Best Shoe"
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
