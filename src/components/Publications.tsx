import { ExternalLink, FileText, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Publications = () => {
  const publications = [
    {
      title: 'Extracting Information from Unstructured Emails: An RFP Intake Pipeline',
      type: 'Technical Blog',
      platform: 'Medium - Ushur Engineering',
      date: '2023',
      description: 'Deep dive into building an ontology-based data extraction pipeline that improved accuracy by 30% for processing unstructured email data, directly contributing to $1M in revenue.',
      url: 'https://medium.com/ushur-engineering/extracting-information-from-unstructured-emails-an-rfp-intake-pipeline-d9a66672409a',
      tags: ['NLP', 'Data Extraction', 'Machine Learning', 'Enterprise'],
      featured: true
    },
    {
      title: 'Contextually Aware Multimodal Emotion Recognition',
      type: 'Research Paper',
      platform: 'Springer',
      date: '2020',
      description: 'Novel approach to recognize emotion in dyadic conversations using multimodal data from text, audio, and video sources.',
      url: 'https://link.springer.com/chapter/10.1007/978-981-15-7234-0_71',
      tags: ['Deep Learning', 'Multimodal AI', 'Research', 'Computer Vision'],
      featured: false
    },
    {
      title: 'Mispronunciation Detection for Spoken Isolated Words using Segmentation and Classification',
      type: 'Research Paper',
      platform: 'IJRTE',
      date: '2019',
      description: 'Employed unsupervised techniques for segmentation of Kannada words and recognition of syllables under low resource conditions.',
      url: 'https://www.ijrte.org/wp-content/uploads/papers/v8i4/D9589118419.pdf',
      tags: ['Speech Processing', 'NLP', 'Unsupervised Learning', 'Low Resource'],
      featured: false
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              Publications & Writings
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical articles and research papers on ML, NLP, and AI
            </p>
          </div>

          {/* Publications Grid */}
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <Card key={index} className={`card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group ${publication.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <Badge variant={publication.featured ? "default" : "secondary"}>
                          {publication.type}
                        </Badge>
                        {publication.featured && (
                          <Badge variant="outline" className="text-primary border-primary">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl font-semibold mb-2">
                        {publication.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{publication.platform}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {publication.date}
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {publication.description}
                      </CardDescription>
                    </div>
                    
                    {publication.url !== '#' && (
                      <Button size="sm" className="glow-effect shrink-0" asChild>
                        <a href={publication.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Article
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tech-tag text-xs">
                        {tag}
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

export default Publications;