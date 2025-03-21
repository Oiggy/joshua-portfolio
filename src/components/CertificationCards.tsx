
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const CertificationCards = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {/* First certification card */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
              <Card className="border-2 border-amber-500 h-[600px] bg-card hover:shadow-lg transition-all overflow-hidden">
                <img 
                  src="/lovable-uploads/e4bfc44d-ce9e-4743-b560-acd280b3d0d3.png" 
                  alt="Product Management Professional Certificate" 
                  className="w-full h-full object-contain p-4"
                />
              </Card>
            </CarouselItem>
            
            {/* Second certification card */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
              <Card className="border-2 border-amber-500 h-[600px] bg-card hover:shadow-lg transition-all overflow-hidden">
                <img 
                  src="/lovable-uploads/1c75b70e-e333-4d93-b35a-23335f24ea2c.png" 
                  alt="Certified ScrumMaster Certificate" 
                  className="w-full h-full object-contain p-4"
                />
              </Card>
            </CarouselItem>
            
            {/* Third certification card */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
              <Card className="border-2 border-amber-500 h-[600px] bg-card hover:shadow-lg transition-all overflow-hidden">
                <img 
                  src="/lovable-uploads/9d06e6d2-a53a-46fe-88ea-7457f35575e9.png" 
                  alt="Atlassian Agile Project Management Certificate" 
                  className="w-full h-full object-contain p-4"
                />
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default CertificationCards;
