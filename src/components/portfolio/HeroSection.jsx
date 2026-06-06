import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const PROFILE_IMG = "https://media.base44.com/images/public/user_6a2226db00dcad524e15a662/6c96ffe68_photolinkedIn.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(185 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 text-center lg:text-left">
          <div className="font-mono text-xs text-primary mb-4 tracking-widest">
            <span className="text-accent">{'>'}</span> Hello World
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Mamoudou</span>
            <br />
            <span className="text-primary glow-text">SIDIBE</span>
          </h1>

          <div className="font-mono text-sm text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            <span className="text-accent"># </span><span className="text-green-400">Data Scientist & ML Engineer</span>
            <br />
            <span className="text-accent"># </span><span className="text-green-400">Sorbonne Paris Nord University</span>
            <br />
            <span className="text-primary">import</span> <span className="text-foreground">pandas</span> <span className="text-primary">as</span> <span className="text-accent">pd</span>
            <br />
            <span className="text-primary">from</span> <span className="text-foreground">sklearn</span> <span className="text-primary">import</span> <span className="text-accent">magic</span> <span className="text-muted-foreground">✨</span>
          </div>

          <p className="text-muted-foreground text-base max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
            Étudiant en Master Informatique, passionné par la Data Science, le Machine Learning et l'Intelligence Artificielle.
          </p>

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a href="https://github.com/mvmoudou" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/mamoudou-sidibe-ab360422a/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:moudou383@gmail.com" className="p-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#projects" className="ml-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-all glow-cyan">
              Voir mes projets
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-50 blur-md" />
            <img src={PROFILE_IMG} alt="Mamoudou Sidibe" className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-2 border-primary/30" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a href="#about" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors">
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}