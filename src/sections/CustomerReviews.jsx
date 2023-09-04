import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

import { motion, AnimatePresence } from "framer-motion";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="font-palanquin text-4xl font-bold text-center ">
          What Our <span className="text-coral-red "> Customers </span> Say?
        </h3>
        <p className="info-text mt-4 m-auto max-w-lg text-center ">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap flex-1 items-center justify-evenly mt-24 max-lg:flex-col gap-14 ">
        <AnimatePresence>
          {reviews.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className="flex flex-1"
            >
              <ReviewCard key={index} {...review} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CustomerReviews;
