import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
     <motion.div className="title"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1}}
          transition={{type: "spring",stiffness: 120,damping: 20}}
      >
        <h1>Pies 'o mania</h1>
      </motion.div>
    </header>
  )
}

export default Header;