import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    background:'purple',
    transition: {
      duration: 0.3,
      yoyo: 5,
      
    }
  }
}

const Home = () => {
  return (
    <div className='bg'> 
    <img class="bg" src="pie.jpeg" alt="" />

    <motion.div className="home container"
      // attributes initial, animate and transitions are added 
      initial={{ opacity: 0 }} // fully hidden
      animate={{ opacity: 1 }} // fully visible
      transition={{ delay: 1.5, duration: 1.5, type: "tween" }} // if we add duration by 
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


