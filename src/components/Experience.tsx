import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer-III (ML)',
      company: 'Ushur',
      type: 'Full-time',
      location: 'Bengaluru, Karnataka',
      duration: 'Jan 2020 - Dec 2024',
      description: [
        'Led end-to-end delivery of a cloud-native, microservices-based RAG service with Weaviate vector search, serving 10K+ daily healthcare chatbot queries in production and improving answer relevance by 35% through optimized semantic retrieval',
        'Owned the SDLC of AI Studio, a no-code ML platform that automated data preparation, training, and deployment, reducing model delivery time from 2 weeks to 2 days and earning a Spot Award',
        'Built versioned model-serving APIs with scalable design patterns, integrating MLflow, automated health checks, and CI/CD pipelines for zero-downtime deployments and 50% faster rollbacks'
      ],
      technologies: ['Python', 'Weaviate', 'RAG', 'MLflow', 'AWS', 'Docker', 'Kubernetes', 'Microservices']
    },
    {
      title: 'Software Engineer-II (ML)',
      company: 'Ushur',
      type: 'Full-time',
      location: 'Bengaluru, Karnataka',
      duration: 'Jan 2020 - Dec 2024',
      description: [
        'Engineered an unstructured data-extraction service that automated insurance RFP email and document processing, cutting broker turnaround time from days to minutes and securing $1M in revenue',
        'Architected and containerized a FastAPI service with Docker and Kubernetes that handled 200+ asynchronous reqs/sec at <300 ms latency for model training, visualization, and analysis, with load balancing and automated scaling',
        'Built a fault-tolerant distributed pipeline with RabbitMQ, adding retries and dead-letter queues to recover failed jobs and handle 45% more tasks under peak load',
        'Drove code reviews and created onboarding guides to standardize coding practices and accelerate new-hire ramp-up'
      ],
      technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'RabbitMQ', 'NLP', 'Distributed Systems']
    },
    {
      title: 'Software Engineer-I (ML)',
      company: 'Ushur',
      type: 'Full-time',
      location: 'Bengaluru, Karnataka',
      duration: 'Jan 2020 - Dec 2024',
      description: [
        'Built and deployed 10+ production classification and extraction pipelines integrating feature selection and regularization algorithms, improving accuracy by 15-20% on noisy datasets',
        'Created a visualization dashboard with 15+ automated charts, improving data observability and saving 3 weeks of engineering effort per release cycle',
        'Won 1st place in company-wide hackathon with an NLP intent classifier later productized to automate message routing for enterprise customers'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'NLP', 'Feature Engineering']
    },
    {
      title: 'Software Engineering Intern',
      company: 'Ushur',
      type: 'Internship',
      location: 'Bengaluru, Karnataka',
      duration: 'Jan 2020 - Jun 2020',
      description: [
        'Built a high-throughput PII data anonymizer, parallelized across CPU cores, reducing runtime by 40% on multi-million-row datasets',
        'Strengthened pre-release quality by building a Java regression test suite for API and integration checks, catching ~10 critical bugs and preventing production issues during rollout'
      ],
      technologies: ['Python', 'Java', 'spaCy', 'NLTK', 'Multiprocessing', 'API Testing']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building and deploying ML systems at scale
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-effect z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-xl font-semibold text-foreground">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1">
                              <Building className="h-4 w-4" />
                              {exp.company} • {exp.type}
                            </CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Education 
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Master's, Computer Science</CardTitle>
                  <CardDescription>University of Southern California • Jan 2025 - Dec 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    GPA: 3.9/4.0. Coursework: Analysis of Algorithms, Web Technologies, Database Systems, Machine Learning, Information Retrieval
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Bachelor of Technology, Computer Science</CardTitle>
                  <CardDescription>PES University • Aug 2016 - May 2020</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    GPA: 3.7/4.0. Prof. CNR Rao Merit Scholar (top 5%)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;