// src/components/LikeCard.tsx
"use client";
import { FaBirthdayCake, FaHeart, FaSearch, FaUserFriends } from "react-icons/fa";

interface LikeCardProps {
  name: string;
  age: number;
  gender: string;
  orientation: string;
  bio: string;
  image: string;
}

export default function LikeCard({ name, age, gender, orientation, bio, image }: LikeCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4 space-y-1">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{bio}</p>
        <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
          <FaBirthdayCake /> {age}
          <span className="text-pink-600">{gender}</span>
          <span>{orientation}</span>
        </div>
      </div>
    </div>
  );
}
