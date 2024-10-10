import { delay } from "framer-motion";

export const variant = {
  hidden: {
    opacity: 0,
    y: "20px",
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
};

export const companiesVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition:{
        staggerChildren:0.1,
        delayChildren: 0.2,
    }
  },
};

export const ChildrenVariants ={
    hidden:{
        opacity: 0,
        y: "30px"
    },
    visible:{
        opacity: 1,
        y:0
    }
}
