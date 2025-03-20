
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
              <h3 className="text-lg font-semibold">Agile Product Management</h3>
              <p className="text-sm text-muted-foreground mb-2">Scrum Alliance, 2023</p>
              <p className="text-muted-foreground text-sm">
                Specialized in Agile methodologies and Scrum frameworks for effective product development.
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
              <h3 className="text-lg font-semibold">Product Strategy Certification</h3>
              <p className="text-sm text-muted-foreground mb-2">Product School, 2022</p>
              <p className="text-muted-foreground text-sm">
                Comprehensive training in product strategy, roadmapping, and go-to-market planning.
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
              <h3 className="text-lg font-semibold">UX Design Fundamentals</h3>
              <p className="text-sm text-muted-foreground mb-2">Nielsen Norman Group, 2023</p>
              <p className="text-muted-foreground text-sm">
                Focused on user-centered design principles and usability testing for product development.
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
              <h3 className="text-lg font-semibold">Data Analytics for Product Managers</h3>
              <p className="text-sm text-muted-foreground mb-2">DataCamp, 2022</p>
              <p className="text-muted-foreground text-sm">
                Skills in data-driven decision making, product metrics analysis, and A/B testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
