import React from 'react';

const Message = ({ messageData }) => {
  const checkTabooWords = (content) => {
    // Implement taboo word check logic here
    return content;
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md mb-6 ">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{messageData.author}</h3>
        <span className="text-sm text-gray-600">{messageData.date}</span>
      </div>
      <p className="text-gray-800 mt-2">{checkTabooWords(messageData.content)}</p>
      <div className="mt-3 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:text-blue-800">Like</button>
          <button className="text-red-600 hover:text-red-800">Dislike</button>
          <button className="text-green-600 hover:text-green-800">Comment</button>
        </div>
        <div className="text-sm text-gray-600">
          Read: {messageData.readCount} times
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div>
          {messageData.keywords?.slice(0, 3).map((keyword, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{keyword}
            </span>
          )) ||<span>No keywords</span>}
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-blue-600">{messageData.likes}</span>
          <span className="text-red-600">{messageData.dislikes}</span>
        </div>
      </div>
      {/* Conditional rendering for super-user actions */}
      {/* Add more features as per requirements */}
    </div>
  );
};

export default Message;
