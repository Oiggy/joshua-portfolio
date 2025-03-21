
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const CertificationCards = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "center",
            loop: true,
            direction: "rtl", // Right to left movement
            initialIndex: 0
          }}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {/* First certification card */}
            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-4/5 lg:basis-3/4">
              <Card className="border-2 border-amber-500 h-[600px] md:h-[700px] bg-card hover:shadow-lg transition-all overflow-hidden">
                <img 
                  src="/lovable-uploads/e4bfc44d-ce9e-4743-b560-acd280b3d0d3.png" 
                  alt="Product Management Professional Certificate" 
                  className="w-full h-full object-contain p-4"
                />
              </Card>
            </CarouselItem>
            
            {/* Second certification card */}
            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-4/5 lg:basis-3/4">
              <Card className="border-2 border-amber-500 h-[600px] md:h-[700px] bg-card hover:shadow-lg transition-all overflow-hidden">
                <img 
                  src="/lovable-uploads/1c75b70e-e333-4d93-b35a-23335f24ea2c.png" 
                  alt="Certified ScrumMaster Certificate" 
                  className="w-full h-full object-contain p-4"
                />
              </Card>
            </CarouselItem>
            
            {/* Third certification card */}
            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-4/5 lg:basis-3/4">
              <Card className="border-2 border-amber-500 h-[600px] md:h-[700px] bg-card hover:shadow-lg transition-all overflow-hidden">
                <img 
                  src="/lovable-uploads/9d06e6d2-a53a-46fe-88ea-7457f35575e9.png" 
                  alt="Atlassian Agile Project Management Certificate" 
                  className="w-full h-full object-contain p-4"
                />
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static left-0 right-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative static left-0 right-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CertificationCards;
