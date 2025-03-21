
import React, { useRef, useEffect } from 'react';

const PersonalInterests = () => {
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
      className="py-16 px-6 md:px-12 section-appear bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Life is all about balance</h2>
            <p className="text-muted-foreground mb-4">
              Life is all about balance, staying curious, embracing passions, and enjoying the things that bring excitement and growth. Whether it's the thrill of competition, the latest tech innovations, or a perfectly curated living space, I love diving deep into the things that spark my interest.
            </p>
            <p className="text-muted-foreground mb-6">
              Here's a glimpse into what keeps me engaged and entertained:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="mr-2">⚽🥋</span>
                  <span className="text-[#ea384c]">Sports & Combat Entertainment</span>
                </h3>
                <p className="text-muted-foreground pl-7">
                  Football is my go-to sport, and I'm a massive Manchester City fan! Whether it's breaking down Pep's tactics, celebrating Haaland's goals, or debating the best midfield trio of all time, I'm always up for a football discussion. When I'm not watching the game, I immerse myself in the high-energy world of WWE and MMA, appreciating the athleticism, storytelling, and intensity of both.
                </p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="mr-2">📱💻</span>
                  <span className="text-[#ea384c]">Tech & Gadgets</span>
                </h3>
                <p className="text-muted-foreground pl-7">
                  I'm a tech junkie who loves keeping up with the latest gadgets, from smartphones and AI-powered tools to VR and smart home innovations. I'm always waiting for the next Apple product that does to the industry what Apple did to BlackBerry—something that completely shifts the landscape and makes everything else feel outdated overnight.
                </p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="mr-2">🎙️📚</span>
                  <span className="text-[#ea384c]">Podcasts & Continuous Learning</span>
                </h3>
                <p className="text-muted-foreground pl-7">
                  I fuel my curiosity through podcasts, with two favorites being The Waveform Podcast, where I stay updated on tech trends, and Daily Hope with Rick Warren, which keeps me grounded and inspired.
                </p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="mr-2">🏋🏾‍♂️</span>
                  <span className="text-[#ea384c]">Fitness & Wellness</span>
                </h3>
                <p className="text-muted-foreground pl-7">
                  Hitting the gym is a major part of my routine, helping me stay active and focused. Whether it's strength training, cardio, or experimenting with new workouts, I believe in maintaining a balanced lifestyle.
                </p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="mr-2">🛋️🎨</span>
                  <span className="text-[#ea384c]">Interior Design & Aesthetics</span>
                </h3>
                <p className="text-muted-foreground pl-7">
                  I have a keen eye for interior design, appreciating how spaces can be transformed with creativity and attention to detail. That said, I have rearranged my sitting room style over 10 times in one year, and honestly, I might do it again next week. At this point, I should just start an interior design blog.
                </p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="mr-2">📺🔥</span>
                  <span className="text-[#ea384c]">Reality TV & Strategy Shows</span>
                </h3>
                <p className="text-muted-foreground pl-7">
                  When I unwind, you'll find me engrossed in The Challenge USA, Survivor USA, and The Traitors USA, shows that combine competition, strategy, and social dynamics in the most intriguing ways. But for pure chaos in a weirdly entertaining way, I also watch Love Is Blind, Temptation Island, and Love Island. The drama, the questionable decisions, the unexpected twists, I can't look away.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl overflow-hidden h-96 shadow-lg">
              <img 
                src="/lovable-uploads/36bd612f-28f0-4727-b4c4-c96d7a3a6c00.png" 
                alt="Joshua Ighalo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/62219973-d02f-4d46-bc4d-f85575d0ea9f.png" 
                  alt="Joshua Ighalo in winter" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/e1bcd773-214f-446d-8d1f-c80a7ef3476a.png" 
                  alt="Joshua Ighalo in glasses" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;
