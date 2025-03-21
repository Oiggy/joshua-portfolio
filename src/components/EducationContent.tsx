
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building, Calendar } from "lucide-react";

const EducationContent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-6xl mx-auto px-6 py-16"
      ref={sectionRef}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Educational Journey</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center mb-2">
              <GraduationCap className="mr-2 h-5 w-5 text-purple-500" />
              <CardTitle>Bachelor of Business Administration</CardTitle>
            </div>
            <CardDescription className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              University of British Columbia
            </CardDescription>
            <CardDescription className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              2018 - 2022
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Specialized in Marketing and Business Technology Management with a focus on digital transformation and product development strategies.</p>
            <ul className="list-disc list-inside mt-4 space-y-1 text-muted-foreground">
              <li>GPA: 3.8/4.0</li>
              <li>Dean's Honor List (2019-2022)</li>
              <li>Business Technology Club President</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-card transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center mb-2">
              <GraduationCap className="mr-2 h-5 w-5 text-purple-500" />
              <CardTitle>Product Management Certificate</CardTitle>
            </div>
            <CardDescription className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              Product School
            </CardDescription>
            <CardDescription className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              2022
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Intensive program covering product lifecycle management, agile methodologies, and go-to-market strategies.</p>
            <ul className="list-disc list-inside mt-4 space-y-1 text-muted-foreground">
              <li>Final Project: Developed a full product roadmap for a SaaS solution</li>
              <li>Mentored by senior product managers from leading tech companies</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-card transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center mb-2">
              <GraduationCap className="mr-2 h-5 w-5 text-purple-500" />
              <CardTitle>UX Research & Design</CardTitle>
            </div>
            <CardDescription className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              Nielsen Norman Group
            </CardDescription>
            <CardDescription className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              2023
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Comprehensive training on user experience principles, research methodologies, and interaction design.</p>
            <ul className="list-disc list-inside mt-4 space-y-1 text-muted-foreground">
              <li>User Research Specialization</li>
              <li>Conducted multiple usability studies with real clients</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-card transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center mb-2">
              <GraduationCap className="mr-2 h-5 w-5 text-purple-500" />
              <CardTitle>Continuing Education</CardTitle>
            </div>
            <CardDescription className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              Various Platforms
            </CardDescription>
            <CardDescription className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Ongoing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Continuous learning through various online platforms to stay current with industry trends and technologies.</p>
            <ul className="list-disc list-inside mt-4 space-y-1 text-muted-foreground">
              <li>Coursera: Data Analytics for Product Managers</li>
              <li>LinkedIn Learning: Advanced Agile Implementation</li>
              <li>Udemy: Technical Skills for Non-Technical PMs</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default EducationContent;
