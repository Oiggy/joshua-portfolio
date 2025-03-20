
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

type Mode = 'work-play' | 'experience' | 'skills' | 'contact' | 'about';

interface ModeToggleProps {
  onModeChange?: (mode: Mode) => void;
}

const ModeToggle = ({ onModeChange }: ModeToggleProps) => {
  const [activeMode, setActiveMode] = useState<Mode>('work-play');

  const handleModeChange = (value: string) => {
    if (value) {
      const mode = value as Mode;
      setActiveMode(mode);
      if (onModeChange) {
        onModeChange(mode);
      }
      
      // Scroll to the relevant section if it exists
      if (mode !== 'work-play') {
        const element = document.getElementById(mode);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Scroll to top for work-play
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex justify-center mb-8 pt-24">
      <div className="bg-background/80 backdrop-blur-md shadow-lg rounded-full px-2 py-2 border">
        <ToggleGroup type="single" value={activeMode} onValueChange={handleModeChange}>
          <ToggleGroupItem 
            value="work-play" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              activeMode === 'work-play' ? "bg-white text-black shadow-sm" : "text-black hover:bg-secondary/80"
            )}
          >
            Work & Play
          </ToggleGroupItem>
          
          <ToggleGroupItem 
            value="experience" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              activeMode === 'experience' ? "bg-white shadow-sm" : "",
              "text-[#1EAEDB] hover:bg-secondary/80" // Blue color
            )}
          >
            Experience
          </ToggleGroupItem>
          
          <ToggleGroupItem 
            value="skills" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              activeMode === 'skills' ? "bg-white shadow-sm" : "",
              "text-green-500 hover:bg-secondary/80" // Green color
            )}
          >
            Skills
          </ToggleGroupItem>
          
          <ToggleGroupItem 
            value="contact" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              activeMode === 'contact' ? "bg-white shadow-sm" : "",
              "text-yellow-500 hover:bg-secondary/80" // Yellow color
            )}
          >
            Contact
          </ToggleGroupItem>
          
          <ToggleGroupItem 
            value="about" 
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              activeMode === 'about' ? "bg-white shadow-sm" : "",
              "text-[#ea384c] hover:bg-secondary/80" // Red color
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
