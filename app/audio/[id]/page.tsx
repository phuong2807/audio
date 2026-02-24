"use client";

import { useParams, useRouter } from "next/navigation";
import { audioList } from "@/data/audio-data";

export default function AudioDetail() {
  const { id } = useParams();
  const router = useRouter();

  const audioItem = audioList.find((item) => item.id === Number(id));

  if (!audioItem) {
    return <div>Không tìm thấy audio</div>;
  }

  return (
    <main
      className="min-h-screen  bg-no-repeat
    bg-center
    bg-contain
    md:bg-cover text-white flex flex-col justify-between"
      style={{ backgroundImage: `url(${audioItem.background})` }}
    >
      <div className="p-4">
        <button
          onClick={() => router.push("/")}
          className="mb-4 bg-black/40 px-4 py-2 rounded cursor-pointer"
        >
          ← Quay lại
        </button>

        <h1 className="text-2xl font-bold mb-2">{audioItem.title}</h1>

        <p className="text-sm opacity-90">{audioItem.description}</p>
      </div>

      <div className="p-4 bg-black/50">
        <audio controls autoPlay className="w-full">
          <source src={audioItem.src} type="audio/mpeg" />
        </audio>
      </div>
    </main>
  );
}
