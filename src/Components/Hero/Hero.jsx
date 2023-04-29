import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import {motion} from 'framer-motion';
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='paddings flexCenter innerWidth hero-container'>


           <div className='flexColStart hero-left'>
              <div className="hero-title">
                <div className="orange-circle"/>
                <motion.h1
                initial={{y:"2rem",opacity:0}}
                animate={{y:"0",opacity:1}}
                transition={
                  {
                    duration:2,
                    type:"spring"
                  }
                }
                >
                  Discover <br /> 
                Most Suitable <br /> 
                Property
                </motion.h1>
              </div>
              <div className="flexColStart hero-des">
                <span className="sectext">Find a variety of properties that suit you very easilty </span>
                 <span className="sectext">Forget all difficulties in finding a residence for you</span>
              </div>
              <div className="flexCenter search-bar">
                <HiLocationMarker color="var(--blue)" size={25}/>
                <input type="text" />
                <button className="button">Search</button>
              </div>
              <div className="stats">
                <div className="stat">
                  <span className="textcount">
                    <CountUp start={8800} end={9000} duration={4}></CountUp>
                    <span>+</span>
                  </span>
                  <span className="sectext">Premium Product</span>
                </div>

                <div className="stat">
                  <span className="textcount">
                    <CountUp start={1950} end={2000} duration={4}></CountUp>
                    <span>+</span>
                  </span>
                  <span className="sectext">Happy Customer</span>
                </div>

                <div className="stat">
                  <span className="textcount">
                    <CountUp  end={28} ></CountUp>
                    <span >+</span>
                  </span>
                  <span className="sectext">Awards Winning</span>
                </div>
              </div>
            </div>
           
            <div className='flexCenter hero-right'>
                <motion.div
                 initial={{x:"7rem",opacity:0}}
                 animate={{x:"0rem",opacity:1}}
                 transition={
                   {
                     duration:2,
                     type:"spring"
                     
                   }
                 }
                
                
                className='image-container'>
                    <img src="./hero-image.png" alt="" />
                   
                </motion.div>

            </div>
        </div>

    </section>
  )
}

export default Hero