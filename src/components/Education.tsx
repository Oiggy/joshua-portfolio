
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
    renderer.setSize(500, 500); // Increase size from 300x300 to 500x500
    renderer.setClearColor(0x000000, 0);

    // Clear any existing canvas
    if (globeRef.current.firstChild) {
      globeRef.current.removeChild(globeRef.current.firstChild);
    }
    globeRef.current.appendChild(renderer.domElement);

    // Load Earth textures
    const textureLoader = new THREE.TextureLoader();
    
    // Earth creation with real texture
    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg');
    const earthBumpMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg');
    const earthSpecMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg');
    
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: earthBumpMap,
      bumpScale: 0.05,
      specularMap: earthSpecMap,
      specular: new THREE.Color('grey'),
      shininess: 10
    });
    
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Cloud layer
    const cloudGeometry = new THREE.SphereGeometry(1.02, 64, 64);
    const cloudTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png');
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.3
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0x555555);
    scene.add(ambientLight);

    // Add directional lighting to simulate sun
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
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
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

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;

      const deltaMove = {
        x: e.touches[0].clientX - previousMousePosition.x,
        y: e.touches[0].clientY - previousMousePosition.y
      };

      earth.rotation.y += deltaMove.x * 0.01;
      earth.rotation.x += deltaMove.y * 0.01;
      clouds.rotation.y += deltaMove.x * 0.01;
      clouds.rotation.x += deltaMove.y * 0.01;

      previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      isDragging = false;
    };

    // Add event listeners
    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add touch events
    domElement.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    // Auto rotation animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (!isDragging) {
        earth.rotation.y += 0.001;
        clouds.rotation.y += 0.0012;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      const size = Math.min(globeRef.current?.clientWidth || 500, 500); // Update resize logic for larger globe
      renderer.setSize(size, size);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup on unmount
    return () => {
      domElement.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      domElement.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      
      window.removeEventListener('resize', handleResize);
      
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
        <div 
          ref={globeRef} 
          className="w-[500px] h-[500px] flex items-center justify-center mb-8 cursor-grab active:cursor-grabbing"
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
