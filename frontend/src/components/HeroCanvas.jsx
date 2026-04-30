import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, MeshDistortMaterial, OrbitControls, Sparkles } from '@react-three/drei';

const CameraRig = () => {
  const rig = useRef();

  useFrame(({ mouse, camera }) => {
    if (!rig.current) return;

    rig.current.rotation.y += (mouse.x * 0.2 - rig.current.rotation.y) * 0.05;
    rig.current.rotation.x += (-mouse.y * 0.15 - rig.current.rotation.x) * 0.05;

    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.06;
    camera.position.y += (mouse.y * 0.3 + 1 - camera.position.y) * 0.06;

    camera.lookAt(0, 0.5, 0);
  });

  return <group ref={rig} />;
};

const FloatingSphere = () => {
  const mesh = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += delta * 0.24;
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.18;
  });

  return (
    <Float floatIntensity={1.5} speed={1.2} rotationIntensity={0.4}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1.5, 128, 128]} />
        <MeshDistortMaterial
          color={hovered ? '#7c5cff' : '#00d4ff'}
          distort={hovered ? 0.72 : 0.45}
          speed={2.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const HeroCanvas = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.2, 6], fov: 32 }}
      className="w-full h-full"
    >
      {/* ❌ REMOVE BLACK BACKGROUND */}
      {/* <color attach="background" args={['#02020a']} /> */}

      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 5]} intensity={1.2} color="#00d4ff" />
      <pointLight position={[-5, 1.5, -3]} intensity={0.8} color="#8b5cf6" />
      <directionalLight position={[0, 5, -5]} intensity={1} color="#ffffff" />

      <Suspense fallback={null}>
        <FloatingSphere />
        <Sparkles count={52} scale={7} size={1.4} speed={0.35} color="#7c5cff" />
        <ContactShadows position={[0, -1.4, 0]} opacity={0.6} width={12} blur={2.5} far={2.5} />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.15} />
      <CameraRig />
    </Canvas>
  </div>
);

export default HeroCanvas;