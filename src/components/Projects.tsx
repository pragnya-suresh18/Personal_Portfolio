import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Artist Search & Discovery Platform',
      description: 'A responsive, full-stack web application for searching, exploring, and favoriting artists using the Artsy API. Features JWT authentication, Angular frontend, Node.js backend, and Google Cloud deployment.',
      image: '/api/placeholder/400/250',
      technologies: ['Angular', 'Node.js', 'Express', 'TypeScript', 'Bootstrap', 'MongoDB Atlas', 'JWT Auth', 'Google Cloud Run'],
      liveUrl: 'https://artsy3-567555845604.us-central1.run.app/search',
      githubUrl: '#',
      featured: true,
      highlights: ['Full-featured auth flow with secure sessions', 'Dynamic Artsy API integration', 'Favorites with real-time updates', 'Deployed on Google Cloud Platform']
    },
    // {
    //   title: 'Healthcare RAG Chatbot',
    //   description: 'Built and deployed a Retrieval-Augmented Generation pipeline for healthcare chatbot serving 10K+ queries/day, boosting user engagement by 25% with fine-tuned LLMs.',
    //   image: '/api/placeholder/400/250',
    //   technologies: ['Python', 'LangChain', 'Hugging Face', 'Vector DBs', 'FastAPI', 'AWS'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: true,
    //   highlights: ['10K+ daily queries processed', '25% boost in user engagement', 'Fine-tuned Llama 2 and Mistral models', 'Production-ready healthcare solution']
    // },
    {
      title: 'AI Studio - No-Code ML Platform',
      description: 'Led development of a no-code ML platform for model lifecycle management. Built MLOps pipelines that cut deployment time from 2 weeks to 2 days.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Docker', 'Kubernetes', 'MLflow', 'AWS', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      highlights: ['Reduced deployment time by 85%', 'Enterprise adoption across multiple use cases']
    },
    {
      title: 'Data Extraction Pipeline',
      description: 'Developed an ontology-based data extraction pipeline with 30% accuracy improvement for processing unstructured email data, contributing to $1M in revenue.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'NLP', 'BERT', 'Sentence Transformers', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      highlights: ['$1M revenue contribution', '30% accuracy improvement', '100+ async requests/second']
    },
    {
      title: 'Multi-Language PII Anonymizer',
      description: 'Designed a multi-language PII data anonymizer using NER and regex, improving processing efficiency by 40% with multiprocessing optimization.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'spaCy', 'NLTK', 'NER', 'Multiprocessing'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      highlights: ['40% runtime reduction', 'Multi-language support', 'Automated file processing']
    },
    {
      title: 'Contextual Emotion Recognition',
      description: 'Research project on multimodal emotion recognition in dyadic conversations using text, audio, and video data. Published in Springer 2020.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Deep Learning', 'Multimodal AI', 'Research'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      highlights: ['Published in Springer 2020', 'Novel multimodal approach', 'Dyadic conversation analysis']
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl opacity-30">🚀</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" className="glow-effect">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  {project.highlights && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-foreground">Key Achievements:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
