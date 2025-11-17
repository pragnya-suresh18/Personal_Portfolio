import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import awsLogo from '@/assets/logos/aws.svg';
import artsyLogo from '@/assets/logos/artsy.svg';

const Projects = () => {
  const projects = [
    {
      title: 'AutoCloud Navigator',
      description: 'Built an intelligent, multi-agent AWS assistant using Strands Agent, Amazon Q Developer CLI (custom agents), and Bedrock AgentCore Gateway to enable natural-language queries across logs, metrics, and resource health to accelerate cloud diagnostics.',
      image: '/api/placeholder/400/250',
      technologies: ['AWS Strands Agent', 'Amazon Q CLI', 'Bedrock AgentCore Gateway', 'AWS', 'AWS CloudWatch', 'Lambda', 'Python', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      highlights: ['Multi-agent architecture with domain-specific agents', 'Natural language troubleshooting interface', 'Real-time diagnostics and automated optimization', 'Safe remediation with guardrails (dry-run + approval)', 'Designed full pipeline: query parsing → retrieval-augmented reasoning → action execution']
    },
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

  const githubProjects = [
    {
      title: 'Artsy Artist Explorer',
      description: 'Full-stack application for exploring artists using the Artsy API',
      githubUrl: 'https://github.com/pragnya-suresh18/Full-Stack-Projects/tree/main/Artsy-Artist-Explorer',
      technologies: ['Angular', 'Node.js', 'Express', 'TypeScript', 'Artsy API', 'REST API']
    },
    {
      title: 'Artsy Mobile Insight',
      description: 'Mobile analytics application for the Artsy platform',
      githubUrl: 'https://github.com/pragnya-suresh18/Full-Stack-Projects/tree/main/Artsy-Mobile-Insight',
      technologies: ['Android', 'Java', 'Artsy API', 'Mobile Development']
    },
    {
      title: 'FileSystem Implementation',
      description: 'Custom file system implementation with advanced features',
      githubUrl: 'https://github.com/pragnya-suresh18/FileSystem',
      technologies: ['C', 'System Programming', 'File Systems', 'OS Concepts']
    },
    {
      title: 'SelfielessActs',
      description: 'Scalable cloud platform with load balancing and auto-scaling for community service tracking',
      githubUrl: 'https://github.com/pragnya-suresh18/SelfielessActs',
      technologies: ['AWS', 'EC2', 'ELB', 'Auto Scaling', 'RDS', 'Cloud Computing']
    },
    {
      title: 'NER for Customer Support',
      description: 'Named Entity Recognition system for automated customer support',
      githubUrl: 'https://github.com/pragnya-suresh18/NER-for-Customer-Support',
      technologies: ['Python', 'NLP', 'spaCy', 'NER', 'Machine Learning']
    },
    {
      title: 'EMOBOT',
      description: 'Emotion-aware chatbot with sentiment analysis capabilities',
      githubUrl: 'https://github.com/pragnya-suresh18/EMOBOT',
      technologies: ['Python', 'NLP', 'Deep Learning', 'LSTM', 'Sentiment Analysis']
    },
    {
      title: 'Stroke Prediction Demo',
      description: 'Machine learning model for predicting stroke risk with web interface',
      githubUrl: 'https://github.com/pragnya-suresh18/Stroke-Prediction-demo/',
      technologies: ['Python', 'Scikit-learn', 'Flask', 'Machine Learning', 'Healthcare AI']
    },
    {
      title: 'Big Integer Library',
      description: 'Custom implementation of arbitrary-precision integer arithmetic',
      githubUrl: 'https://github.com/pragnya-suresh18/Big-Integer-Library',
      technologies: ['C', 'Data Structures', 'Algorithms', 'Memory Management']
    }
  ];

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
                    {project.title === 'AutoCloud Navigator' ? (
                      <img src={awsLogo} alt="AWS Logo" className="h-16 w-auto opacity-70" />
                    ) : project.title === 'Artist Search & Discovery Platform' ? (
                      <img src={artsyLogo} alt="Artsy Logo" className="h-16 w-auto opacity-70" />
                    ) : (
                      <span className="text-6xl opacity-30">🚀</span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" className="glow-effect" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    {/* <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button> */}
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

          {/* GitHub Projects Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
                More Projects
              </h3>
              <p className="text-muted-foreground">
                Explore more of my work on GitHub
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubProjects.map((project, index) => (
                <Card key={index} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Button variant="ghost" size="icon" className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag text-xs">
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
      </div>
    </section>
  );
};

export default Projects;
