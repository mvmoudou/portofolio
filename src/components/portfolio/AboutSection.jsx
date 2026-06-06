import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code2, Briefcase } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'Formation', value: 'Master Informatique', sub: 'Sorbonne Paris Nord' },
  { icon: MapPin, label: 'Localisation', value: 'France', sub: 'Île-de-France' },
  { icon: Code2, label: 'Spécialité', value: 'Data Science', sub: 'ML & IA' },
  { icon: Briefcase, label: 'Statut', value: 'Ouvert aux opportunités', sub: 'Stage / CDI' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/30" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">{'// '} À propos</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            Qui suis-je <span className="text-primary">?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl border border-border bg-card p-8 glow-cyan">
              <div className="font-mono text-xs text-muted-foreground mb-4">
                <span className="text-primary">mamoudou</span>@<span className="text-accent">portfolio</span>:~$ cat about.md
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Étudiant en <span className="text-foreground font-medium">Master Informatique</span> à l'Université Sorbonne Paris Nord, je suis passionné par la <span className="text-primary">Data Science</span>, le <span className="text-primary">Machine Learning</span> et l'<span className="text-primary">Intelligence Artificielle</span>.
                </p>
                <p>
                  Je travaille actuellement sur des projets impliquant l'analyse de données, la modélisation prédictive et les solutions alimentées par l'IA. Mon objectif est de transformer les données en <span className="text-accent">insights actionnables</span> pour résoudre des problèmes concrets.
                </p>
                <p>
                  Je maîtrise un large éventail de technologies incluant Python, SQL, les frameworks de ML et les outils de visualisation. Je suis constamment à la recherche de nouveaux défis pour développer mes compétences.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card/50 p-5 hover:border-primary/30 transition-all group">
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                <div className="font-heading text-sm font-semibold text-foreground">{item.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}