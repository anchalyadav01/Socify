import LikeCard from "@/Components/LikeCard";
import { dummyLikes } from "@/data/dummyLikes";

export default function LikesPage() {
  return (
    <div className="p-6 min-h-screen bg-[#0e0b1a]">
      <div className="w-[60%] mx-auto">
        <h1 className="text-lg md:text-xl font-normal text-center text-white mb-4 tracking-normal">
          People Who Like You
        </h1>

        <hr className="border-t-2 border-[#ffffff33] mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyLikes.map((user, index) => (
            <LikeCard key={index} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
}
