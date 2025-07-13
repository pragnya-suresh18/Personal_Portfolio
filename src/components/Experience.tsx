import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Manager - Data Science',
      company: 'Ushur',
      type: 'Full-time',
      location: 'Bengaluru, Karnataka',
      duration: 'Jun 2023 - Dec 2024',
      description: [
        'Built and deployed a Retrieval-Augmented Generation (RAG) pipeline for healthcare chatbot serving 10K+ queries/day with 25% engagement boost',
        'Designed and implemented scalable AI solutions by fine-tuning open-source LLMs (Llama 2, Mistral, Flan) for 3+ large enterprise clients',
        'Led development of AI Studio, a no-code ML platform for model lifecycle management with MLOps pipelines using AWS, Docker, Kubernetes, and MLflow',
        'Cut deployment time from 2 weeks to 2 days and accelerated adoption across enterprise use cases'
      ],
      technologies: ['Python', 'LangChain', 'Hugging Face', 'AWS', 'Docker', 'Kubernetes', 'MLflow', 'RAG']
    },
    {
      title: 'Staff Data Scientist',
      company: 'Ushur',
      type: 'Full-time',
      location: 'Bengaluru, Karnataka',
      duration: 'Jun 2022 - Jun 2023',
      description: [
        'Developed a data extraction pipeline leveraging novel ontology-based approach with 30% accuracy improvement for processing unstructured email data',
        'Directly contributed to $1M in revenue through improved data processing capabilities',
        'Architected and deployed FastAPI server handling 100+ asynchronous requests per second for operations like skill visualization, model training, and analysis',
        'Trained models using BERT and Sentence Transformers to generate embeddings for topic modeling and classification tasks'
      ],
      technologies: ['Python', 'BERT', 'Sentence Transformers', 'FastAPI', 'NLP', 'Topic Modeling']
    },
    {
      title: 'Data Science Engineer',
      company: 'Ushur',
      type: 'Full-time',
      location: 'Bengaluru, Karnataka',
      duration: 'Jul 2020 - Jun 2022',
      description: [
        'Engineered robust text preprocessing and feature extraction pipelines to support classification models across 10+ production use cases',
        'Created an interactive EDA tool using Streamlit, Pandas, NumPy, and Matplotlib to analyze complex datasets',
        'Uncovered 10+ actionable insights that informed data-driven decisions across multiple teams',
        'Achieved over 70% KPI success across NLP projects by aligning modeling pipelines with business goals'
      ],
      technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Matplotlib', 'NLP', 'Feature Engineering']
    },
    {
      title: 'Data Science Intern',
      company: 'Ushur',
      type: 'Internship',
      location: 'Bengaluru, Karnataka',
      duration: 'Jan 2020 - Jun 2020',
      description: [
        'Designed a multi-language PII data anonymizer using Named Entity Recognition (NER), regular expressions, and language-specific tokenization',
        'Improved processing efficiency with multiprocessing, reducing runtime for large datasets by 40%',
        'Built reusable NLP libraries using spaCy, NLTK, and regex for scalable preprocessing, tokenization, and pattern extraction',
        'Implemented an SFTP watch tool that automated ingestion of ~50 files/day and triggered downstream transformation workflows'
      ],
      technologies: ['Python', 'spaCy', 'NLTK', 'NER', 'Regex', 'Multiprocessing', 'SFTP']
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
              4+ years of building and deploying ML systems at scale
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
                  <CardTitle className="text-lg">Master's, Computer Science (AI)</CardTitle>
                  <CardDescription>University of Southern California • Jan 2025 - Dec 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    GPA: 3.85/4. Focusing on advanced LLMs, AI Agents, and MLOps.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">B.Tech, Computer Science</CardTitle>
                  <CardDescription>PES University • Aug 2016 - May 2020</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    GPA: 9.29/10. Data Science Specialization.
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