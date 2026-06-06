import { motion } from 'framer-motion';
import { ExternalLink, BarChart3, TrendingUp, Shield } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Analyse Exploratoire des Données (EDA)',
    description: "Analyse exploratoire complète de données pour comprendre des données brutes, les nettoyer, et formuler des hypothèses avant d'appliquer des modèles complexes. Identification de schémas de fraude dans les transactions bancaires et segmentation de clients marketing.",
    image: 'https://media.base44.com/images/public/6a23f62ffce5538aed8cb67b/e31045fe0_generated_698e32a5.png',
    icon: BarChart3,
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'NumPy', 'Streamlit'],
    skills: ['Manipulation de données', 'Nettoyage', 'Visualisation', 'Statistique Univariée/Multivariée'],
    color: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'hover:border-cyan-400/40',
  },
  {
    id: 2,
    title: 'Modèle de Régression',
    description: "Construction de modèles de régression pour prédire des valeurs continues comme les ventes futures et les prix immobiliers. Comparaison et optimisation des performances avec Ridge, Lasso, ElasticNet, Random Forest, XGBoost, LightGBM et CatBoost.",
    image: 'https://media.base44.com/images/public/6a23f62ffce5538aed8cb67b/61bf0ec65_generated_e514b3aa.png',
    icon: TrendingUp,
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Flask/FastAPI', 'Docker'],
    skills: ['Régression Linéaire', 'Ridge/Lasso', 'Random Forest', 'Déploiement API'],
    color: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'hover:border-green-400/40',
  },
  {
    id: 3,
    title: 'Classification Prédictive',
    description: "Modèle prédictif de classification pour identifier les clients à risque de défaut bancaire, évaluer le risque de crédit, prédire les réadmissions hospitalières et anticiper le churn dans les télécommunications.",
    image: 'https://media.base44.com/images/public/6a23f62ffce5538aed8cb67b/d229298a3_generated_3c45da16.png',
    icon: Shield,
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'CatBoost', 'Docker'],
    skills: ['Régression Logistique', 'SVM', 'Random Forest', 'Gradient Boosting', 'Déploiement API'],
    color: 'from-purple-500/10 to-violet-500/10',
    borderColor: 'hover:border-purple-400/40',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">{'// '} Projets</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            Mes <span className="text-primary">Réalisations</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`rounded-2xl border border-border bg-card/30 overflow-hidden ${project.borderColor} transition-all group`}>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                  <img src={project.image} alt={project.title} className="w-full h-64 lg:h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">Projet #{project.id}</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-5">
                    <span className="font-mono text-[10px] text-primary uppercase tracking-wider">Technologies</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-primary/5 border border-primary/15 text-xs font-mono text-primary/80">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <span className="font-mono text-[10px] text-accent uppercase tracking-wider">Compétences acquises</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.skills.map(skill => (
                        <span key={skill} className="px-2.5 py-1 rounded-md bg-accent/5 border border-accent/15 text-xs text-accent/80">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}