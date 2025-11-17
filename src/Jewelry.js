import React from "react";
import { useGLTF } from "@react-three/drei";

/**
 * Jewelry component.
 * Loads jewelry glTF model from props.url
 */
export default function Jewelry({ url }) {
  // Use a sample jewelry model (replace url with your models for more products)
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
}
