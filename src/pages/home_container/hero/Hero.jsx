import React from "react";
import { easeIn, motion } from "framer-motion";

// images
import Bus2 from "../../../assets/red.png";

const Hero = () => {

  const imageVariants = {
    initial: {
      x: "100%"
    },
    animate: {
      x: "3%",
      transition: {
        duration: 3,
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="w-full h-screen lg:ps-28 md:ps-16 sm:ps-7 ps-4 mt-[8ch] flex items-center justify-center flex-col relative">
      <div className="flex-1 w-full flex flex-col lg:flex-row items-stretch justify-between gap-12 pb-10 lg:mt-20">
        <motion.div
          className="w-full lg:w-1/3 h-auto flex flex-col items-start space-y-8 lg:space-y-14"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
        >
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "linear", delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-800 dark:text-neutral-50 leading-tight sm:leading-snug"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "linear", delay: 0.4 }}
            >
              Reserve Your Bus
              <span className="text-red-500 tracking-wider">Tickets</span>
              Now
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl dark:text-neutral-300 line-clamp-3 text-ellipsis"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "linear", delay: 0.6 }}
            >
              Find and Book your bus tickets with just a few clicks. We offer a wide range of bus routes and schedules to suit your needs.
            </motion.p>
          </motion.div>

          <motion.button className="bg-red-700 hover:bg-red-800 text-neutral-50 font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-md ease-in-out duration-300">
            Reserve Seat Now
          </motion.button>

        </motion.div>

        <div className="relative w-full lg:w-2/3 h-full flex items-end justify-end">
          <motion.img
            className="w-full h-auto max-w-[100%] object-contain"
            src={Bus2}
            alt="bus-img"
            initial="initial"
            animate="animate"
            variants={imageVariants}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;