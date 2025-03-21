
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="border-2 border-amber-500 h-[400px] bg-card hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Product Management Professional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Certified by Product School
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Product strategy and roadmap development</li>
                    <li>User research and persona development</li>
                    <li>Agile methodologies and sprint planning</li>
                    <li>Feature prioritization frameworks</li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
            
            {/* Second certification card */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="border-2 border-amber-500 h-[400px] bg-card hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Agile Scrum Master</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Certified by Scrum Alliance
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Scrum framework implementation</li>
                    <li>Sprint facilitation and coaching</li>
                    <li>Removing impediments for development teams</li>
                    <li>Continuous improvement principles</li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
            
            {/* Third certification card */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="border-2 border-amber-500 h-[400px] bg-card hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">UX Research Specialist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Certified by Nielsen Norman Group
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>User interview techniques</li>
                    <li>Usability testing methodologies</li>
                    <li>Analytics and behavioral data analysis</li>
                    <li>Translating research into actionable insights</li>
                  </ul>
                </CardContent>
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
