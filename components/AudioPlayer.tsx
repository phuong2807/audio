"use client";

import { useRef } from "react";

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="w-full">
      <audio ref={audioRef} controls className="w-full">
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
}