
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { useEmblaCarousel } from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

const CertificationCards = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: "start",
      loop: true,
      direction: "rtl", // Makes it move from right to left
      dragFree: true,
    },
    [AutoPlay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {/* First certification card */}
            <div className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_70%] min-w-0 pl-4">
              <Card className="border-2 border-amber-500 h-[600px] md:h-[700px] bg-card hover:shadow-lg transition-all overflow-hidden">
                <img 
                  src="/lovable-uploads/e4bfc44d-ce9e-4743-b560-acd280b3d0d3.png" 
                  alt="Product Management Professional Certificate" 
                  className="w-full h-full object-contain p-4"
                />
              </Card>
            </div>
            
            {/* Second certification card */}
            <div className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_70%] min-w-0 pl-4">
              <Card className="border-2 border-amber-500 h-[600px] md:h-[700px] bg-card hover:shadow-lg transition-all overflow-hidden">
                <img 
                  src="/lovable-uploads/1c75b70e-e333-4d93-b35a-23335f24ea2c.png" 
                  alt="Certified ScrumMaster Certificate" 
                  className="w-full h-full object-contain p-4"
                />
              </Card>
            </div>
            
            {/* Third certification card */}
            <div className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_70%] min-w-0 pl-4">
              <Card className="border-2 border-amber-500 h-[600px] md:h-[700px] bg-card hover:shadow-lg transition-all overflow-hidden">
                <img 
                  src="/lovable-uploads/9d06e6d2-a53a-46fe-88ea-7457f35575e9.png" 
                  alt="Atlassian Agile Project Management Certificate" 
                  className="w-full h-full object-contain p-4"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationCards;
