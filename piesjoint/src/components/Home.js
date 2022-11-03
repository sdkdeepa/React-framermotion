import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5
    }
  }
}

const Home = () => {
  return (
    <div className='bg'> 
    <img class="bg" src="pie.jpeg" alt="" />

    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <motion.h2 whileHover={{color:'#00FF00', fontSize: 50}} >Welcome to the pie world!</motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Custom Pies
        </motion.button>
      </Link>
    </motion.div>
    </div>
  )
}

export default Home;


