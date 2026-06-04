import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiGreensock, SiFramer, SiSass,
  SiNodedotjs, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiGit, SiGithub, SiPython, SiC
} from 'react-icons/si';
import { FaJava, FaAws, FaDatabase } from 'react-icons/fa';

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-transparent text-neutral-100">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Main Philosophy Text */}
        <motion.h2 
          className="text-4xl md:text-6xl font-light mb-20 max-w-5xl leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariant}
        >
          I am a Software Development Engineer passionate about crafting interactive web products, engineering robust APIs, and mining actionable user insights.
        </motion.h2>

        <motion.p 
          className="pb-4 border-b border-neutral-800 text-neutral-400 font-medium uppercase tracking-widest text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariant}
        >
          This is me.
        </motion.p>

        {/* About Details */}
        <div className="grid md:grid-cols-12 mt-12 gap-12 md:gap-0 mb-32">
          <motion.div 
            className="md:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUpVariant}
          >
            <p className="text-4xl md:text-5xl font-anton uppercase tracking-tight text-[#facc15]">
              Hi, I'm <br/><span className="text-white">Divyanshu.</span>
            </p>
          </motion.div>
          
          <motion.div 
            className="md:col-span-7 flex flex-col gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={slideUpVariant} className="text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
              <p className="mb-6">
                I specialize in designing and engineering high-quality software solutions. By writing clean, modular, and optimized code, and leveraging robust full-stack architectures (Node.js, Express, and MongoDB), I build systems that are highly scalable, secure, and performant under load.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science & Engineering at Maharana Pratap Engineering College (Graduation 2026), I possess strong foundations in Object-Oriented Programming (OOPs), Algorithms, and Data Structures, allowing me to approach complex software engineering problems methodically.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* My Stack - Tajmirul Style */}
        <div className="flex items-center gap-4 mb-16">
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#facc15"/>
            </svg>
          </motion.div>
          <h2 className="text-xl uppercase tracking-widest font-semibold text-neutral-300">My Stack</h2>
        </div>

        <div className="space-y-24">
          
          {/* Languages */}
          <div className="grid sm:grid-cols-12 gap-8 md:gap-0">
            <div className="sm:col-span-5">
              <p className="text-5xl font-anton leading-none text-neutral-600 uppercase">Languages</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              {[
                { name: 'Python', icon: <SiPython color="#3776AB" size={40} /> },
                { name: 'C', icon: <SiC color="#A8B9CC" size={40} /> },
                { name: 'Java', icon: <FaJava color="#007396" size={40} /> },
                { name: 'SQL', icon: <FaDatabase color="#F80000" size={40} /> },
              ].map((tech) => (
                <motion.div key={tech.name} className="group flex gap-4 items-center leading-none cursor-pointer" variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    {tech.icon}
                  </div>
                  <span className="text-2xl capitalize font-light group-hover:text-white text-neutral-300 transition-colors duration-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="grid sm:grid-cols-12 gap-8 md:gap-0">
            <div className="sm:col-span-5">
              <p className="text-5xl font-anton leading-none text-neutral-600 uppercase">Frontend</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              {[
                { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={40} /> },
                { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={40} /> },
                { name: 'React', icon: <SiReact color="#61DAFB" size={40} /> },
                { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" size={40} /> },
                { name: 'Redux', icon: <SiRedux color="#764ABC" size={40} /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" size={40} /> },
                { name: 'GSAP', icon: <SiGreensock color="#88CE02" size={40} /> },
                { name: 'Framer Motion', icon: <SiFramer color="#0055FF" size={40} /> },
                { name: 'Sass', icon: <SiSass color="#CC6699" size={40} /> },
              ].map((tech) => (
                <motion.div key={tech.name} className="group flex gap-4 items-center leading-none cursor-pointer" variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    {tech.icon}
                  </div>
                  <span className="text-2xl capitalize font-light group-hover:text-white text-neutral-300 transition-colors duration-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="grid sm:grid-cols-12 gap-8 md:gap-0">
            <div className="sm:col-span-5">
              <p className="text-5xl font-anton leading-none text-neutral-600 uppercase">Backend</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              {[
                { name: 'Node.js', icon: <SiNodedotjs color="#339933" size={40} /> },
                { name: 'Express.js', icon: <SiExpress color="#ffffff" size={40} /> },
              ].map((tech) => (
                <motion.div key={tech.name} className="group flex gap-4 items-center leading-none cursor-pointer" variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    {tech.icon}
                  </div>
                  <span className="text-2xl capitalize font-light group-hover:text-white text-neutral-300 transition-colors duration-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="grid sm:grid-cols-12 gap-8 md:gap-0">
            <div className="sm:col-span-5">
              <p className="text-5xl font-anton leading-none text-neutral-600 uppercase">Database</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              {[
                { name: 'MySQL', icon: <SiMysql color="#4479A1" size={40} /> },
                { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" size={40} /> },
                { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={40} /> },
              ].map((tech) => (
                <motion.div key={tech.name} className="group flex gap-4 items-center leading-none cursor-pointer" variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    {tech.icon}
                  </div>
                  <span className="text-2xl capitalize font-light group-hover:text-white text-neutral-300 transition-colors duration-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="grid sm:grid-cols-12 gap-8 md:gap-0">
            <div className="sm:col-span-5">
              <p className="text-5xl font-anton leading-none text-neutral-600 uppercase">Tools</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              {[
                { name: 'Git', icon: <SiGit color="#F05032" size={40} /> },
                { name: 'GitHub', icon: <SiGithub color="#ffffff" size={40} /> },
                { name: 'AWS', icon: <FaAws color="#FF9900" size={40} /> },
              ].map((tech) => (
                <motion.div key={tech.name} className="group flex gap-4 items-center leading-none cursor-pointer" variants={slideUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    {tech.icon}
                  </div>
                  <span className="text-2xl capitalize font-light group-hover:text-white text-neutral-300 transition-colors duration-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
