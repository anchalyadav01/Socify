// src/app/likes/page.tsx
import LikeCard from "@/components/LikeCard";
import { dummyLikes } from "@/data/dummyLikes";

export default function LikesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">People Who Likes You</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyLikes.map((profile, index) => (
          <LikeCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
}
