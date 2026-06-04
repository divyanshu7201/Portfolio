import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { x: '100%', transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 } },
    open: { x: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: i => ({
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <>
      {/* Sticky Hamburger Button */}
      <div className="fixed top-0 right-0 z-50 p-6 md:p-10">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-12 h-12 flex flex-col justify-center items-center group mix-blend-difference"
        >
          <span className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[2px]' : '-translate-y-1 group-hover:-translate-y-2'}`}></span>
          <span className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[0px]' : 'translate-y-1 group-hover:translate-y-2'}`}></span>
        </button>
      </div>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-neutral-900 flex flex-col justify-center px-12 md:px-32 lg:px-48"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="grid md:grid-cols-2 gap-16 w-full">
              {/* Links */}
              <nav className="flex flex-col gap-6">
                <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm mb-4">Menu</p>
                {['Home', 'About Me', 'Services', 'Projects', 'Contact'].map((item, i) => (
                  <motion.a 
                    key={item}
                    href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsOpen(false)}
                    custom={i}
                    variants={linkVariants}
                    className="text-4xl md:text-6xl font-anton uppercase text-white hover:text-neutral-400 transition-colors inline-block w-fit"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              {/* Socials */}
              <div className="flex flex-col gap-6 md:justify-end md:pb-4">
                <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm mb-4">Social</p>
                {['LinkedIn', 'GitHub', 'Email'].map((item, i) => (
                  <motion.a 
                    key={item}
                    href={item === 'Email' ? 'mailto:divyanshu208020@gmail.com' : '#'}
                    custom={i + 4}
                    variants={linkVariants}
                    className="text-2xl font-light text-white hover:text-neutral-400 transition-colors inline-block w-fit"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
