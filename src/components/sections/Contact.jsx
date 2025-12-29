import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="Have a project in mind or just want to say hello? My inbox is always open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
          <p className="text-white/60 text-lg mb-12 max-w-md">
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question or just want to connect, I'll do my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass-card flex items-center justify-center text-accent-cyan">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-white/40 text-sm">Email</p>
                <p className="text-white font-medium">hello@mkarim.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass-card flex items-center justify-center text-accent-magenta relative">
                <FaMapMarkerAlt size={20} />
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-accent-magenta/30 rounded-xl"
                />
              </div>
              <div>
                <p className="text-white/40 text-sm">Location</p>
                <p className="text-white font-medium">CHENNAI</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-12">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-12 h-12 glass-card flex items-center justify-center text-white/70 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60 ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 ml-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 ml-2">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                />
              </div>
              <Button type="submit" className="w-full py-4 text-lg">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
