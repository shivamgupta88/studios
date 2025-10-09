import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Calendar, CheckCircle } from 'lucide-react';

interface ContactProps {
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaSecondary: string;
  email: string;
  benefits: string[];
}

export default function Contact({
  heading,
  subheading,
  description,
  ctaText,
  ctaSecondary,
  email,
  benefits,
}: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" ref={ref}>
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-secondary text-white mb-4">{heading}</h2>
            <p className="text-xl text-purple-200 font-semibold mb-6">{subheading}</p>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What you get:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-200">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <a
                  href={`mailto:${email}?subject=Project Consultation`}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  {ctaText}
                </a>

                <a
                  href={`mailto:${email}`}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  {ctaSecondary}
                </a>

                <p className="text-center text-sm text-gray-300 mt-2">
                  Or email us at{' '}
                  <a href={`mailto:${email}`} className="text-white font-semibold hover:underline">
                    {email}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
