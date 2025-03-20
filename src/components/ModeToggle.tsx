
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

type Mode = 'work-play' | 'experience' | 'skills' | 'contact' | 'about';

interface ModeToggleProps {
  onModeChange?: (mode: Mode) => void;
}

const ModeToggle = ({ onModeChange }: ModeToggleProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMode, setActiveMode] = useState<Mode>('work-play');
  
  // Set active mode based on current path
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveMode('work-play');
    } else if (path === '/experience') {
      setActiveMode('experience');
    } else if (path === '/skills') {
      setActiveMode('skills');
    } else if (path === '/contact') {
      setActiveMode('contact');
    } else if (path === '/about') {
      setActiveMode('about');
    }
  }, [location.pathname]);

  const handleModeChange = (value: string) => {
    if (value) {
      const mode = value as Mode;
      setActiveMode(mode);
      if (onModeChange) {
        onModeChange(mode);
      }
      
      // Navigate to the appropriate page
      if (mode === 'work-play') {
        navigate('/');
      } else {
        navigate(`/${mode}`);
      }
    }
  };

  // Function to determine text color based on active mode
  const getTextColor = (mode: Mode) => {
    // All buttons are black when work-play is active
    if (activeMode === 'work-play') return 'text-black';
    
    // When active, each button has its specific color
    if (activeMode === mode) {
      switch (mode) {
        case 'experience': return 'text-[#1EAEDB]';
        case 'skills': return 'text-green-500';
        case 'contact': return 'text-yellow-500';
        case 'about': return 'text-[#ea384c]';
        default: return 'text-black';
      }
    }
    
    // When not active, buttons remain black
    return 'text-black';
  };

  return (
    <div className="flex justify-center mb-8 pt-24">
      <div className="bg-background/80 backdrop-blur-md shadow-lg rounded-full px-2 py-2 border">
        <ToggleGroup type="single" value={activeMode} onValueChange={handleModeChange}>
          <ToggleGroupItem 
            value="work-play" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              getTextColor('work-play'),
              activeMode === 'work-play' 
                ? "bg-white shadow-sm" 
                : "hover:bg-secondary/80"
            )}
          >
            Work & Play
          </ToggleGroupItem>
          
          <ToggleGroupItem 
            value="experience" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              getTextColor('experience'),
              activeMode === 'experience' 
                ? "bg-white shadow-sm" 
                : "hover:bg-secondary/80"
            )}
          >
            Experience
          </ToggleGroupItem>
          
          <ToggleGroupItem 
            value="skills" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              getTextColor('skills'),
              activeMode === 'skills' 
                ? "bg-white shadow-sm" 
                : "hover:bg-secondary/80"
            )}
          >
            Skills
          </ToggleGroupItem>
          
          <ToggleGroupItem 
            value="contact" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              getTextColor('contact'),
              activeMode === 'contact' 
                ? "bg-white shadow-sm" 
                : "hover:bg-secondary/80"
            )}
          >
            Contact
          </ToggleGroupItem>
          
          <ToggleGroupItem 
            value="about" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              getTextColor('about'),
              activeMode === 'about' 
                ? "bg-white shadow-sm" 
                : "hover:bg-secondary/80"
            )}
          >
            About
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default ModeToggle;
