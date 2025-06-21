import LikeCard from "@/Components/LikeCard";
import { dummyLikes } from "@/data/dummyLikes";

export default function LikesPage() {
  return (
    <div className="p-6 min-h-screen bg-[#0e0b1a]">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        People Who Like You
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyLikes.map((user, index) => (
          <LikeCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
}