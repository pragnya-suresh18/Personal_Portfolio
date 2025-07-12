import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Python', logo: '🐍' },
        { name: 'PyTorch', logo: '🔥' },
        { name: 'Scikit-learn', logo: '🧬' },
        { name: 'Hugging Face', logo: '🤗' },
        { name: 'LangChain', logo: '🦜' },
        { name: 'Transformers', logo: '🤖' },
        { name: 'BERT', logo: '📝' },
        { name: 'Pandas', logo: '🐼' },
        { name: 'NumPy', logo: '🔢' }
      ]
    },
    {
      title: 'Cloud & MLOps',
      skills: [
        { name: 'AWS', logo: '☁️' },
        { name: 'GCP', logo: '🌥️' },
        { name: 'Docker', logo: '🐳' },
        { name: 'Kubernetes', logo: '⚓' },
        { name: 'MLFlow', logo: '📊' },
        { name: 'CI/CD', logo: '🔄' },
        { name: 'Git', logo: '📋' }
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'FastAPI', logo: '⚡' },
        { name: 'Flask', logo: '🌶️' },
        { name: 'REST APIs', logo: '🔗' },
        { name: 'Microservices', logo: '🏗️' },
        { name: 'MongoDB', logo: '🍃' },
        { name: 'Vector DBs', logo: '🗂️' }
      ]
    },
    {
      title: 'Frontend & Full Stack',
      skills: [
        { name: 'Angular', logo: '🅰️' },
        { name: 'TypeScript', logo: '📘' },
        { name: 'Node.js', logo: '💚' },
        { name: 'Bootstrap', logo: '💜' },
        { name: 'Express', logo: '🚂' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ML/AI expertise with full-stack development capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="card-hover border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="tech-tag flex items-center gap-2"
                        style={{ 
                          animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` 
                        }}
                      >
                        <span className="text-lg">{skill.logo}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Technologies */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Currently Learning & Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Advanced NLP', logo: '🧠' },
                { name: 'RAG Systems', logo: '🔍' },
                { name: 'Fine-tuning LLMs', logo: '⚙️' },
                { name: 'MLOps Pipelines', logo: '🚀' },
                { name: 'Topic Modeling', logo: '📊' },
                { name: 'Vector Embeddings', logo: '🎯' }
              ].map((tech, index) => (
                <span 
                  key={index} 
                  className="tech-tag border-accent/20 text-accent hover:bg-accent/20 hover:border-accent/40 flex items-center gap-2"
                >
                  <span className="text-lg">{tech.logo}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;