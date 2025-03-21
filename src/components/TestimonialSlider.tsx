
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// Define testimonial image data
const testimonialImages = [
  {
    id: 1,
    src: "/lovable-uploads/49e9e853-0a3c-45a5-a996-9c4af9e3b7e7.png",
    alt: "Yogiraj Kachhela testimonial",
  },
  {
    id: 2,
    src: "/lovable-uploads/cbd37ffb-2c6a-4c88-bba5-6cdee1242f01.png",
    alt: "Hussein Bello testimonial",
  },
  {
    id: 3,
    src: "/lovable-uploads/6a5f77a6-b57d-4c72-a10b-99f4dc5cbd5f.png",
    alt: "Ayodele Adebisi testimonial",
  },
  {
    id: 4,
    src: "/lovable-uploads/cc803ed4-1897-44cb-812e-46708b394f23.png",
    alt: "Shina Arogundade testimonial",
  },
  {
    id: 5,
    src: "/lovable-uploads/a84435ba-6f07-46f5-a5c6-0ebd05aa641f.png",
    alt: "Olisaemeka Isife testimonial",
  },
  {
    id: 6,
    src: "/lovable-uploads/f127ee0b-aeef-4184-9c9e-0ef3bfe6d967.png",
    alt: "Valdimiro Cussei testimonial",
  },
  {
    id: 7,
    src: "/lovable-uploads/8ae07f93-4ad0-4056-a0b8-5fbef4da78b3.png",
    alt: "Gbenga Olufeyimi testimonial",
  },
  {
    id: 8,
    src: "/lovable-uploads/64e8c633-4dc4-412c-827d-097af3178ff7.png",
    alt: "Idiake S U testimonial",
  },
  {
    id: 9,
    src: "/lovable-uploads/e38f7001-0c2f-4a22-b3bb-238fc2582353.png",
    alt: "Warriz Adelabu testimonial",
  },
];

const TestimonialSlider = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 bg-secondary/30 section-appear">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Colleague Testimonials</h2>
          <p className="text-muted-foreground">Feedback from professional connections</p>
        </div>

        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonialImages.map((image) => (
              <CarouselItem key={image.id} className="pl-2 md:pl-4 sm:basis-1/1 md:basis-1/3 lg:basis-1/3">
                <Card className="h-full overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md bg-card">
                  <CardContent className="p-4">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-auto rounded-md shadow-sm hover:opacity-95 transition-opacity" 
                    />
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

export default TestimonialSlider;
