import React from 'react';
import { motion } from 'framer-motion';

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // Custom ease-out
    }
  }
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 min-h-[90vh] flex items-center bg-transparent text-neutral-100">
      <div className="container mx-auto px-6 lg:px-12 h-full flex flex-col md:flex-row justify-between items-center z-10">
        
        {/* Left Content */}
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <motion.h1 
            className="banner-title leading-[.95] text-6xl sm:text-[80px] font-anton"
            initial="hidden"
            animate="visible"
            variants={slideUpVariant}
          >
            <span className="text-[#facc15]">SOFTWARE</span><br/> 
            <span className="ml-4">DEVELOPMENT</span><br/> 
            <span className="ml-8">ENGINEER</span>
          </motion.h1>
          
          <motion.p 
            className="mt-8 text-lg md:text-xl text-neutral-400 max-w-lg font-light leading-relaxed"
            variants={slideUpVariant}
          >
            Hi! I'm <span className="font-semibold text-white">Divyanshu Dwivedi</span>. A Software Development Engineer passionate about building scalable backend architectures, writing clean object-oriented code, and developing high-performance full-stack applications.
          </motion.p>
          
          <motion.a 
            href="#contact"
            className="group mt-12 h-14 px-10 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest bg-[#facc15] text-black hover:bg-yellow-500 transition-colors relative overflow-hidden"
            variants={slideUpVariant}
          >
            <span className="relative z-10">Let's Talk</span>
          </motion.a>
        </div>
        
        {/* Right Stats */}
        <motion.div 
          className="md:absolute bottom-[10%] right-[5%] flex md:flex-col gap-8 md:gap-12 mt-16 md:mt-0 text-left md:text-right"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
          }}
        >
          <motion.div variants={slideUpVariant}>
            <h5 className="text-4xl md:text-6xl font-anton text-white mb-2">2026</h5>
            <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm">Graduation</p>
          </motion.div>
          <motion.div variants={slideUpVariant}>
            <h5 className="text-4xl md:text-6xl font-anton text-neutral-400 mb-2">4+</h5>
            <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm">Core Skills</p>
          </motion.div>
          <motion.div variants={slideUpVariant}>
            <h5 className="text-4xl md:text-6xl font-anton text-white mb-2">2+</h5>
            <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm">Major Projects</p>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-neutral-500 font-anton tracking-[0.2em] uppercase text-[10px] rotate-90 mb-4">Scroll</span>
          <div className="w-[1px] h-16 bg-neutral-800 overflow-hidden relative">
            <motion.div 
              className="w-full h-1/2 bg-[#facc15] absolute top-0"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
