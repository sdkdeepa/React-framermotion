import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    background: 'yellow',
    color: 'blue',
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}
const Fillings = ({ addFilling, pie }) => {
  let fillings = ['Apple', 'Peach', 'Cherry', 'Pumpkinspice', 'Strawberry'];

  return (
      <motion.div className="fillings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      > 
      <h3>Step 2: Choose Fillings</h3>
    <ul>
        {fillings.map(filling => {
          let spanClass = pie.fillings.includes(filling) ? 'active' : '';
          return (
            <motion.li key={filling} onClick={() => addFilling(filling)}
              whileHover={{ scale: 1.3, originX: 0, color: '#00FFFF' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ filling }</span>
            </motion.li>
          )
        })}
      </ul>

     <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Fillings;
