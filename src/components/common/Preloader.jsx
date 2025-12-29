import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.8, delay: 2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] bg-primary flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold gradient-text mb-4"
        >
          M.KARIM
        </motion.h1>
      </div>
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-main"
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-white/40 font-mono tracking-widest text-sm"
      >
        INITIALIZING EXPERIENCE...
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
