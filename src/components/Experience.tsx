
import React, { useRef, useEffect } from 'react';

const experiences = [
  {
    title: "AI Product Manager Fellow",
    company: "Co.Lab",
    location: "Toronto, Ontario, Canada",
    period: "January 2025 – Present",
    description: "Developed Grana, a hypothetical AI-powered smart grain cooking feature created for the internship, designed to automate cooking precision, optimize preset recommendations, and enhance user experience through adaptive machine learning algorithms.",
    highlights: [
      "Conducted comprehensive user research with 18 Instant Pot users, synthesizing insights into product specifications, user flows, and wireframes, leading to a 30% increase in user satisfaction and a 12-minute reduction in design iteration cycle time.",
      "Led a cross-functional team in an AI-focused hackathon, refining Product Requirement Documents (PRDs) and detailed wireframes while facilitating iterative stakeholder presentations, reducing user confusion by 25% and cutting prototyping session durations by 10 minutes.",
      "Applied Agile and Scrum methodologies, orchestrating sprint planning, backlog grooming, and daily standups while documenting feature requirements, accelerating AI-driven preset development by 35% and reducing sprint cycle times by 0.5 days.",
      "Analyzed user feedback and conducted targeted surveys to validate and prioritize AI-powered smart presets, leveraging A/B testing and data-driven decision-making to boost feature adoption by 20% and cut feedback turnaround time by 8 minutes per iteration.",
      "Spearheaded the creation of an AI-driven feature roadmap, ensuring strategic alignment between user needs, business goals, and technical feasibility, streamlining product development cycles and improving team efficiency.",
      "Optimized stakeholder collaboration by aligning UX, engineering, and business teams to refine the machine learning model, improving communication efficiency and feature iteration speed."
    ]
  },
  {
    title: "Software Simulation Product Specialist",
    company: "CAE, TSPB737MAX Team",
    location: "Saint Laurent, Quebec, Canada",
    period: "December 2023 – April 2024",
    description: "Improved the User Interface and User Experience of the CAE TSPB737MAX FTD Desktop Application, a B2B flight training solution with SaaS-integrated features for real-time simulation data processing and cockpit interaction enhancements.",
    highlights: [
      "Refined the fuel quantity indicator's UI and real-time data visualization, improving error handling and system responsiveness, leading to a 10× accuracy increase and a 15-second reduction in processing time per simulation run.",
      "Enhanced cockpit UI synchronization for the flaps position indicator, reducing pilot handling errors by 75% and cutting operational lag by 2 seconds, ensuring seamless usability across connected simulation environments.",
      "Redesigned cockpit data workflows, improving UX, accessibility, and real-time synchronization, aligning with telemetry tracking for aviation analytics.",
      "Led backlog refinement and sprint execution in Jira and Confluence, ensuring agile deployment of UI enhancements and scalable feature rollouts aligned with B2B aviation client needs.",
      "Optimized ATIS messaging API integration, improving data processing speed and real-time message accuracy, delivering 500+ error-free transmissions and reducing communication latency by 20 seconds.",
      "Conducted structured usability testing with flight trainees, refining UX patterns based on data feedback loops, improving training outcomes and user adoption within enterprise aviation clients."
    ]
  },
  {
    title: "Research Associate (Product Focus)",
    company: "Health and Technology District, Brainnet Team",
    location: "Surrey, British Columbia, Canada",
    period: "March 2021 – December 2023",
    description: "Developed a Windows Desktop Extension for Cognitive Processing Monitoring, a SaaS-powered neurohealth feature enabling real-time cognitive assessments and automated clinical reporting.",
    highlights: [
      "Designed and iterated on the clinician-facing UX, ensuring seamless cognitive data monitoring and decision-support automation, leading to a 40% increase in report usability for healthcare providers.",
      "Integrated real-time cognitive processing analytics, optimizing neuro-assessment workflows and automated insights, improving diagnostic clarity by 35% and reducing clinician review times by 15 minutes.",
      "Built an AI-enhanced reporting system, providing structured data visualization tailored to clinician workflows, increasing report readability by 50% and reducing training time by 8 minutes.",
      "Led localization efforts for international deployment, integrating automated translation frameworks, improving usability for non-English-speaking clinicians by 45% while cutting translation turnaround by 20 minutes per report.",
      "Collaborated with engineers to enhance cloud-driven analytics, ensuring real-time cognitive data accuracy, boosting system responsiveness by 30% and reducing processing latency by 10 seconds.",
      "Implemented agile-driven product iteration, leveraging Trello, SharePoint, and Miro for streamlined backlog prioritization and sprint execution, reducing feature rollout delays by 25%."
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="p-6 md:p-8 bg-card rounded-xl border shadow-sm card-hover opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
        <p className="text-muted-foreground">
          {experience.company} | {experience.location}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {experience.period}
        </p>
      </div>
      
      <p className="mb-4 text-muted-foreground">
        {experience.description}
      </p>
      
      <div>
        <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3">Key Achievements</h4>
        <ul className="space-y-2">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span className="text-sm">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-appear', 'is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-secondary/50 section-appear"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
