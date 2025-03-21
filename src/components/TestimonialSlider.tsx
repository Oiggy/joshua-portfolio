import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define the testimonial data structure
type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  imageSrc: string;
  quote: string;
  relationship: string;
  date: string;
};

// Testimonial data array based on the provided LinkedIn screenshots
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Yogiraj Kachhela",
    title: "Project Manager",
    company: "CSM®, CSPO®",
    imageSrc: "/lovable-uploads/7106c65c-21b0-4770-977f-9048363fb130.png",
    quote: "Joshua and I worked together on a research project at Simon Fraser University. His enthusiasm, rigor and dedication were instrumental in giving a unique direction to our project. He is well-informed, insightful, and motivated to tackle technical problems. Additionally, he is a great collaborator with remarkable presentation skills.",
    relationship: "worked with Joshua on the same team",
    date: "April 3, 2022"
  },
  {
    id: 2,
    name: "Hussein Bello",
    title: "Civil Engineering | Project Engineering | Sustainability",
    company: "E.I.T, PMI-CAPM",
    imageSrc: "/lovable-uploads/da8b0baa-4b99-4b8b-afdd-efdf8a6cd991.png",
    quote: "I have known Joshua since my first week in college, even as a young man you couldn't ignore his drive to achieve, focus and hard work. Ever since, that young man has grown smarter, become a better team player and an outstanding leader, more hardworking and goal-oriented than ever. I trust you will find this accurate once you get a chance to work with him and you might even hear his favorite saying \"If I can't give it my all during my prime, then what's living?\"",
    relationship: "studied together",
    date: "December 22, 2020"
  },
  {
    id: 3,
    name: "Ayodele Adebisi",
    title: "Systems Analyst at SaskTel",
    company: "SaskTel",
    imageSrc: "/lovable-uploads/9cb2f8b2-6c69-4bdb-80eb-ec85a533148d.png",
    quote: "Joshua worked as an intern with Swift Networks and I was one of his supervisors at work. During that period I and every other team member had an excellent relationship with him. He is career driven and attacks every task with total sense of responsibility. He handled a good number of IT projects under close supervision from me. I feel he is devoted to learning new things and he has the ability to deliver. Wishing you success in your career ahead.",
    relationship: "worked with Joshua on the same team",
    date: "March 31, 2019"
  },
  {
    id: 4,
    name: "Shina Arogundade",
    title: "Faith Driven Entrepreneur",
    company: "",
    imageSrc: "/lovable-uploads/24f0b10f-1703-4629-9297-6a9d9e576bc9.png",
    quote: "Joshua is a multi-faceted individual with strong Engineering skills. He has a depth understanding of Systems, knowledgeable in Microelectronics and he is always willing to give a helping hand. Having the opportunity to speak and work directly with him over the course of the years, I'm able to pick a thing or two about certain innovations in the engineering world from him. Solid skills in leadership and a passion for his craft, Joshua is a great addition to any team!",
    relationship: "studied together",
    date: "January 9, 2020"
  },
  {
    id: 5,
    name: "Olisaemeka Isife",
    title: "M.Eng Computer Engineering, Covenant University",
    company: "Covenant University",
    imageSrc: "/lovable-uploads/57c325c6-d9b3-4bbb-8141-55dd1eee4997.png",
    quote: "I have known Joshua to be an intelligent and diligent person. His determination to achieve excellence is evident in the feats he has achieved so far. There is no question about how hardworking Joshua is. He works effectively with others and has very good communication skill. Above all, Joshua is a person of integrity.",
    relationship: "studied together",
    date: "March 15, 2021"
  },
  {
    id: 6,
    name: "Valdimiro Cussei",
    title: "Founder @ Ratotecki Inc. | AI & Automation | Software Development & Validation | SIL & vECU Expert | Consultant",
    company: "Ratotecki Inc.",
    imageSrc: "/lovable-uploads/62d1d2e4-9943-4aa7-ba21-7300c4274de8.png",
    quote: "It was a pleasure working with Joshua in the ACPS project at SFU. Joshua is highly skilled in Firmware Development, Power Electronics, Machine Learning, Biomedical Engineering, and Python. His skills in R&D are very commendable.",
    relationship: "worked with Joshua on the same team",
    date: "December 19, 2020"
  },
  {
    id: 7,
    name: "Gbenga Olufeyimi",
    title: "Senior Software Engineer | Fullstack Developer",
    company: "",
    imageSrc: "/lovable-uploads/14cae3ad-b3f5-4527-b3f3-4f4c3b90444a.png",
    quote: "I highly recommend Joshua",
    relationship: "studied together",
    date: "June 5, 2019"
  },
  {
    id: 8,
    name: "Idiake S U",
    title: "Global Risk Management & Cybersecurity Expert | NIST & ISO 27001 Specialist | Proven Leader in Risk Mitigation and Security Optimization",
    company: "CRISC, CISA, 2xMEng, BEng",
    imageSrc: "/lovable-uploads/e3549bc5-0e32-4ffc-ae70-e4ec0f811dee.png",
    quote: "Joshua is a highly skilled Engineer with ethical integrity. He is an excellent researcher with high skills in modern technology. He is a result-oriented individual.",
    relationship: "managed Joshua directly",
    date: "December 13, 2020"
  },
  {
    id: 9,
    name: "Warriz Adelabu",
    title: "System Engineer | EPC Project Manager | Network Solution Architect",
    company: "",
    imageSrc: "/lovable-uploads/775122d1-8e0a-4312-8468-e353933655f3.png",
    quote: "Joshua was an incredible student. His ravening thirst for result, compulsive drive for excellence and pragmatic attitude to work gives him an edge to become one of the smartest student in our Undergraduate. I strongly recommend Joshua without any remorse.",
    relationship: "studied together",
    date: "June 9, 2019"
  }
];

const TestimonialSlider = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Colleagues</h2>
          <p className="text-muted-foreground">What people who have worked with me say</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.imageSrc} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{testimonial.title}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm line-clamp-4">{testimonial.quote}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {testimonial.relationship} • {testimonial.date}
                      </p>
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

export default TestimonialSlider;
