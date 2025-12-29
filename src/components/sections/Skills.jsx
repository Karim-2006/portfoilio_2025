import { motion } from 'framer-motion';
import { skills } from '../../data/content';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';

const RadialProgress = ({ level, name, index }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/5"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-accent-cyan"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
          {level}%
        </div>
      </div>
      <span className="text-white/80 font-medium text-sm">{name}</span>
    </div>
  );
};

const SkillBar = ({ name, level, index }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-white/80 font-medium">{name}</span>
      <span className="text-accent-cyan">{level}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="h-full bg-gradient-main"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills">
      <SectionHeader 
        title="Technical Arsenal" 
        subtitle="A comprehensive toolkit built on years of experience and continuous learning."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold mb-8 capitalize gradient-text text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                {items.map((skill, index) => (
                  <RadialProgress key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
