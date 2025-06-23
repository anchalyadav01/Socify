import { FaBirthdayCake } from 'react-icons/fa';
import { Magnet } from 'lucide-react';

interface LikeCardProps {
  name: string;
  bio: string;
  age: number;
  orientation: string;
  image: string;
}

export default function LikeCard({
  name,
  bio,
  age,
  orientation,
  image,
}: LikeCardProps) {
  return (
    <div className="bg-[#0f172a] text-white rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300">
      
      <div className="p-4 space-y-1 min-h-[140px]">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-400 italic">{bio}</p>
        <hr className="my-2 border-gray-600" />
        <div className="flex gap-20 text-sm text-gray-400 items-center">
          <span className="flex items-center gap-1">
            <FaBirthdayCake /> {age}
          </span>
          <span className="flex items-center gap-1">
            <Magnet className="w-4 h-4" /> {orientation}
          </span>
        </div>
      </div>

      <div className="w-full h-64">
        <img
          src={`/images/${image}`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
