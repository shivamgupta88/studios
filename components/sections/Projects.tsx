import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  summary: string;
  techUsed: string[];
  results: string;
  link: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projectGradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-amber-500',
    'from-emerald-500 to-teal-500',
    'from-rose-500 to-pink-500',
  ];

  return (
    <section id="projects" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects That Drive Results
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real products, real impact. See how we&apos;ve helped companies scale from zero to millions of users
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const gradient = projectGradients[index % projectGradients.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-300"
              >
                {/* Project Image/Preview */}
                <div className={`relative h-64 bg-gradient-to-br ${gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/5"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-6xl mb-4"
                      >
                        🚀
                      </motion.div>
                      <p className="text-sm opacity-75 font-medium">Project Preview</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techUsed.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techUsed.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-medium">
                          +{project.techUsed.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Results */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${gradient} bg-opacity-10 mb-6`}>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Impact:</p>
                    <p className="text-sm text-gray-700">{project.results}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${gradient} text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group`}
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
          >
            Let&apos;s Build Your Next Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
