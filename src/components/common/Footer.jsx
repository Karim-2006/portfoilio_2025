import { navLinks, personalInfo } from '../../data/content';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/50 border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#home" className="text-2xl font-bold gradient-text mb-2 block">
            MK.
          </a>
          <p className="text-white/50 max-w-xs">
            {personalInfo.valueProposition}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            <a href="#" className="text-2xl text-white/70 hover:text-accent-cyan transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="text-2xl text-white/70 hover:text-accent-cyan transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="text-2xl text-white/70 hover:text-accent-cyan transition-colors">
              <FaTwitter />
            </a>
          </div>
          <p className="text-white/40 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-xl text-white hover:border-accent-cyan transition-all duration-300 hover:-translate-y-1"
      >
        <HiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
