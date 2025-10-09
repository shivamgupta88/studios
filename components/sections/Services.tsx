import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Smartphone, Palette, Server, Layers, Rocket, Link, Brain, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
}

interface ServicesProps {
  services: Service[];
  uiText?: {
    badge: string;
    heading: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    learnMore: string;
  };
}

const iconMap: { [key: string]: any } = {
  code: Code,
  mobile: Smartphone,
  palette: Palette,
  server: Server,
  layers: Layers,
  rocket: Rocket,
  link: Link,
  brain: Brain,
};

export default function Services({ services, uiText }: ServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Default text if not provided
  const text = uiText || {
    badge: "What We Do",
    heading: "Complete Digital Solutions",
    description: "From concept to launch, we handle every aspect of your digital product with expertise and precision",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Our Work",
    learnMore: "Learn more"
  };

  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-green-500 to-emerald-500',
    'from-indigo-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-teal-500 to-cyan-500',
    'from-violet-500 to-purple-500',
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            {text.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {text.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {text.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            const gradient = gradients[index % gradients.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key points */}
                  <ul className="space-y-2">
                    {service.points.slice(0, 2).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${gradient} mt-1.5 flex-shrink-0`}></div>
                        <span className="line-clamp-2">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover arrow */}
                  <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent inline-flex items-center gap-2`}>
                      {text.learnMore}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {text.ctaPrimary}
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              {text.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
