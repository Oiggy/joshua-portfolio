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
      {/* Empty container - all education content removed */}
    </motion.div>
  );
};

export default Education;
