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
      description: 'Published research in multimodal AI and continuously exploring cutting-edge technologies.'
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
              <h3 className="text-2xl font-semibold text-foreground">
                Transforming Ideas into AI-Powered Solutions
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Machine Learning Engineer with 4+ years of experience building and deploying ML and GenAI systems at scale. 
                  My journey began at Ushur, where I progressed from intern to Manager - Data Science, leading ML initiatives 
                  and developing AI solutions that drive real business impact.
                </p>
                
                <p>
                  Currently pursuing my Master's in Computer Science at USC (GPA: 3.85), I specialize in LLM fine-tuning, 
                  RAG pipelines, and MLOps. I've built systems serving 10K+ queries/day, contributed to $1M+ in revenue, 
                  and led the development of AI Studio - a no-code ML platform that accelerated ML model deployment from weeks to days.
                </p>
                
                <p>
                  Beyond my core ML expertise, I have full-stack development experience with Angular, TypeScript, Node.js, and MongoDB via CS571 which is an advanced web development course at USC. 
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
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '4+', label: 'Years ML Experience' },
              { number: '10K+', label: 'Daily Queries Served' },
              { number: '3+', label: 'LLMs Fine-tuned' },
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