import React from 'react';

const UserCard = ({ userData }) => {
  return (
    <div className="w-1/2 p-4 bg-white rounded-lg shadow-md my-2">
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-lg text-black font-semibold">{userData.name}</h3>
        <p className="text-gray-600">Subscribers: {userData.followers}</p>
      </div>
    </div>
  );
};

export default UserCard;
