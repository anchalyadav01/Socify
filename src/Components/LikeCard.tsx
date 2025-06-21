interface LikeCardProps {
  name: string;
  bio: string;
  age: number;
  gender: string;
  orientation: string;
  image: string;
}

export default function LikeCard({
  name,
  bio,
  age,
  gender,
  orientation,
  image,
}: LikeCardProps) {
  return (
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
      <img
        src={`/images/${image}`}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 space-y-1">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-400 italic">{bio}</p>
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
          <span>🎂 {age}</span>
          <span>👩 {gender}</span>
          <span>🏳️‍🌈 {orientation}</span>
        </div>
      </div>
    </div>
  );
}