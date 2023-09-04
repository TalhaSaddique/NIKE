import React from "react";

import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { AnimatePresence, motion } from "framer-motion";

const Services = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center max-container gap-9 ">
      <AnimatePresence>
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            key={index}
            className="flex flex-1"
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Services;
