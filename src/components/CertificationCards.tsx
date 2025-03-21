
import React, { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// Define certification image data
const certificationImages = [
  {
    id: 1,
    src: "/lovable-uploads/e4bfc44d-ce9e-4743-b560-acd280b3d0d3.png",
    alt: "Product Management Professional Certificate",
  },
  {
    id: 2,
    src: "/lovable-uploads/1c75b70e-e333-4d93-b35a-23335f24ea2c.png",
    alt: "Certified ScrumMaster Certificate",
  },
  {
    id: 3,
    src: "/lovable-uploads/9d06e6d2-a53a-46fe-88ea-7457f35575e9.png",
    alt: "Atlassian Agile Project Management Certificate",
  },
];

const CertificationCards = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 px-6 md:px-12 section-appear">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Certifications</h2>
          <p className="text-muted-foreground">Specialized training and industry credentials</p>
        </div>

        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
            direction: "rtl", // Right to left movement
          }}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {certificationImages.map((image) => (
              <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-amber-500 h-[500px] md:h-[600px] bg-card hover:shadow-lg transition-all overflow-hidden">
                  <CardContent className="p-2 sm:p-4 h-full">
                    <div className="flex justify-center h-full">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="max-w-full h-full object-contain p-4 hover:opacity-95 transition-opacity cursor-pointer"
                        onClick={() => window.open(image.src, '_blank')}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
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
