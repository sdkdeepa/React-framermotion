import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    } 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren"
    }
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    fontSize: 35,
    color: 'purple',
  }
}

const child = {
   hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 3,
    fontSize: 35,
    color: 'orange',

  }
}

const Order = ({ pie }) => {
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pie.base} pie with 
        {pie.fillings.map(filling => <motion.div variants={child} key={filling} >{filling}</motion.div>)}
      </motion.p>
    </motion.div>
  )
}

export default Order;
