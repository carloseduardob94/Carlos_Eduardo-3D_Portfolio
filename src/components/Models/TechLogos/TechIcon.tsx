import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from 'three';

interface TechIconProps {
  model: {
    name: string;
    modelPath: string;
    scale: number;
    rotation: number[]
  }
}

const TechIcon = ({ model }: TechIconProps) => {
  const scene = useGLTF(model.modelPath)

  useEffect(() => {
    // if (model.name === 'Interactive Developer') {
    //   scene.scene.traverse((child) => {
    //     if (child instanceof THREE.Mesh && child.name === 'Object_5') {
    //       child.material = new THREE.MeshStandardMaterial({ color: 'white' })
    //     }
    //   })
    // }

    if (model.name === "Next.js Developer") {
      scene.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: '#1a1a1a',         // Cinza quase preto
            roughness: 0.4,
            metalness: 0.8,
          })
        }
      })
    }

    if (model.name === "TailwindCSS") {
      scene.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: '#229de5', // Média entre #06b6d4 (cyan) e #3b82f6 (blue)
            roughness: 0.3,
            metalness: 0.6,
          });
        }
      })
    }
  }, [])
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="city" />

        <OrbitControls enableZoom={false} />
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          <group
            scale={model.scale}
            rotation={model.rotation as [number, number, number]}
            position={
              model.name === 'Next.js Developer' ? [-1.5, 1, 0] :
                model.name === 'TailwindCSS' ? [-1, 1, 1] :
                  [0, 0, 0]
            }
          >
            <primitive object={scene.scene} />
          </group>
        </Float>
      </Canvas>
    </div>
  )
}

export default TechIcon;