
import React, { useRef, useEffect, useState } from 'react';
import { Mail, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';

const ContactItem = ({ 
  icon: Icon, 
  title,
  content
}: { 
  icon: React.ElementType, 
  title: string, 
  content: string,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-muted/30 rounded-full p-2">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase">{title}</p>
        <p className="text-sm text-muted-foreground">{content}</p>
      </div>
    </div>
  );
};

const BookingCard = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="grid md:grid-cols-1 gap-8 bg-card rounded-xl border border-[#ea384c] shadow-md overflow-hidden p-6 h-full flex flex-col">
      <div>
        <h2 className="text-3xl font-bold mb-4">Schedule a Meeting</h2>
        <p className="text-muted-foreground mb-6">Choose a time slot that works for you.</p>
      </div>
      <div className="flex-grow" style={{ minHeight: "680px" }}>
        <div 
          className="calendly-inline-widget w-full" 
          data-url="https://calendly.com/josh-workspacedev/30min" 
          style={{
            minWidth: "100%", 
            height: "630px",
            border: "none"
          }}
        ></div>
      </div>
    </div>
  );
};

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [emblaRef, emblaApi] = useEmblaCarousel();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };
  
  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-appear', 'is-visible');
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
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 section-appear"
    >
      <div className="max-w-6xl mx-auto">
        <div className="w-full">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              <div className="min-w-0 flex-[0_0_100%]">
                <div className="grid md:grid-cols-2 gap-8 bg-card rounded-xl border border-[#ea384c] shadow-md overflow-hidden h-full">
                  <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-2">Let's Get In Touch!</h2>
                    <p className="text-muted-foreground mb-8">Fill in the form below and I'll get back to you soon.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <Input 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email" 
                          placeholder="Email Address" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <Textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your message here..." 
                          rows={6} 
                          required 
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white font-semibold uppercase"
                      >
                        Get In Touch
                      </Button>
                    </form>
                    
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold mb-6 border-l-4 border-[#ea384c] pl-3">Contact Info</h3>
                      
                      <div className="space-y-4">
                        <ContactItem 
                          icon={Mail} 
                          title="Email" 
                          content="josh.workspacedev@gmail.com" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative hidden md:block">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ea384c]/20 to-transparent z-10"></div>
                    <img 
                      src="./lovable-uploads/e1bcd773-214f-446d-8d1f-c80a7ef3476a.png" 
                      alt="Joshua" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="min-w-0 flex-[0_0_100%]">
                <BookingCard />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={scrollPrev}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-muted hover:bg-muted/10 transition-colors"
              aria-label="Email form"
            >
              <Mail className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-muted hover:bg-muted/10 transition-colors"
              aria-label="Scheduling calendar"
            >
              <Calendar className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
