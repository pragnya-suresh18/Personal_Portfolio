import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      type: 'Full-time',
      location: 'San Francisco, CA',
      duration: 'Jan 2023 - Present',
      description: [
        'Led development of a React-based dashboard serving 100K+ users',
        'Improved application performance by 40% through code optimization',
        'Mentored junior developers and established coding standards',
        'Collaborated with design team to implement new UI/UX patterns'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      type: 'Full-time',
      location: 'Austin, TX',
      duration: 'Jun 2021 - Dec 2022',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Built RESTful APIs using Node.js and Express.js',
        'Implemented automated testing strategies increasing code coverage to 85%',
        'Worked in Agile environment with cross-functional teams'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Jest']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      type: 'Full-time',
      location: 'Remote',
      duration: 'Aug 2020 - May 2021',
      description: [
        'Created responsive web applications using modern JavaScript frameworks',
        'Collaborated with designers to translate mockups into functional interfaces',
        'Participated in code reviews and contributed to team knowledge sharing',
        'Maintained and updated existing codebase for legacy applications'
      ],
      technologies: ['JavaScript', 'Vue.js', 'CSS3', 'PHP', 'MySQL']
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Creative Agency Co.',
      type: 'Internship',
      location: 'New York, NY',
      duration: 'Jun 2020 - Aug 2020',
      description: [
        'Assisted in developing marketing websites for various clients',
        'Learned modern web development practices and tools',
        'Contributed to the company\'s internal component library',
        'Gained experience in client communication and project management'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Webpack', 'SASS']
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
              My journey in the world of software development
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
              Education & Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Bachelor of Computer Science</CardTitle>
                  <CardDescription>University of Technology • 2016-2020</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Graduated with honors. Focused on software engineering, algorithms, and web development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">AWS Certified Developer</CardTitle>
                  <CardDescription>Amazon Web Services • 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Certified in developing and maintaining applications on AWS platform.
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