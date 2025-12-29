import { motion } from 'framer-motion';
import { experience } from '../../data/content';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';

const ExperienceItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative pl-8 md:pl-0 mb-12"
  >
    {/* Timeline Line */}
    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
    
    {/* Timeline Dot */}
    <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 bg-accent-cyan rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(0,255,255,0.5)] z-10" />

    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
      <span className="text-accent-magenta font-mono mb-2 block">{item.period}</span>
      <h3 className="text-2xl font-bold mb-1">{item.organization}</h3>
      <p className="text-accent-cyan font-medium mb-4">{item.position}</p>
      <Card className="inline-block text-left">
        <ul className="space-y-3">
          {item.achievements.map((achievement, i) => (
            <li key={i} className="text-white/60 text-sm flex items-start gap-3">
              <span className="text-accent-cyan mt-1">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience">
      <SectionHeader 
        title="Professional Journey" 
        subtitle="A timeline of my growth and contributions in the tech industry."
      />

      <div className="relative pt-8">
        {experience.map((item, index) => (
          <ExperienceItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
