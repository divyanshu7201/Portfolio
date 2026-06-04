import React from 'react';
import { motion } from 'framer-motion';
import spotifyImage from '../assets/spotify_mockup.png';
import analyticsImage from '../assets/analytics_mockup.png';

const projects = [
  {
    title: 'Spotify-Inspired Music Platform',
    desc: 'I built this full-stack music streaming application to replicate core Spotify features. I developed a responsive React frontend, a Node.js/Express backend API, and used MongoDB to manage user profiles and audio files.',
    features: [
      'Created a custom music player interface with HTML5 Audio API for full play, pause, seek, and volume control.',
      'Developed backend REST APIs using Node.js and Express to fetch playlists and query tracks.',
      'Designed a responsive grid layout using Tailwind CSS to show album art and song collections.',
      'Configured MongoDB schemas to persist user playlist selections and track favorite songs.'
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    img: spotifyImage
  },
  {
    title: 'Customer Behaviour Analytics Platform',
    desc: 'I developed this analytical project to process and segment e-commerce customer behavior. I built a Python pipeline to calculate transactional metrics, implemented clustering machine learning algorithms to group users, and visualized insights.',
    features: [
      'Wrote Python scripts to generate synthetic customer profiles, web log visits, and transaction logs.',
      'Engineered a data loading pipeline using Pandas and NumPy to compute Recency, Frequency, and Monetary (RFM) scores.',
      'Programmed unsupervised K-Means Clustering using Scikit-Learn to group customers into 4 segments.',
      'Constructed analytical dashboards in Power BI linked to the database to show cohort retention heatmaps.'
    ],
    tags: ['Python', 'MongoDB', 'ML', 'Power BI'],
    img: analyticsImage
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-transparent text-neutral-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-16">
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {/* SVG Flower/Star replacement */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#facc15"/>
            </svg>
          </motion.div>
          <h2 className="text-2xl uppercase tracking-widest font-semibold text-neutral-300">Selected Work</h2>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="grid md:grid-cols-12 gap-8 md:gap-12 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUpVariant}
            >
              <div className="md:col-span-7 bg-[#171717] aspect-video overflow-hidden border border-neutral-800 relative">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl font-anton uppercase tracking-tight mb-6 text-white">{project.title}</h3>
                <p className="text-lg text-neutral-400 font-light leading-relaxed mb-6">{project.desc}</p>
                
                {/* List of features I implemented */}
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#facc15] mb-3">Key Features I Built:</h4>
                <ul className="list-disc pl-5 text-neutral-400 font-light text-base space-y-2 mb-8">
                  {project.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 border border-neutral-700 text-sm font-medium uppercase tracking-wider text-neutral-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
