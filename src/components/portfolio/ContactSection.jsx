import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const contactLinks = [
  { icon: Github, label: 'GitHub', value: 'github.com/mvmoudou', href: 'https://github.com/mvmoudou' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Mamoudou Sidibe', href: 'https://www.linkedin.com/in/mamoudou-sidibe-ab360422a/' },
  { icon: Mail, label: 'Email', value: 'moudou383@gmail.com', href: 'mailto:moudou383@gmail.com' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/3 blur-[150px]" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">{'// '} Contact</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            Travaillons <span className="text-primary">ensemble</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Ouvert aux opportunités de stage et CDI. N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid sm:grid-cols-3 gap-4">
          {contactLinks.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-border bg-card/50 p-6 text-center hover:border-primary/30 hover:bg-primary/5 transition-all">
              <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mx-auto mb-3" />
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{link.label}</div>
              <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{link.value}</div>
            </a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="mailto:moudou383@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all glow-cyan">
            <Send className="w-4 h-4" />
            Envoyer un message
          </a>
        </motion.div>
      </div>
    </section>
  );
}