import { Code2, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'ML & AI Expertise',
      description: 'Building scalable ML systems with LLM fine-tuning, RAG pipelines, and advanced NLP techniques.'
    },
    {
      icon: Palette,
      title: 'MLOps & Deployment',
      description: 'End-to-end ML lifecycle management with Docker, Kubernetes, and cloud platforms (AWS, GCP).'
    },
    {
      icon: Zap,
      title: 'Research & Innovation',
      description: 'Published research in multimodal emotion recognition.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineer focused on AI/ML - curious about how things work and how to make them better
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm currently pursuing my Master's in Computer Science at USC (GPA: 3.9/4.0). My academic work centers on artificial intelligence, distributed systems, and the engineering required to turn complex model behavior into reliable, end-to-end intelligent applications. I'm especially interested in how language models interact with retrieval systems and agents, and how these components can be designed to work together in a stable, interpretable way.
                </p>
                
                <p>
                  Before USC, I worked as a Software Engineer in Machine Learning at Ushur, an AI SaaS company, where I built and maintained systems that had to perform reliably for enterprise clients. My work involved developing retrieval pipelines, vector search services with Weaviate, and scalable model-serving APIs. A major part of my role was designing and tuning RAG systems - I worked on improving retrieval quality through better chunking strategies, careful embedding selection, query reformulation, and HyDE-style synthetic query generation.
                </p>
                
                <p>
                  I also worked on multi-agent systems, including an AWS-based troubleshooting assistant that used coordinated agents to analyze logs, detect anomalies, and identify root causes. Across these projects, I've learned that I enjoy roles that involve both research thinking and rigorous engineering - exploring new techniques, testing them carefully, and then building the infrastructure required to make them useful in real applications.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '10K+', label: 'Daily Queries Served' },
              { number: '35%', label: 'Retrieval Improvement' },
              { number: '$1M+', label: 'Revenue Impact' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;