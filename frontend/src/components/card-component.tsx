import React from "react";

interface CardComponentProps {
  id: number;
  name: string;
  email: string;
}

const CardComponent = ({ id, name, email }: CardComponentProps) => {
  return (
    <div className="w-[400px] border p-5 rounded-lg shadow-lg bg-white h-40">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="bg-gray-300 rounded-sm w-fit text-xs px-3 py-1">{id}</p>
    </div>
  );
};

export default CardComponent;
