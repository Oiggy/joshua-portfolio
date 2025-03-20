
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeatureCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Experience",
      description: "Explore my professional journey and career achievements.",
      color: "text-[#1EAEDB]",
      route: "/experience"
    },
    {
      title: "Skills",
      description: "Discover my technical and professional skill set.",
      color: "text-green-500",
      route: "/skills"
    },
    {
      title: "About Me",
      description: "Learn more about me, my background, and interests.",
      color: "text-[#ea384c]",
      route: "/about"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 section-appear">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-md overflow-hidden group">
              <CardHeader>
                <CardTitle className={`${card.color}`}>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-40 flex items-center justify-center bg-muted/30 rounded-md">
                  <span className={`text-4xl ${card.color}`}>{card.title[0]}</span>
                </div>
              </CardContent>
              <CardFooter>
                <button 
                  onClick={() => navigate(card.route)}
                  className={`inline-flex items-center text-sm font-medium group ${card.color}`}
                >
                  View Details
                  <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
