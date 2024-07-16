import { motion } from "framer-motion";

const MAX_STEPS = 6;

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  return MAX_STEPS - index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(MAX_STEPS)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-eliotrope relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
