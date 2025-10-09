import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Server, Smartphone, Cloud, Brain, Link2 } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

interface TechStackMetadata {
  badge: string;
  heading: string;
  description: string;
  categories: Category[];
}

interface TechStackProps {
  techStack: {
    frontend: string[];
    backend: string[];
    mobile: string[];
    devops: string[];
    ai: string[];
    blockchain: string[];
  };
  metadata: TechStackMetadata;
}

const iconMap: { [key: string]: any } = {
  code: Code,
  server: Server,
  smartphone: Smartphone,
  cloud: Cloud,
  brain: Brain,
  link2: Link2,
};

export default function TechStack({ techStack, metadata }: TechStackProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="tech-stack" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900 rounded-full text-sm font-semibold mb-4">
            {metadata.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {metadata.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {metadata.description}
          </p>
        </motion.div>

        {/* Tech Categories Grid - Modern Bento Box Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metadata.categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code;
            const techs = techStack[category.id as keyof typeof techStack] || [];
            const isActive = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10 blur-xl`}></div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {techs.slice(0, isActive ? techs.length : 6).map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      className={`px-3 py-1.5 bg-gradient-to-r ${category.color} bg-opacity-10 text-gray-700 rounded-lg text-xs font-medium hover:bg-opacity-20 transition-all border border-gray-200 group-hover:border-transparent`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {!isActive && techs.length > 6 && (
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                      +{techs.length - 6} more
                    </span>
                  )}
                </div>

                {/* Hover state indicator */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <p className="text-xs text-gray-500">
                      {techs.length} technologies
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-200">
            <p className="text-lg font-semibold text-gray-900">
              Need a specific technology stack?
            </p>
            <p className="text-gray-600 max-w-lg">
              We adapt to your needs. If your project requires a technology not listed here, we&apos;ll find the right solution.
            </p>
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Discuss Your Tech Stack
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
