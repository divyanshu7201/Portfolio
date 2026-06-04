import React from 'react';
import { motion } from 'framer-motion';

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-neutral-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <div className="grid md:grid-cols-2 gap-16 md:gap-0">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h2 variants={slideUpVariant} className="text-[4rem] md:text-[6rem] font-anton uppercase leading-[0.9] tracking-tighter mb-8">
              Let's build<br/>something<br/><span className="text-neutral-500">great.</span>
            </motion.h2>
            <motion.p variants={slideUpVariant} className="text-neutral-400 max-w-sm text-lg font-light">
              Available for full-time opportunities. Reach out if you'd like to collaborate or just say hi.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:items-end justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } } }}
          >
            <motion.div variants={slideUpVariant} className="text-left md:text-right">
              <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm mb-2">Email</p>
              <a href="mailto:divyanshu208020@gmail.com" className="text-2xl md:text-4xl font-light hover:text-neutral-300 transition-colors">divyanshu208020@gmail.com</a>
            </motion.div>
            <motion.div variants={slideUpVariant} className="text-left md:text-right">
              <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm mb-2">Phone</p>
              <a href="tel:+919452639440" className="text-2xl md:text-4xl font-light hover:text-neutral-300 transition-colors">+91-9452639440</a>
            </motion.div>
            <motion.div variants={slideUpVariant} className="text-left md:text-right">
              <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm mb-2">Social</p>
              <a href="https://linkedin.com/in/divyanshu-dwivedi7201" target="_blank" rel="noreferrer" className="text-2xl md:text-4xl font-light hover:text-neutral-300 transition-colors">LinkedIn</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
