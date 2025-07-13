import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Import tech logos
import pythonLogo from '@/assets/logos/python.svg';
import pytorchLogo from '@/assets/logos/pytorch.svg';
import scikitLearnLogo from '@/assets/logos/scikit-learn.svg';
import huggingfaceLogo from '@/assets/logos/huggingface.svg';
import pandasLogo from '@/assets/logos/pandas.svg';
import numpyLogo from '@/assets/logos/numpy.svg';
import awsLogo from '@/assets/logos/aws.svg';
import gcpLogo from '@/assets/logos/gcp.svg';
import dockerLogo from '@/assets/logos/docker.svg';
import kubernetesLogo from '@/assets/logos/kubernetes.svg';
import gitLogo from '@/assets/logos/git.svg';
import fastapiLogo from '@/assets/logos/fastapi.svg';
import flaskLogo from '@/assets/logos/flask.svg';
import mongodbLogo from '@/assets/logos/mongodb.svg';
import angularLogo from '@/assets/logos/angular.svg';
import typescriptLogo from '@/assets/logos/typescript.svg';
import nodejsLogo from '@/assets/logos/nodejs.svg';
import bootstrapLogo from '@/assets/logos/bootstrap.svg';
import expressLogo from '@/assets/logos/express.svg';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Python', logo: pythonLogo },
        { name: 'PyTorch', logo: pytorchLogo },
        { name: 'Scikit-learn', logo: scikitLearnLogo },
        { name: 'Hugging Face', logo: huggingfaceLogo },
        { name: 'LangChain', logo: '🦜' },
        { name: 'Transformers', logo: '🤖' },
        { name: 'BERT', logo: '📝' },
        { name: 'Pandas', logo: pandasLogo },
        { name: 'NumPy', logo: numpyLogo }
      ]
    },
    {
      title: 'Cloud & MLOps',
      skills: [
        { name: 'AWS', logo: awsLogo },
        { name: 'GCP', logo: gcpLogo },
        { name: 'Docker', logo: dockerLogo },
        { name: 'Kubernetes', logo: kubernetesLogo },
        { name: 'MLFlow', logo: '📊' },
        { name: 'CI/CD', logo: '🔄' },
        { name: 'Git', logo: gitLogo }
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'FastAPI', logo: fastapiLogo },
        { name: 'Flask', logo: flaskLogo },
        { name: 'REST APIs', logo: '🔗' },
        { name: 'Microservices', logo: '🏗️' },
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'Vector DBs', logo: '🗂️' }
      ]
    },
    {
      title: 'Frontend & Full Stack',
      skills: [
        { name: 'Angular', logo: angularLogo },
        { name: 'TypeScript', logo: typescriptLogo },
        { name: 'Node.js', logo: nodejsLogo },
        { name: 'Bootstrap', logo: bootstrapLogo },
        { name: 'Express', logo: expressLogo }
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
                        {typeof skill.logo === 'string' && skill.logo.length === 2 ? (
                          <span className="text-lg">{skill.logo}</span>
                        ) : (
                          <img src={skill.logo} alt={`${skill.name} logo`} className="w-5 h-5" />
                        )}
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
                  {typeof tech.logo === 'string' && tech.logo.length === 2 ? (
                    <span className="text-lg">{tech.logo}</span>
                  ) : (
                    <img src={tech.logo} alt={`${tech.name} logo`} className="w-5 h-5" />
                  )}
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