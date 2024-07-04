"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Intro from "@/components/HomeIntro";
 
export default function Home() {
  return (
    <div className="minh-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-0 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        温州肯恩大学科技科研协会
        </h1>
        <p></p>
        
        <Intro />
      </div>
      <BackgroundBeams />
    </div>
  );
}