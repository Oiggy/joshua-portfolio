
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-500">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-background/50 backdrop-blur-md p-6 rounded-xl border shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-2 rounded-full">
              <Check size={20} className="text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Certified ScrumMaster (CSM)</h3>
              <p className="text-sm text-muted-foreground mb-2">Scrum Alliance | Issued January 2025</p>
              <p className="text-muted-foreground text-sm">
                Professional certification in Scrum methodologies and Agile project management.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-background/50 backdrop-blur-md p-6 rounded-xl border shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-2 rounded-full">
              <Check size={20} className="text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Atlassian Agile Project Management Professional Certificate</h3>
              <p className="text-sm text-muted-foreground mb-2">Issued November 2024</p>
              <p className="text-muted-foreground text-sm">
                Comprehensive certification in Agile project management using Atlassian tools.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-background/50 backdrop-blur-md p-6 rounded-xl border shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-2 rounded-full">
              <Check size={20} className="text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Aha! Product Management Professional Certificate</h3>
              <p className="text-sm text-muted-foreground mb-2">Issued November 2024</p>
              <p className="text-muted-foreground text-sm">
                Specialized certification in product management methodologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
