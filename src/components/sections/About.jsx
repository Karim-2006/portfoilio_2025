import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';
import SectionHeader from '../common/SectionHeader';

const CircularProgress = ({ level, label }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-white/5"
          />
          <motion.circle
            cx="32"
            cy="32"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-accent-blue"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-xs">
          {level}%
        </div>
      </div>
      <span className="text-white/40 text-[10px] uppercase tracking-wider">{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about">
      <SectionHeader 
        title="About Me" 
        subtitle="Driven by curiosity and a passion for building exceptional digital experiences."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {personalInfo.about.map((paragraph, index) => (
            <p key={index} className="text-white/70 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
          
          <div className="flex flex-wrap gap-4 pt-6">
            {personalInfo.interests.map((interest) => (
              <span 
                key={interest}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-accent-cyan text-sm"
              >
                {interest}
              </span>
            ))}
          </div>

          <div className="flex gap-8 pt-8">
            <CircularProgress level={95} label="Precision" />
            <CircularProgress level={90} label="Efficiency" />
            <CircularProgress level={85} label="Innovation" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square glass-card overflow-hidden group">
            <img 
              src="/profile.jpg" 
              alt="M.KARIM Profile" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-accent-cyan/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent-cyan" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent-magenta" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
