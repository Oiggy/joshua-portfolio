
import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Play, Search, Download, MoreHorizontal } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('Movies');
  const tabs = ['Movies', 'TV Series', 'Animation', 'Mystery', 'More'];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
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
  
  const featuredContent = {
    title: "Spider-Man: Across the Spider-Verse",
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    tags: ["Animation", "Adventure"],
    image: "/lovable-uploads/11c570b2-c7f6-4d52-a27c-b5196300010d.png"
  };
  
  const recommendations = [
    {
      title: "The Flash (2023)",
      category: "Fantasy",
      image: "/lovable-uploads/64e8c633-4dc4-412c-827d-097af3178ff7.png"
    },
    {
      title: "Manifest",
      category: "Mystery",
      image: "/lovable-uploads/a84435ba-6f07-46f5-a5c6-0ebd05aa641f.png"
    },
    {
      title: "Elemental",
      category: "Animation",
      image: "/lovable-uploads/8ae07f93-4ad0-4056-a0b8-5fbef4da78b3.png"
    },
    {
      title: "Interstellar",
      category: "Sci-fi",
      image: "/lovable-uploads/e0e10bdd-0b43-40d1-ad51-7f573122fd7f.png"
    }
  ];
  
  const recentMovies = [
    {
      title: "The Last Kingdom: Seven Kings Must Die",
      image: "/lovable-uploads/9d06e6d2-a53a-46fe-88ea-7457f35575e9.png"
    },
    {
      title: "The Super Mario Bros. Movies",
      image: "/lovable-uploads/b174aa3d-f23a-4004-a564-40e3a2a3e08c.png"
    }
  ];
  
  const continueWatching = [
    {
      title: "Dark Season 3",
      episode: "Episode 3",
      image: "/lovable-uploads/f6540239-4597-48d0-921f-fdc98afdc4e2.png"
    },
    {
      title: "Transformers - Dark of the Moon",
      episode: "01:24:15",
      image: "/lovable-uploads/f127ee0b-aeef-4184-9c9e-0ef3bfe6d967.png"
    },
    {
      title: "Lupin Season 2",
      episode: "Episode 3",
      image: "/lovable-uploads/e38f7001-0c2f-4a22-b3bb-238fc2582353.png"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="opacity-0 transition-opacity duration-1000 relative py-6"
    >
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative w-[280px]">
          <Input 
            placeholder="Search movies" 
            className="pl-10 bg-white/10 border-transparent focus:border-white/30 rounded-full h-11"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        </div>
        
        <div className="vision-nav flex items-center space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground/80'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium">3</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-pink-500"></div>
            <span className="text-sm font-medium">Joshua Ighalo</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {/* Left sidebar */}
        <div className="col-span-1 space-y-6">
          {/* New Trailer Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-orange-400 mr-2">🔥</span>
                <span className="font-medium">New Trailer</span>
              </div>
              <div className="text-xs text-muted-foreground">
                <span>Sort by: Today</span>
                <span className="ml-1">↓</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentMovies.map((movie, idx) => (
                <div key={idx} className="vision-card group relative">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium">{movie.title}</h3>
                  </div>
                  <button className="absolute right-3 bottom-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Continue Watching */}
          <div>
            <h2 className="font-medium mb-4">Continue Watching</h2>
            <div className="space-y-3">
              {continueWatching.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 group">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.episode}</p>
                  </div>
                  <button className="ml-auto w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main content and recommendations */}
        <div className="col-span-2 space-y-8">
          {/* Featured Content */}
          <div className="vision-card relative overflow-hidden h-80">
            <img 
              src={featuredContent.image} 
              alt={featuredContent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
              <div className="flex space-x-2 mb-2">
                <span className="text-xs px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
                  {featuredContent.tags[0]}
                </span>
                <span className="text-xs px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
                  {featuredContent.tags[1]}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-2">{featuredContent.title}</h2>
              <p className="text-sm text-white/80 mb-6 max-w-lg">{featuredContent.description}</p>
              
              <div className="flex space-x-3">
                <button className="vision-button flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Watch</span>
                </button>
                <button className="vision-button flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Recommendations */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">You might like</h2>
              <button className="text-xs text-muted-foreground hover:text-foreground">
                See all
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {recommendations.map((item, idx) => (
                <div key={idx} className="vision-card group">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-32 object-cover"
                    />
                    <span className="absolute top-2 left-2 text-xs px-2 py-0.5 bg-black/30 backdrop-blur-sm rounded-full">
                      {item.category}
                    </span>
                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-5 h-5" />
                      </div>
                    </button>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
