"use client";

import { Home_page, SanityImageAsset } from "../../../sanity.types";

import { Canvas } from "@react-three/fiber";
import Model from "./model";
import React from "react";

interface SceneProps {
  activeMenu: number | null;
  images?: NonNullable<
    NonNullable<NonNullable<Home_page["services"]>["items"]>
  >[0]["image"][];
}
export default function Scene({ activeMenu, images }: SceneProps) {
  return (
    <div className="fixed top-0 h-screen w-full">
      <Canvas>
        {images && <Model activeMenu={activeMenu} images={images} />}
      </Canvas>
    </div>
  );
}
