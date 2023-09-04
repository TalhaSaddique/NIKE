import React, { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

import { motion } from "framer-motion";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <motion.div
        initial={{ opacity: 0, y: -50, zIndex: 10 }}
        whileInView={{ opacity: 1, y: 0, zIndex: 10 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:dark:bg-slate-900 xl:whitespace-nowrap relative z-40 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray dark:text-white-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <button className="flex flex-row items-center justify-center font-montserrat border gap-2 px-7 py-4 text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ">
          Shop now
          <img
            className="w-5 h-5 ml-2 rounded-full"
            src={arrowRight}
            alt="Arrow Right"
          />
        </button>
        <div className="flex flex-row items-start justify-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray dark:text-white-400 ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex flex-row sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                shoe={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
