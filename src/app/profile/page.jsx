import React from 'react';
import Link from 'next/link';

const pastMessages = [
    { id: 1, text: 'This is the first message.' },
    { id: 2, text: 'Another message here.' },
    { id: 3, text: 'A third message to showcase scrolling.' },
    // Add more messages as needed
  ];
  
  // Assuming you have a Message component
  const Message = ({ id, text }) => (
    <div key={id} className="border p-4 mb-4">
      {text}
    </div>
  );

const Profile = () => {
  // Assuming you have the paths to your images on a local server
  const headPhotoUrl = '/雨中女郎 2.webp';
  const backgroundImageUrl = '/mtwitter-logos_white.png';
//http://localhost:3001/path/to/background/image.jpg
//雨中女郎 2.webp
//'http://localhost:3001/path/to/head/photo.jpg'
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>

      {/* Profile Header */}
      <div className="relative flex flex-col items-center justify-end h-1/2">
        <img
          src={headPhotoUrl}
          alt="Head Photo"
          className="w-20 h-20 rounded-full border-4 border-white mb-4"
        />
        <h2 className="text-3xl text-white">Your Name</h2>
        <p className="text-white">Your Bio or Description</p>
      </div>

      {/* Scrollable Messages Section in Lower Half */}
      <div className="absolute top-1/2 left-0 right-0 bg-white p-4 overflow-y-auto h-1/2">
        <h3 className="text-2xl mb-4">Past Messages</h3>
        {/* Map through past messages and render Message components */}
        {pastMessages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </div>

      {/* Complaint/Report Button */}
      <div className="fixed bottom-4 right-4">
        <Link href="/complaint">
          <p className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Report
          </p>
        </Link>
      </div>

      {/* Navigation Link */}
      <div className="absolute top-4 left-4">
        <p className="text-green">
          Back to <Link href="/">Home</Link>
        </p>
      </div>
    </section>
  );
};

export default Profile;
