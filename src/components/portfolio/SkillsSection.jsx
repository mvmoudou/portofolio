import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Langages',
    color: 'text-primary',
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Data Science & ML',
    color: 'text-accent',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'TensorFlow', 'Keras', 'XGBoost', 'LightGBM'],
  },
  {
    title: 'Bases de données',
    color: 'text-purple-400',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'],
  },
  {
    title: 'Outils & DevOps',
    color: 'text-yellow-400',
    skills: ['Git/GitHub', 'Docker', 'Flask/FastAPI', 'Streamlit', 'Power BI', 'Jupyter'],
  },
  {
    title: 'Méthodologies',
    color: 'text-pink-400',
    skills: ['EDA', 'Régression', 'Classification', 'Clustering', 'Deep Learning', 'NLP'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">{'// '} Compétences</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            Tech <span className="text-primary">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/20 transition-all">
              <h3 className={`font-mono text-xs font-semibold ${cat.color} uppercase tracking-wider mb-4`}>
                {'{ '}{cat.title}{' }'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-muted text-xs font-mono text-muted-foreground border border-border hover:text-primary hover:border-primary/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}