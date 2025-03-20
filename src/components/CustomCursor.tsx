
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };
    
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      
      if (hoveredElement) {
        const isLink = 
          hoveredElement.tagName === 'A' || 
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.closest('a') || 
          hoveredElement.closest('button');
        
        setLinkHovered(!!isLink);
      } else {
        setLinkHovered(false);
      }
    };
    
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
    
    const onMouseLeave = () => {
      setHidden(true);
    };
    
    const onMouseEnter = () => {
      setHidden(false);
    };
    
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  
  // Don't render custom cursor on mobile/tablet devices
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches;
  
  if (isMobile) return null;
  
  return (
    <>
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: clicked ? 'scale(0.5)' : 'scale(1)',
          opacity: hidden ? 0 : 1,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? 'opacity-0' : ''} ${
          linkHovered ? 'scale-150 bg-black/5' : ''
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${
            clicked ? 'scale(0.8)' : 'scale(1)'
          }`,
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
