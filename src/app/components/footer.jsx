import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 sticky bottom-0 w-full">
      <div className="container mx-auto">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>Contact us at: contact@yourcompany.com</p>
      </div>
    </footer>
  );
};

export default Footer;
