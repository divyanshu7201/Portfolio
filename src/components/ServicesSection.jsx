import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Software Development',
    desc: 'Building reliable and scalable systems using modern languages like Python, C, and Java. Emphasizing clean code and object-oriented principles.',
    num: '01'
  },
  {
    title: 'Full Stack Development',
    desc: 'Building responsive frontend interfaces using React and Tailwind CSS, coupled with robust backend APIs (Node.js/Express) and database integration.',
    num: '02'
  },
  {
    title: 'Data Engineering',
    desc: 'Designing optimized database schemas, constructing ETL data pipelines in Python, and integrating MongoDB/SQL systems with Power BI dashboards for seamless data visualization.',
    num: '03'
  }
];

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-transparent text-neutral-100 border-b border-neutral-800">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 
          className="text-2xl uppercase tracking-widest font-semibold mb-16 text-neutral-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariant}
        >
          What I Do
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 border-t border-neutral-800 pt-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUpVariant}
              transition={{ delay: index * 0.15 }}
            >
              <span className="text-5xl font-light text-neutral-600">{service.num}</span>
              <h3 className="text-3xl font-anton uppercase tracking-tight text-white">{service.title}</h3>
              <p className="text-lg text-neutral-400 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
