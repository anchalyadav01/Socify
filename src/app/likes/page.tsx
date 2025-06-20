import LikeCard from "../../components/LikeCard";
import { dummyLikes } from "../../data/dummyLikes";

export default function LikesPage() {
  return (
    <div className="mt-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">People Who Like You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyLikes.map((like, index) => (
          <LikeCard key={index} {...like} />
        ))}
      </div>
    </div>
  );
}