
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
              <h3 className="text-xl font-semibold">Master of Applied Science in Engineering Science</h3>
              <p className="text-muted-foreground">Simon Fraser University, British Columbia, Canada</p>
            </div>
            <span className="text-muted-foreground text-sm">2019-2021</span>
          </div>
          <p className="text-muted-foreground">
            Focused on engineering science with specialized research and advanced technical studies.
          </p>
        </div>
        
        <div className="bg-background/50 backdrop-blur-md p-6 rounded-xl border shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Electrical & Electronics Engineering</h3>
              <p className="text-muted-foreground">Federal University Oye-Ekiti, Ekiti State, Nigeria</p>
            </div>
            <span className="text-muted-foreground text-sm">2013-2018</span>
          </div>
          <p className="text-muted-foreground">
            Comprehensive education in electrical and electronics engineering fundamentals and applications.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
