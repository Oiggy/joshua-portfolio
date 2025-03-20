
import React, { useRef, useEffect } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactItem = ({ 
  icon: Icon, 
  label, 
  value, 
  copyable = false 
}: { 
  icon: React.ElementType, 
  label: string, 
  value: string,
  copyable?: boolean
}) => {
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();
  
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: `${label}: ${value}`,
    });
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-secondary rounded-full">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p className="font-medium">{label}</p>
          {copyable && (
            <button
              onClick={handleCopy}
              className="p-1 rounded-full hover:bg-secondary transition-colors"
              aria-label={`Copy ${label}`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          )}
        </div>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
      className="py-24 px-6 md:px-12 bg-secondary/50 section-appear"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new product opportunities, innovative ideas, 
            or potential collaborations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactItem 
                icon={Mail} 
                label="Email" 
                value="josh.workspacedev@gmail.com" 
                copyable 
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/5 rounded-full" />
                
                <div className="relative bg-card rounded-xl border p-8 shadow-sm text-center">
                  <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm currently open to new opportunities and would love to hear from you.
                  </p>
                  
                  <a
                    href="mailto:josh.workspacedev@gmail.com"
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Send Email
                  </a>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    You can reach me through the email provided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
