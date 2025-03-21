
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
      className="py-24 px-6 md:px-12 section-appear"
    >
      <div className="max-w-6xl mx-auto grid place-items-center">
        <div className="bg-card rounded-xl border p-8 shadow-sm max-w-md w-full">
          <h3 className="text-xl font-semibold mb-6 text-center">Contact Information</h3>
          
          <div className="space-y-6">
            <ContactItem 
              icon={Mail} 
              label="Email" 
              value="josh.workspacedev@gmail.com" 
              copyable 
            />
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:josh.workspacedev@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send Email
            </a>
            
            <p className="mt-4 text-sm text-muted-foreground">
              You can reach me through the email provided.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
