import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React', 'TypeScript', 'Next.js', 'Vue.js', 'JavaScript',
        'HTML5', 'CSS3', 'Tailwind CSS', 'SASS', 'Redux'
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js', 'Express.js', 'Python', 'Django', 'FastAPI',
        'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs'
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions',
        'Jest', 'Cypress', 'Webpack', 'Vite', 'Linux'
      ]
    },
    {
      title: 'Design & Others',
      skills: [
        'Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design',
        'Accessibility', 'SEO', 'Performance Optimization', 'Agile'
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
              A comprehensive toolkit for building modern web applications
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
                        className="tech-tag"
                        style={{ 
                          animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` 
                        }}
                      >
                        {skill}
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
                'Machine Learning', 'WebAssembly', 'Three.js', 'Rust', 
                'Kubernetes', 'Microservices', 'Blockchain', 'AI/ML'
              ].map((tech, index) => (
                <span 
                  key={index} 
                  className="tech-tag border-accent/20 text-accent hover:bg-accent/20 hover:border-accent/40"
                >
                  {tech}
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