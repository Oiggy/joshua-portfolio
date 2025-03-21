
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const FileDrawer3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = 400; // Fixed height

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 3, 5);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 2;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Materials
    const cabinetMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xf59e0b, // amber-500 color
      roughness: 0.7,
      metalness: 0.1
    });
    
    const drawerMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xd97706, // amber-600 color
      roughness: 0.7,
      metalness: 0.1
    });

    const handleMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xfcd34d, // amber-300 color
      roughness: 0.4,
      metalness: 0.3
    });

    const labelMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      roughness: 0.4,
      metalness: 0.1
    });

    const drawerInsideMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x92400e, // amber-800 color
      roughness: 0.9,
      metalness: 0
    });
    
    // Cabinet Body (top view orthogonal perspective)
    const cabinetGeometry = new THREE.BoxGeometry(3, 0.8, 2);
    const cabinet = new THREE.Mesh(cabinetGeometry, cabinetMaterial);
    cabinet.position.set(0, 0, 0);
    cabinet.castShadow = true;
    cabinet.receiveShadow = true;
    scene.add(cabinet);

    // Create drawer slots
    const createDrawerSlot = (yPosition: number) => {
      const slotGeometry = new THREE.BoxGeometry(2.9, 0.25, 1.9);
      const slot = new THREE.Mesh(slotGeometry, drawerInsideMaterial);
      slot.position.set(0, yPosition, 0);
      cabinet.add(slot);
    };

    // Add three drawer slots
    createDrawerSlot(0.25);
    createDrawerSlot(0);
    createDrawerSlot(-0.25);

    // Create a closed drawer
    const createClosedDrawer = (yPosition: number, label: string) => {
      const drawerGroup = new THREE.Group();
      
      // Drawer body
      const drawerGeometry = new THREE.BoxGeometry(2.8, 0.2, 1.8);
      const drawer = new THREE.Mesh(drawerGeometry, drawerMaterial);
      drawer.castShadow = true;
      drawer.receiveShadow = true;
      drawerGroup.add(drawer);
      
      // Drawer handle
      const handleGeometry = new THREE.BoxGeometry(0.8, 0.05, 0.1);
      const handle = new THREE.Mesh(handleGeometry, handleMaterial);
      handle.position.set(0, 0.1, 0.95);
      drawerGroup.add(handle);
      
      // Drawer label
      const labelGeometry = new THREE.BoxGeometry(1, 0.2, 0.01);
      const drawerLabel = new THREE.Mesh(labelGeometry, labelMaterial);
      drawerLabel.position.set(0, 0.15, 0.91);
      drawerGroup.add(drawerLabel);
      
      drawerGroup.position.set(0, yPosition, 0);
      scene.add(drawerGroup);
      
      return drawerGroup;
    };

    // Create an open drawer
    const createOpenDrawer = (yPosition: number, label: string) => {
      const drawerGroup = new THREE.Group();
      
      // Drawer body
      const drawerGeometry = new THREE.BoxGeometry(2.8, 0.2, 1.8);
      const drawer = new THREE.Mesh(drawerGeometry, drawerMaterial);
      drawer.castShadow = true;
      drawer.receiveShadow = true;
      
      // Drawer handle
      const handleGeometry = new THREE.BoxGeometry(0.8, 0.05, 0.1);
      const handle = new THREE.Mesh(handleGeometry, handleMaterial);
      handle.position.set(0, 0.1, 0.95);
      drawer.add(handle);
      
      // Drawer label
      const labelGeometry = new THREE.BoxGeometry(1, 0.2, 0.01);
      const drawerLabel = new THREE.Mesh(labelGeometry, labelMaterial);
      drawerLabel.position.set(0, 0.15, 0.91);
      drawer.add(drawerLabel);
      
      // Position the drawer pulled out
      drawer.position.set(0, 0, 1.5);
      drawerGroup.add(drawer);
      
      // Create drawer interior (the slot that's visible when drawer is open)
      const interiorGeometry = new THREE.BoxGeometry(2.85, 0.3, 2);
      const interior = new THREE.Mesh(interiorGeometry, drawerInsideMaterial);
      interior.position.set(0, -0.05, 0);
      drawerGroup.add(interior);
      
      drawerGroup.position.set(0, yPosition, 0);
      scene.add(drawerGroup);
      
      return drawerGroup;
    };

    // Add two closed drawers
    const topDrawer = createClosedDrawer(0.25, "CERTIFICATES");
    const middleDrawer = createClosedDrawer(0, "ACHIEVEMENTS");
    
    // Add one open drawer
    const bottomDrawer = createOpenDrawer(-0.25, "PROJECTS");

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4">
      <div 
        ref={containerRef} 
        className="w-full max-w-md mx-auto h-[400px] bg-background/50 rounded-lg shadow-md"
      />
    </section>
  );
};

export default FileDrawer3D;
