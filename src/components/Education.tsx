
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Building, Calendar, MapPin, Flag } from 'lucide-react';

const Education = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="flex flex-col items-center justify-center space-y-10">
        {/* SFU Card */}
        <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm border shadow-lg">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold text-black flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" />
                  Master of Applied Science in Engineering Science (2021)
                </CardTitle>
                <CardDescription className="text-lg flex items-center gap-2 mt-2">
                  <Building className="h-5 w-5" />
                  Simon Fraser University
                </CardDescription>
                <CardDescription className="text-md flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  British Columbia, Canada
                </CardDescription>
              </div>
              <div className="h-16 w-16 bg-red-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SFU</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="./lovable-uploads/e53ed5f3-059c-446c-9d03-27c7f3b068d1.png" 
                  alt="SFU Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src="./lovable-uploads/fd619d49-83af-42f2-8d40-aeb6cdcc8d3c.png" 
                    alt="SFU Campus Aerial View" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src="./lovable-uploads/84b78272-a6a1-415f-a04b-bad2f0470219.png" 
                    alt="SFU Logo" 
                    className="w-full h-full object-cover bg-red-700"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FUOYE Card */}
        <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm border shadow-lg">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold text-black flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" />
                  Bachelor of Electrical & Electronics Engineering (2018)
                </CardTitle>
                <CardDescription className="text-lg flex items-center gap-2 mt-2">
                  <Building className="h-5 w-5" />
                  Federal University Oye-Ekiti
                </CardDescription>
                <CardDescription className="text-md flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Ekiti State, Nigeria
                </CardDescription>
              </div>
              <div className="h-16 w-16 bg-green-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">FUOYE</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="./lovable-uploads/5832f571-cbd5-413c-98e6-aea1e147e12a.png" 
                  alt="FUOYE Campus Main Gate" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="./lovable-uploads/8b0e7498-add4-4a5a-98b9-ff187c24b17d.png" 
                    alt="FUOYE Logo" 
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-lg bg-green-700/10">
                  <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Program Highlights</h3>
                    <p className="text-sm text-gray-700">Specialization in Power Systems & Control Engineering</p>
                    <div className="mt-3 text-xs text-green-800 italic">
                      "Innovation & Character for National Transformation"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default Education;
