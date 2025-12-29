import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { personalInfo } from '../../data/content';
import Button from '../ui/Button';

const Particles = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random()
          }}
          animate={{
            y: [null, Math.random() * 100 + "%"],
            opacity: [null, Math.random(), 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-magenta/10 rounded-full blur-[120px]" />
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col justify-center items-center text-center pt-20">
      <Particles />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-white/80 mb-8 h-12">
          <Typewriter
            words={[personalInfo.title, 'Full Stack Developer', 'UX Designer', 'Tech Enthusiast']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12">
          {personalInfo.valueProposition}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#contact">
            <Button variant="primary">Get In Touch</Button>
          </a>
          <a href="#projects">
            <Button variant="secondary">View Projects</Button>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-accent-cyan rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
