import React from "react";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

import { motion } from "framer-motion";

const SpecialOffer = () => {
  return (
    <section className="flex flex-row flex-wrap justify-between items-center max-xl:flex-col-reverse gap-10 max-container ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="flex flex-1 "
      >
        <img
          className="object-contain w-full "
          width={773}
          height={687}
          src={offer}
          alt="Special Offer"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col flex-1"
      >
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          <span className="text-coral-red">Speical </span>
          Offer
        </h2>
        <p className="mt-4 info-text ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-row flex-wrap gap-4 ">
          <button className="flex flex-row items-center justify-center font-montserrat border gap-2 px-7 py-4 text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ">
            Shop now
            <img
              className="w-5 h-5 ml-2 rounded-full"
              src={arrowRight}
              alt="Arrow Right"
            />
          </button>
          <button className="flex flex-row items-center justify-center font-montserrat border gap-2 px-7 py-4 text-lg leading-none bg-white dark:bg-slate-900 rounded-full text-slate-gray dark:text-white-400 border-slate-gray dark:border-white-400 ">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
