
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import ProjectDetails from './ProjectDetails';
import { 
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from './ui/dialog';
import { toast } from '@/hooks/use-toast';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isPressed, setIsPressed] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [districtDialogOpen, setDistrictDialogOpen] = useState<boolean>(false);

  const projects = [
    {
      id: 1,
      logo: "lovable-uploads/e0e10bdd-0b43-40d1-ad51-7f573122fd7f.png",
      title: "Grana: AI-Powered Smart Grain Cooking Feature",
      company: "CO.LAB",
      year: "2025",
      description: "Grana is an AI-driven smart grain cooking assistant designed to automate precision cooking, optimize preset recommendations, and enhance user experience using adaptive machine learning. The feature was developed as part of an AI Product Management Fellowship at Co.Lab to streamline grain cooking, eliminating guesswork and inconsistencies.",
      detailedDescription: `The development of Grana involved extensive user research with 18 Instant Pot users to understand cooking behaviors and preferences. Insights gathered were translated into precise product specifications, user flows, and wireframes, leading to a 30% increase in user satisfaction and a 12-minute reduction in design iteration cycle time.

A cross-functional team was led through an AI-focused hackathon, refining Product Requirement Documents (PRDs) and conducting iterative stakeholder presentations. This effort reduced user confusion by 25% and cut prototyping session durations by 10 minutes.

Agile methodologies such as sprint planning, backlog grooming, and daily standups were implemented to drive development efficiency. AI-powered preset development was accelerated by 35%, and sprint cycle times were reduced by 0.5 days. The adoption of data-driven decision-making, A/B testing, and targeted surveys boosted feature adoption by 20%, ensuring Grana's smart presets met real user needs.

To maintain long-term strategic alignment, an AI-driven feature roadmap was created, streamlining product development and improving cross-functional collaboration between UX, engineering, and business teams.`,
      image: "lovable-uploads/e8373da9-dde5-45b3-a2b2-6b6e53afb34a.png",
      caseStudyLink: "https://dour-target-90d.notion.site/Grana-Smart-Grain-Cooking-Every-Time-1a8d066db855802da47de5262c1c580e"
    },
    {
      id: 2,
      logo: "lovable-uploads/bd633723-365f-4887-b16d-f91b8ed80643.png",
      title: "CAE TSPB737MAX FTD Desktop Application",
      company: "CAE",
      year: "2023-2024",
      description: "The CAE TSPB737MAX FTD Desktop Application is a B2B flight training simulation platform that integrates real-time data processing and cockpit interaction enhancements. The goal was to refine the User Interface (UI) and User Experience (UX) for aviation professionals, ensuring seamless usability and high training accuracy.",
      detailedDescription: `Key improvements included refining the fuel quantity indicator's UI, which enhanced real-time data visualization, improved error handling, and boosted system responsiveness. This led to a 10× accuracy increase and a 15-second reduction in processing time per simulation run.

The cockpit flaps position indicator synchronization was enhanced to reduce pilot handling errors by 75%, cutting operational lag by 2 seconds. These refinements ensured seamless interoperability across connected simulation environments.

The overhaul of cockpit data workflows improved UX accessibility and real-time telemetry tracking for aviation analytics. These enhancements made the training experience smoother and more intuitive for pilots.

The development process included backlog refinement, sprint execution in Jira and Confluence, and agile deployment of UI enhancements. Additionally, the ATIS messaging API integration was optimized to improve real-time data transmission accuracy, delivering 500+ error-free transmissions and reducing communication latency by 20 seconds.

Structured usability testing was conducted with flight trainees, leveraging data feedback loops to refine UX patterns, significantly improving training outcomes and boosting user adoption rates within enterprise aviation clients.`,
      image: "lovable-uploads/1b12fcee-4136-4374-9e28-55eeba16eacf.png",
      caseStudyLink: "#"
    },
    {
      id: 3,
      logo: "lovable-uploads/b174aa3d-f23a-4004-a564-40e3a2a3e08c.png",
      title: "Neurocognitive Monitoring Module",
      company: "HEALTH & TECHNOLOGY DISTRICT",
      year: "2021-2023",
      description: "The Neurocognitive Monitoring Module is a Windows Desktop Extension designed for real-time cognitive processing assessments and automated clinical reporting. This neurohealth feature, initially developed under the Health & Technology District's Brainnet Team, has since been integrated into NeuroCatch for monitoring cognitive health in dementia and cerebral malaria.",
      detailedDescription: `The module was built to optimize neuro-assessment workflows, providing automated cognitive data visualization and decision-support automation. Through iterative UX improvements, report usability for healthcare providers increased by 40%, allowing for more intuitive clinical interpretations.

The integration of real-time cognitive processing analytics helped improve diagnostic clarity by 35%, reducing clinician review times by 15 minutes. A newly implemented AI-enhanced reporting system further optimized structured data visualization, increasing report readability by 50% while cutting training time by 8 minutes.

To expand accessibility, the module underwent localization efforts for international deployment, integrating automated translation frameworks. These enhancements improved usability for non-English-speaking clinicians by 45% and cut translation turnaround time by 20 minutes per report.

A cloud-driven analytics framework was developed to enhance real-time data accuracy, improving system responsiveness by 30% and reducing processing latency by 10 seconds. The module was iteratively refined using agile-driven product development, leveraging Trello, SharePoint, and Miro for streamlined backlog prioritization and sprint execution, reducing feature rollout delays by 25%.`,
      image: "lovable-uploads/86fb03c6-49a8-4300-8ad1-f015141f6a07.png",
      caseStudyLink: "#"
    }
  ];

  const handleCardClick = (projectId: number) => {
    setIsPressed(projectId);
    
    // Reset the pressed state after a short delay to create the press effect
    setTimeout(() => {
      setIsPressed(null);
      
      // Handle different card actions
      if (projectId === 1) {
        // Open the Grana case study link in a new tab
        window.open(projects[0].caseStudyLink, '_blank');
        toast({
          title: "Opening Grana Case Study",
          description: "Redirecting to external case study page...",
        });
      } else if (projectId === 2) {
        // Toggle the dialog for CAE project
        setDialogOpen(!dialogOpen);
      } else if (projectId === 3) {
        // Toggle the dialog for Health & Technology District project
        setDistrictDialogOpen(!districtDialogOpen);
      }
    }, 150);
  };

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
            className={`bg-muted/50 rounded-xl p-8 md:p-12 transition-all duration-300 hover:shadow-md ${isPressed === project.id ? 'transform scale-[0.98] shadow-inner' : ''} cursor-pointer`}
            onClick={() => handleCardClick(project.id)}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 space-y-6">
                <div className="h-12 w-12">
                  <img 
                    src={project.logo} 
                    alt={`${project.company} logo`} 
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {project.company} • {project.year}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                
                {project.id === 1 ? (
                  <button 
                    className="inline-flex items-center text-sm font-medium group cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(project.id);
                    }}
                  >
                    View Case Study
                    <ExternalLink size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                ) : project.id === 2 ? (
                  <>
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger 
                        className="inline-flex items-center text-sm font-medium group cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDialogOpen(true);
                        }}
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </DialogTrigger>
                      <DialogContent 
                        className="sm:max-w-lg max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()} // Stop clicks from reaching the card
                      >
                        <DialogClose 
                          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
                          onClick={() => setDialogOpen(false)} // Explicitly set dialogOpen to false
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                        <div className="flex flex-col items-center justify-start p-6">
                          <img 
                            src="lovable-uploads/f6540239-4597-48d0-921f-fdc98afdc4e2.png" 
                            alt="Classified Information" 
                            className="max-w-full h-auto mb-6"
                          />
                          <DialogTitle className="text-xl font-bold mb-4 text-center">CAE TSPB737MAX FTD Desktop Application</DialogTitle>
                          <DialogDescription className="text-muted-foreground mb-4">
                            <div className="space-y-4">
                              <p>Key improvements included refining the fuel quantity indicator's UI, which enhanced real-time data visualization, improved error handling, and boosted system responsiveness. This led to a 10× accuracy increase and a 15-second reduction in processing time per simulation run.</p>
                              
                              <p>The cockpit flaps position indicator synchronization was enhanced to reduce pilot handling errors by 75%, cutting operational lag by 2 seconds. These refinements ensured seamless interoperability across connected simulation environments.</p>
                              
                              <p>The overhaul of cockpit data workflows improved UX accessibility and real-time telemetry tracking for aviation analytics. These enhancements made the training experience smoother and more intuitive for pilots.</p>
                              
                              <p>The development process included backlog refinement, sprint execution in Jira and Confluence, and agile deployment of UI enhancements. Additionally, the ATIS messaging API integration was optimized to improve real-time data transmission accuracy, delivering 500+ error-free transmissions and reducing communication latency by 20 seconds.</p>
                              
                              <p>Structured usability testing was conducted with flight trainees, leveraging data feedback loops to refine UX patterns, significantly improving training outcomes and boosting user adoption rates within enterprise aviation clients.</p>
                            </div>
                          </DialogDescription>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </>
                ) : (
                  <>
                    <Dialog open={districtDialogOpen} onOpenChange={setDistrictDialogOpen}>
                      <DialogTrigger 
                        className="inline-flex items-center text-sm font-medium group cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDistrictDialogOpen(true);
                        }}
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </DialogTrigger>
                      <DialogContent 
                        className="sm:max-w-lg max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()} // Stop clicks from reaching the card
                      >
                        <DialogClose 
                          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
                          onClick={() => setDistrictDialogOpen(false)} // Explicitly set districtDialogOpen to false
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                        <div className="flex flex-col items-center justify-start p-6">
                          <img 
                            src="lovable-uploads/f6540239-4597-48d0-921f-fdc98afdc4e2.png" 
                            alt="Classified Information" 
                            className="max-w-full h-auto mb-6"
                          />
                          <DialogTitle className="text-xl font-bold mb-4 text-center">Neurocognitive Monitoring Module</DialogTitle>
                          <DialogDescription className="text-muted-foreground mb-4">
                            <div className="space-y-4">
                              <p>The module was built to optimize neuro-assessment workflows, providing automated cognitive data visualization and decision-support automation. Through iterative UX improvements, report usability for healthcare providers increased by 40%, allowing for more intuitive clinical interpretations.</p>
                              
                              <p>The integration of real-time cognitive processing analytics helped improve diagnostic clarity by 35%, reducing clinician review times by 15 minutes. A newly implemented AI-enhanced reporting system further optimized structured data visualization, increasing report readability by 50% while cutting training time by 8 minutes.</p>
                              
                              <p>To expand accessibility, the module underwent localization efforts for international deployment, integrating automated translation frameworks. These enhancements improved usability for non-English-speaking clinicians by 45% and cut translation turnaround time by 20 minutes per report.</p>
                              
                              <p>A cloud-driven analytics framework was developed to enhance real-time data accuracy, improving system responsiveness by 30% and reducing processing latency by 10 seconds. The module was iteratively refined using agile-driven product development, leveraging Trello, SharePoint, and Miro for streamlined backlog prioritization and sprint execution, reducing feature rollout delays by 25%.</p>
                            </div>
                          </DialogDescription>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </>
                )}
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden bg-muted/50 h-full flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-contain max-h-[300px]"
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
