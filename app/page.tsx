"use client";

import { useRouter } from "next/navigation";
import { audioList } from "@/data/audio-data";

export default function Home() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen  bg-no-repeat
    bg-center
    bg-contain
    md:bg-cover flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
    >
      <div className="w-full max-w-md space-y-4">
        {audioList.map((item) => (
          <button
            key={item.id}
            onClick={() => router.push(`/audio/${item.id}`)}
            className="
              bg-[#b4823f]/90
              p-4
              text-white
              rounded-lg
              flex
              items-center
              gap-4
              w-full
              text-left
              hover:bg-[#c9964a]
              transition
              duration-200
              shadow-md
              cursor-pointer
            "
          >
            {/* Icon play */}
            <div className=" p-2 rounded-full">▶</div>

            {/* Title */}
            <p className="text-sm font-light line-clamp-1">{item.title}</p>
          </button>
        ))}
      </div>
    </main>
  );
}
