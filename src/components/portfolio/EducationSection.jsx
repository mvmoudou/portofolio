import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    year: '2025',
    degree: 'Master 1 - Informatique (Data Science)',
    school: 'Institut Galilée - Université Sorbonne Paris Nord',
    location: 'Villetaneuse, France',
    color: 'text-primary',
    border: 'border-primary/40',
    bg: 'bg-primary/5',
  },
  {
    year: '2024',
    degree: 'Master 1 - Data Science',
    school: 'Université Internationale Privée d\'Excellence',
    location: 'Bamako, Mali',
    color: 'text-cyan-400',
    border: 'border-cyan-400/40',
    bg: 'bg-cyan-400/5',
  },
  {
    year: '2023',
    degree: 'Licence - Administration des Affaires (BBA)',
    school: 'IHE Paris',
    location: 'Paris, France',
    mention: 'Mention BIEN',
    color: 'text-accent',
    border: 'border-accent/40',
    bg: 'bg-accent/5',
  },
  {
    year: '2020 – 2023',
    degree: 'Licence - Ingénierie du Logiciel et des Données',
    school: 'Université Internationale Privée d\'Excellence',
    location: 'Bamako, Mali',
    mention: 'Mention BIEN',
    color: 'text-purple-400',
    border: 'border-purple-400/40',
    bg: 'bg-purple-400/5',
  },
  {
    year: '2020',
    degree: 'Baccalauréat - Sciences Exactes',
    school: 'Lycée du Progrès',
    location: 'Mali',
    color: 'text-yellow-400',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-400/5',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">{'# '} Formations</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            Parcours <span className="text-primary">Scolaire</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          <div className="space-y-8">
            {education.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-16">
                {/* Dot */}
                <div className={`absolute left-4 top-5 w-4 h-4 rounded-full border-2 ${item.border} ${item.bg} -translate-x-1/2`} />

                <div className={`rounded-xl border ${item.border} ${item.bg} p-5 hover:brightness-110 transition-all`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base">{item.degree}</h3>
                      <p className={`font-mono text-xs ${item.color} mt-0.5`}>{item.school}</p>
                    </div>
                    <span className={`font-mono text-xs px-3 py-1 rounded-full border ${item.border} ${item.color} whitespace-nowrap`}>{item.year}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <GraduationCap className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{item.location}</span>
                    {item.mention && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <span className={`text-xs font-semibold ${item.color}`}>{item.mention}</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}