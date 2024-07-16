import { MAX_STEPS, stairAnimation } from "@/utils/constants";
import { motion } from "framer-motion";

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
