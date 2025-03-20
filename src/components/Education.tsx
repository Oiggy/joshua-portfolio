
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Education = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);

    // Clear any existing canvas
    if (globeRef.current.firstChild) {
      globeRef.current.removeChild(globeRef.current.firstChild);
    }
    globeRef.current.appendChild(renderer.domElement);

    // Earth creation
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    
    // Create earth texture
    const earthTexture = new THREE.TextureLoader().load('/placeholder.svg');
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpScale: 0.05,
    });
    
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Cloud layer
    const cloudGeometry = new THREE.SphereGeometry(1.02, 32, 32);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/placeholder.svg'),
      transparent: true,
      opacity: 0.4,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x555555);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Rotation handling
    let isDragging = false;
    let previousMousePosition = {
      x: 0,
      y: 0
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      earth.rotation.y += deltaMove.x * 0.01;
      earth.rotation.x += deltaMove.y * 0.01;
      clouds.rotation.y += deltaMove.x * 0.01;
      clouds.rotation.x += deltaMove.y * 0.01;

      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseUp = (e: MouseEvent) => {
      isDragging = false;
    };

    // Add event listeners
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Auto rotation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (!isDragging) {
        earth.rotation.y += 0.001;
        clouds.rotation.y += 0.0012;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Cleanup on unmount
    return () => {
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      renderer.dispose();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold mb-6">Interactive Earth Globe</h3>
        <div 
          ref={globeRef} 
          className="w-[300px] h-[300px] flex items-center justify-center mb-8 cursor-grab active:cursor-grabbing"
        >
          {/* Three.js canvas will be inserted here */}
        </div>
        <p className="text-center text-muted-foreground mb-2">
          Click and drag to rotate the globe
        </p>
      </div>
    </motion.div>
  );
};

export default Education;
