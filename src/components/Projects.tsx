
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      logo: "🧠",
      title: "Cognitive Processing Monitor",
      company: "HEALTH & TECHNOLOGY DISTRICT",
      year: "2021-2023",
      description: "Developed a Windows Desktop Extension for neurohealth monitoring, enabling real-time cognitive assessments and automated clinical reporting.",
      image: "/lovable-uploads/2b5b50f1-9f33-4e5d-a99f-109082a21bd1.png", // Using the uploaded image
      caseStudyLink: "#"
    },
    {
      id: 2,
      logo: "✈️",
      title: "Flight Simulation Interface",
      company: "CAE",
      year: "2023-2024",
      description: "Improved UI/UX of the TSPB737MAX FTD Desktop Application, enhancing real-time simulation data processing and cockpit interaction features.",
      image: "/lovable-uploads/2b5b50f1-9f33-4e5d-a99f-109082a21bd1.png", // Using the uploaded image
      caseStudyLink: "#"
    },
    {
      id: 3,
      logo: "🍚",
      title: "Grana AI Cooking Assistant",
      company: "CO.LAB",
      year: "2025",
      description: "Developed an AI-powered smart grain cooking feature that automates cooking precision and optimizes recommendations through machine learning.",
      image: "/lovable-uploads/2b5b50f1-9f33-4e5d-a99f-109082a21bd1.png", // Using the uploaded image
      caseStudyLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 section-appear">
      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-muted/50 rounded-xl p-8 md:p-12 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 space-y-6">
                <div className="text-3xl">{project.logo}</div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {project.company} • {project.year}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <a 
                  href={project.caseStudyLink} 
                  className="inline-flex items-center text-sm font-medium group"
                >
                  Read Case Study 
                  <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-background">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
