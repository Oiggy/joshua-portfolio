
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const FileDrawer3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const drawerRef = useRef<THREE.Group | null>(null);

  // Initialize the 3D scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);
    sceneRef.current = scene;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    
    // Get container dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Setup orthographic camera for top view
    const aspectRatio = width / height;
    const viewSize = 10;
    const camera = new THREE.OrthographicCamera(
      -viewSize * aspectRatio, viewSize * aspectRatio, 
      viewSize, -viewSize, 0.1, 1000
    );
    camera.position.set(5, 10, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    cameraRef.current = camera;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light (like sunshine)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    // Create the file drawer
    createFileDrawer();

    // Create controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.update();
    controlsRef.current = controls;

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const aspectRatio = width / height;
      
      if (cameraRef.current) {
        cameraRef.current.left = -viewSize * aspectRatio;
        cameraRef.current.right = viewSize * aspectRatio;
        cameraRef.current.top = viewSize;
        cameraRef.current.bottom = -viewSize;
        cameraRef.current.updateProjectionMatrix();
      }
      
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Cleanup function
    return () => {
      if (containerRef.current && rendererRef.current) {
        if (rendererRef.current.domElement.parentNode) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }
      window.removeEventListener('resize', handleResize);
      rendererRef.current?.dispose();
      controlsRef.current?.dispose();
    };
  }, []);

  // Function to create the file drawer
  const createFileDrawer = () => {
    if (!sceneRef.current) return;
    
    // Create a group for the drawer
    const drawerGroup = new THREE.Group();
    sceneRef.current.add(drawerGroup);
    drawerRef.current = drawerGroup;
    
    // Get the color from the hero text (amber-500)
    const drawerColor = 0xf59e0b; // Amber-500 color
    
    // Create the main drawer body
    const drawerWidth = 7;
    const drawerHeight = 1.5;
    const drawerDepth = 4;
    
    const drawerGeometry = new THREE.BoxGeometry(drawerWidth, drawerHeight, drawerDepth);
    const drawerMaterial = new THREE.MeshStandardMaterial({ 
      color: drawerColor, 
      metalness: 0.3,
      roughness: 0.7 
    });
    const drawerMesh = new THREE.Mesh(drawerGeometry, drawerMaterial);
    drawerMesh.position.y = drawerHeight / 2;
    drawerMesh.castShadow = true;
    drawerMesh.receiveShadow = true;
    drawerGroup.add(drawerMesh);
    
    // Create drawer handle
    const handleWidth = 4;
    const handleHeight = 0.3;
    const handleDepth = 0.3;
    const handleGeometry = new THREE.BoxGeometry(handleWidth, handleHeight, handleDepth);
    const handleMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xd1d5db, // Light gray color for handle
      metalness: 0.7,
      roughness: 0.3
    });
    const handleMesh = new THREE.Mesh(handleGeometry, handleMaterial);
    handleMesh.position.set(0, drawerHeight - 0.5, drawerDepth / 2 + handleDepth / 2);
    handleMesh.castShadow = true;
    drawerGroup.add(handleMesh);
    
    // Create drawer inner part (slightly recessed)
    const innerWidth = drawerWidth - 0.3;
    const innerHeight = drawerHeight - 0.3;
    const innerDepth = drawerDepth - 0.3;
    const innerGeometry = new THREE.BoxGeometry(innerWidth, innerHeight, innerDepth);
    const innerMaterial = new THREE.MeshStandardMaterial({ 
      color: new THREE.Color(drawerColor).multiplyScalar(0.9), 
      metalness: 0.1,
      roughness: 0.9
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    innerMesh.position.set(0, drawerHeight / 2, 0);
    drawerGroup.add(innerMesh);
    
    // Add a shadow plane under the drawer
    const shadowPlaneGeometry = new THREE.PlaneGeometry(15, 15);
    const shadowPlaneMaterial = new THREE.ShadowMaterial({ opacity: 0.2 });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeometry, shadowPlaneMaterial);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.01;
    shadowPlane.receiveShadow = true;
    sceneRef.current.add(shadowPlane);
    
    // Position the drawer group
    drawerGroup.position.y = 0.05; // Slightly above the ground
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] bg-background" ref={containerRef}></div>
  );
};

export default FileDrawer3D;
