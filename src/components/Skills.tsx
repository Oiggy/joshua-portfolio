import React, { useRef, useEffect } from 'react';

const skillCategories = [
  {
    title: "Agile Product Management",
    skills: [
      "Agile Methodologies",
      "Product Vision",
      "Roadmapping",
      "Feature Prioritization",
      "Backlog Grooming",
      "Sprint Planning",
      "A/B Testing",
      "Milestone Establishment",
      "Continuous Improvement",
      "Software Development Lifecycle (SDLC)",
      "Kanban",
      "Burndown Charts",
      "Scrum Events",
      "Release Planning",
      "Agile Ceremonies",
      "Product Strategy",
      "Value Proposition Development",
      "Product-Market Fit Analysis",
      "Agile Frameworks (Scrum, Kanban, SAFe)",
      "Sprint Retrospectives",
      "Daily Standups",
      "Iteration Planning"
    ]
  },
  {
    title: "Data & Analysis",
    skills: [
      "User Research",
      "Data Analysis",
      "Competitor Analysis",
      "Customer Feedback Synthesis",
      "Google Analytics",
      "SQL",
      "Survey Analysis",
      "Analytical Mindset",
      "Strong Problem-Solving",
      "Data Interpretation",
      "Critical Thinking",
      "Metrics Tracking (OKRs, KPIs)",
      "Data-Driven Decision-Making",
      "Predictive Analytics",
      "Market Research",
      "Customer Journey Mapping",
      "User Segmentation",
      "Cohort Analysis",
      "A/B Testing Analysis",
      "Data Visualization",
      "Product Analytics",
      "User Behavior Analysis"
    ]
  },
  {
    title: "Tools & Technology",
    skills: [
      "Azure DevOps",
      "Jira",
      "monday.com",
      "Atlassian Confluence",
      "Microsoft SharePoint",
      "Notion",
      "Figma",
      "Miro",
      "Amplitude",
      "Google Analytics",
      "Power BI",
      "Tableau",
      "UserTesting",
      "SurveyMonkey",
      "GitHub",
      "GitLab",
      "Microsoft Office 365",
      "Slack",
      "Zoom",
      "Microsoft Teams"
    ]
  },
  {
    title: "UX & Design",
    skills: [
      "UX",
      "Product Design",
      "Wireframing",
      "Prototyping",
      "Mockups",
      "User Flows",
      "User Interface Design",
      "Information Architecture",
      "Usability Testing",
      "Design Thinking",
      "User-Centered Design",
      "Accessibility Standards",
      "Interaction Design",
      "Design System Management",
      "Responsive Design Principles",
      "User Research Methodologies",
      "Persona Development",
      "Storyboarding",
      "Journey Mapping"
    ]
  },
  {
    title: "Technical Understanding",
    skills: [
      "Quality Assurance",
      "Process Improvements",
      "Workflow Automation",
      "APIs",
      "CI/CD Pipelines",
      "Automated Testing",
      "Defect Resolution",
      "Compliance Monitoring",
      "System Architecture Understanding",
      "Technical Documentation",
      "API Integration",
      "Performance Optimization",
      "Scalability Planning",
      "Security Requirements",
      "Technical Feasibility Assessment",
      "Regression Testing",
      "Load Testing",
      "DevOps Practices"
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      "Trust-Building",
      "Accountability",
      "Adaptability",
      "Problem-Solving",
      "Strategic Alignment",
      "Innovation-Driven Mindset",
      "Proactive Attitude",
      "Can-Do Attitude",
      "Willingness to Learn",
      "Taking Initiative",
      "Technical Product Knowledge",
      "Conflict Resolution",
      "Negotiation Skills",
      "Mentoring",
      "Executive Communication",
      "Team Motivation",
      "Stakeholder Management",
      "Cultural Awareness",
      "Emotional Intelligence",
      "Presentation Skills",
      "Influence Without Authority"
    ]
  }
];

const SkillCategory = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  const categoryRef = useRef<HTMLDivElement>(null);
  
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
    
    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }
    
    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={categoryRef}
      className="bg-card rounded-xl border p-6 opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span 
            key={i}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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
      className="py-24 px-6 md:px-12 section-appear"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Professional Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills that I've developed 
            and refined throughout my career in product management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              category={category} 
              index={index} 
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-2">Additional Qualification</p>
          <p className="font-medium text-lg">
            Eligibility to Travel Between the USA and Canada (Canadian Citizen)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
