import React, { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

// Import animation JSON files
import techAnimation from "../assets/animations/tech-animation.json";
import codingAnimation from "../assets/animations/coding-animation.json";

const Globe = ({ darkMode }) => {
  const globeRef = useRef();
  const pointsRef = useRef();
  const linesRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Modified points and connections creation
  useEffect(() => {
    // Create base globe
    const globeGeometry = new THREE.SphereGeometry(2, 64, 64);

    // Create connection points
    const points = [];
    const connections = [];
    const numberOfPoints = 12; // Reduced for clearer visualization

    // Generate points at specific locations
    const locations = [
      { lat: 51.5074, lng: -0.1278 }, // London
      { lat: 40.7128, lng: -74.006 }, // New York
      { lat: 35.6762, lng: 139.6503 }, // Tokyo
      { lat: 28.6139, lng: 77.209 }, // Delhi
      { lat: -33.8688, lng: 151.2093 }, // Sydney
      { lat: 37.7749, lng: -122.4194 }, // San Francisco
      { lat: -23.5505, lng: -46.6333 }, // São Paulo
      { lat: 55.7558, lng: 37.6173 }, // Moscow
      { lat: 1.3521, lng: 103.8198 }, // Singapore
      { lat: 31.2304, lng: 121.4737 }, // Shanghai
      { lat: -26.2041, lng: 28.0473 }, // Johannesburg
      { lat: 19.4326, lng: -99.1332 }, // Mexico City
    ];

    locations.forEach(({ lat, lng }) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const radius = 2;

      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      points.push(new THREE.Vector3(x, y, z));
    });

    // Create arc connections
    const createArcPoints = (start, end, segments = 20) => {
      const points = [];
      const midPoint = start.clone().add(end).multiplyScalar(0.5);
      const distance = start.distanceTo(end);

      // Extend the midpoint outward
      midPoint.normalize().multiplyScalar(2 + distance * 0.2);

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const point = new THREE.Vector3();

        // Quadratic bezier curve
        point.x =
          Math.pow(1 - t, 2) * start.x +
          2 * (1 - t) * t * midPoint.x +
          Math.pow(t, 2) * end.x;
        point.y =
          Math.pow(1 - t, 2) * start.y +
          2 * (1 - t) * t * midPoint.y +
          Math.pow(t, 2) * end.y;
        point.z =
          Math.pow(1 - t, 2) * start.z +
          2 * (1 - t) * t * midPoint.z +
          Math.pow(t, 2) * end.z;

        points.push(point);
      }
      return points;
    };

    // Create curved connections between points
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (Math.random() > 0.7) {
          // Create fewer, more meaningful connections
          const arcPoints = createArcPoints(points[i], points[j]);
          connections.push(...arcPoints);
        }
      }
    }

    // Update points visualization
    const pointsGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const pointsMaterial = new THREE.PointsMaterial({
      color: darkMode ? "#E9D8FD" : "#9F7AEA",
      size: 0.15,
      transparent: true,
      opacity: 0.8,
    });
    pointsRef.current = new THREE.Points(pointsGeometry, pointsMaterial);

    // Update lines visualization
    const linesGeometry = new THREE.BufferGeometry().setFromPoints(connections);
    const linesMaterial = new THREE.LineBasicMaterial({
      color: darkMode ? "#E9D8FD" : "#9F7AEA",
      transparent: true,
      opacity: 0.4,
      linewidth: 1,
    });
    linesRef.current = new THREE.Line(linesGeometry, linesMaterial);

    globeRef.current.add(pointsRef.current);
    globeRef.current.add(linesRef.current);
  }, [darkMode]);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      // Base rotation
      globeRef.current.rotation.y += 0.002;

      // Interactive rotation and animation
      if (hovered) {
        const time = clock.getElapsedTime();
        globeRef.current.rotation.y += 0.005;

        if (linesRef.current) {
          linesRef.current.material.opacity = 0.6 + Math.sin(time * 2) * 0.2;
        }
        if (pointsRef.current) {
          pointsRef.current.material.size = 0.15 + Math.sin(time * 3) * 0.05;
        }
      }
    }
  });

  return (
    <group
      ref={globeRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <sphereGeometry args={[2, 40, 30]} />
        <meshPhongMaterial
          color={darkMode ? "#6B46C1" : "#4B0082"}
          wireframe
          transparent
          opacity={0.6}
          emissive={darkMode ? "#9F7AEA" : "#8A2BE2"}
          emissiveIntensity={darkMode ? 0.8 : 0.4}
        />
      </mesh>
    </group>
  );
};

// Compact Globe Animation for the third box
const CompactGlobeAnimation = ({ darkMode }) => {
  return (
    <Canvas style={{ height: "400px", width: "400px" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight
          position={[0, 0, 10]}
          angle={0.3}
          penumbra={1}
          intensity={darkMode ? 2.5 : 1.5}
          color={darkMode ? "#9976ddff" : "#6B46C1"}
        />
        <Globe darkMode={darkMode} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.3}
          maxPolarAngle={Math.PI * 0.65}
          minPolarAngle={Math.PI * 0.35}
        />
      </Suspense>
    </Canvas>
  );
};

// Update the Canvas size in GlobeAnimation
const GlobeAnimation = ({ darkMode }) => {
  return (
    <Canvas style={{ height: "500px", width: "100%" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight
          position={[0, 0, 10]}
          angle={0.3}
          penumbra={1}
          intensity={darkMode ? 2.5 : 1.5}
          color={darkMode ? "#9b73eaff" : "#b94feaff"}
        />
        <Globe darkMode={darkMode} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI * 0.65}
          minPolarAngle={Math.PI * 0.35}
        />
      </Suspense>
    </Canvas>
  );
};

const About = ({ darkMode }) => {
  const boxStyles = `p-10 rounded-xl ${
    darkMode
      ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-gradient-purple-pink"
      : "bg-white border-2 border-gray-200"
  } transition-all duration-300 hover:shadow-xl min-h-[200px]`; // Reduced min-height further

  const skillBoxStyles = `p-10 rounded-xl ${
    darkMode
      ? "bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-gradient-purple-pink"
      : "bg-white/80 border border-gray-200"
  } transition-all duration-300 hover:shadow-lg`;

  const aboutBoxData = [
    {
      text: "I enjoy working at the intersection of intelligent systems and practical software design",
      animation: "tech",
    },
    {
      text: "I'm driven by problem-solving and continuous learning",
      animation: "coding",
    },
    {
      text: "I'm flexible with global time zones and experienced in async communication",
      animation: "globe",
    },
  ];


  return (
    <section
      id="about"
      className={`py-12 ${
        darkMode ? "bg-gradient-to-r from-grey-900 to-purple-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-20 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode
              ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              : "text-gray-900"
          }`}
        >
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - About boxes with animations */}
          <div className="lg:w-1/2 space-y-4 flex flex-col items-start">
            {aboutBoxData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`${boxStyles} relative overflow-hidden`}
              >
                {/* Animation container - positioned absolutely in background */}
                <div className="absolute right-9 top-1/2 transform -translate-y-1/2 opacity-40 z-0 max-w-full sm:max-w-[640px]">
                  {item.animation === "tech" && (
                    <Lottie
                      animationData={techAnimation}
                      loop={true}
                      style={{ width: "100%", maxWidth: 640, height: "auto" }}
                    />
                  )}
                  {item.animation === "coding" && (
                    <Lottie
                      animationData={codingAnimation}
                      loop={true}
                      style={{ width: "100%", maxWidth: 590, height: "auto" }}
                    />
                  )}
                  {item.animation === "globe" && (
                    <div className="w-full sm:w-[450px] h-[220px]">
                      <CompactGlobeAnimation darkMode={darkMode} />
                    </div>
                  )}
                </div>

                {/* Text content - positioned relatively to appear above animation */}
                <div className="relative z-10 pr-16">
                  <p
                    className={`text-xl font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                    style={{
                      textShadow: darkMode
                        ? "2px 2px 4px rgba(255, 255, 255, 0.8)" // white shadow in dark mode
                        : "2px 2px 4px rgba(128, 90, 213, 0.8)", // purple-500 in light mode
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - What I Do */}
          <div className="lg:w-1/2 space-y-4 flex flex-col items-start">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-purple-300" : "text-purple-700"
              }`}
            >
              What I Do
            </motion.h3>

            {[
              {
                title: "AI & ML Engineering",
                desc: "Creating responsive and interactive user Designing deep learning pipelines and intelligent systems",
              },
              {
                title: "Frontend & Backend Development",
                desc: "Building responsive UIs and scalable backend logic using React, Node.js, and Express",
              },
              {
                title: "Data Engineering & Analysis",
                desc: "Performing preprocessing, feature engineering, and data visualization to support robust model training",
              },
              {
                title: "Model Evaluation & XAI",
                desc: "Implementing advanced evaluation metrics, explainable AI, and visual tools for actionable insights",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={skillBoxStyles}
              >
                <h4
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
