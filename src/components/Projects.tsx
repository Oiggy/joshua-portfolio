
import React, { useState } from 'react';
import { ArrowRight, Brain, Plane, Cpu } from 'lucide-react';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      icon: <Cpu className="h-8 w-8" />,
      title: "Grana: AI-Powered Smart Grain Cooking Feature",
      company: "CO.LAB",
      year: "January 2025 – Present",
      description: "Grana is an AI-driven smart grain cooking assistant designed to automate precision cooking, optimize preset recommendations, and enhance user experience using adaptive machine learning. The feature was developed as part of an AI Product Management Fellowship at Co.Lab to streamline grain cooking, eliminating guesswork and inconsistencies.",
      detailedDescription: `The development of Grana involved extensive user research with 18 Instant Pot users to understand cooking behaviors and preferences. Insights gathered were translated into precise product specifications, user flows, and wireframes, leading to a 30% increase in user satisfaction and a 12-minute reduction in design iteration cycle time.

A cross-functional team was led through an AI-focused hackathon, refining Product Requirement Documents (PRDs) and conducting iterative stakeholder presentations. This effort reduced user confusion by 25% and cut prototyping session durations by 10 minutes.

Agile methodologies such as sprint planning, backlog grooming, and daily standups were implemented to drive development efficiency. AI-powered preset development was accelerated by 35%, and sprint cycle times were reduced by 0.5 days. The adoption of data-driven decision-making, A/B testing, and targeted surveys boosted feature adoption by 20%, ensuring Grana's smart presets met real user needs.

To maintain long-term strategic alignment, an AI-driven feature roadmap was created, streamlining product development and improving cross-functional collaboration between UX, engineering, and business teams.`,
      image: "/lovable-uploads/2b5b50f1-9f33-4e5d-a99f-109082a21bd1.png",
      caseStudyLink: "#"
    },
    {
      id: 2,
      icon: <Plane className="h-8 w-8" />,
      title: "CAE TSPB737MAX FTD Desktop Application",
      company: "CAE",
      year: "December 2023 – April 2024",
      description: "The CAE TSPB737MAX FTD Desktop Application is a B2B flight training simulation platform that integrates real-time data processing and cockpit interaction enhancements. The goal was to refine the User Interface (UI) and User Experience (UX) for aviation professionals, ensuring seamless usability and high training accuracy.",
      detailedDescription: `Key improvements included refining the fuel quantity indicator's UI, which enhanced real-time data visualization, improved error handling, and boosted system responsiveness. This led to a 10× accuracy increase and a 15-second reduction in processing time per simulation run.

The cockpit flaps position indicator synchronization was enhanced to reduce pilot handling errors by 75%, cutting operational lag by 2 seconds. These refinements ensured seamless interoperability across connected simulation environments.

The overhaul of cockpit data workflows improved UX accessibility and real-time telemetry tracking for aviation analytics. These enhancements made the training experience smoother and more intuitive for pilots.

The development process included backlog refinement, sprint execution in Jira and Confluence, and agile deployment of UI enhancements. Additionally, the ATIS messaging API integration was optimized to improve real-time data transmission accuracy, delivering 500+ error-free transmissions and reducing communication latency by 20 seconds.

Structured usability testing was conducted with flight trainees, leveraging data feedback loops to refine UX patterns, significantly improving training outcomes and boosting user adoption rates within enterprise aviation clients.`,
      image: "/lovable-uploads/2b5b50f1-9f33-4e5d-a99f-109082a21bd1.png",
      caseStudyLink: "#"
    },
    {
      id: 3,
      icon: <Brain className="h-8 w-8" />,
      title: "Neurocognitive Monitoring Module",
      company: "HEALTH & TECHNOLOGY DISTRICT",
      year: "March 2021 – December 2023",
      description: "The Neurocognitive Monitoring Module is a Windows Desktop Extension designed for real-time cognitive processing assessments and automated clinical reporting. This neurohealth feature, initially developed under the Health & Technology District's Brainnet Team, has since been integrated into NeuroCatch for monitoring cognitive health in dementia and cerebral malaria.",
      detailedDescription: `The module was built to optimize neuro-assessment workflows, providing automated cognitive data visualization and decision-support automation. Through iterative UX improvements, report usability for healthcare providers increased by 40%, allowing for more intuitive clinical interpretations.

The integration of real-time cognitive processing analytics helped improve diagnostic clarity by 35%, reducing clinician review times by 15 minutes. A newly implemented AI-enhanced reporting system further optimized structured data visualization, increasing report readability by 50% while cutting training time by 8 minutes.

To expand accessibility, the module underwent localization efforts for international deployment, integrating automated translation frameworks. These enhancements improved usability for non-English-speaking clinicians by 45% and cut translation turnaround time by 20 minutes per report.

A cloud-driven analytics framework was developed to enhance real-time data accuracy, improving system responsiveness by 30% and reducing processing latency by 10 seconds. The module was iteratively refined using agile-driven product development, leveraging Trello, SharePoint, and Miro for streamlined backlog prioritization and sprint execution, reducing feature rollout delays by 25%.`,
      image: "/lovable-uploads/2b5b50f1-9f33-4e5d-a99f-109082a21bd1.png",
      caseStudyLink: "#"
    }
  ];

  if (selectedProject !== null) {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      return (
        <section id="projects" className="py-20 px-6 md:px-12 section-appear">
          <div className="max-w-6xl mx-auto">
            <ProjectDetails 
              description={project.detailedDescription}
              onBack={() => setSelectedProject(null)}
            />
          </div>
        </section>
      );
    }
  }

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
                <div className="text-primary">{project.icon}</div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {project.company} • {project.year}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <button 
                  onClick={() => setSelectedProject(project.id)}
                  className="inline-flex items-center text-sm font-medium group"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
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
