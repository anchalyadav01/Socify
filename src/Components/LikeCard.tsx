// src/app/likes/page.tsx
import LikeCard from "@/components/LikeCard";
import { dummyLikes } from "@/data/dummyLikes";

export default function LikesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">People Who Like You</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {dummyLikes.map((profile, index) => (
          <LikeCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
}