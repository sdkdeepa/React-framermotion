import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
     <motion.div className="title"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1}}
          transition={{type: "spring", stiffness: 120, damping: 20}}  // by default it is spring type.
      >
        <h1>Pies 'o mania</h1>
      </motion.div>
    </header>
  )
}

export default Header;