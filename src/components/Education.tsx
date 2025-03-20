
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Education</h2>
      
      <div className="space-y-8">
        <div className="bg-background/50 backdrop-blur-md p-6 rounded-xl border shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Simon Fraser University</h3>
              <p className="text-muted-foreground">Bachelor of Business Administration</p>
            </div>
            <span className="text-muted-foreground text-sm">2017-2021</span>
          </div>
          <p className="text-muted-foreground">
            Focused on Marketing and Information Systems. Developed strong analytical and strategic thinking skills 
            through coursework in business strategy, data analysis, and product management.
          </p>
        </div>
        
        <div className="bg-background/50 backdrop-blur-md p-6 rounded-xl border shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Product Management Online Courses</h3>
              <p className="text-muted-foreground">Various platforms</p>
            </div>
            <span className="text-muted-foreground text-sm">2022-Present</span>
          </div>
          <p className="text-muted-foreground">
            Continuously expanding knowledge through online learning platforms including Coursera, 
            LinkedIn Learning, and specialized Product Management bootcamps.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
