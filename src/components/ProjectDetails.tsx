
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailsProps {
  description: string;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ description, onBack }) => {
  return (
    <div className="space-y-6">
      <button 
        onClick={onBack}
        className="inline-flex items-center text-sm font-medium group mb-4"
      >
        <ArrowLeft size={16} className="mr-1 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to projects
      </button>
      
      <div className="prose prose-sm max-w-none">
        {description.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-muted-foreground mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
