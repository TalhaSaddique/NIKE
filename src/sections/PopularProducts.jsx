import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container sm::mt-12">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-start gap-5 "
      >
        <h2 className="text-4xl font-palanquin font-bold  ">
          {" "}
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-white-400 ">
          Experience top-notch quality and style with our sought after
          selections. Discover a world of comfort, design and value.
        </p>
      </motion.div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
        <AnimatePresence>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <PopularProductCard {...product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PopularProducts;
