import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="border fixed w-full top-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between bg-black">
        <div className="flex items-center">
          <Image src="/mtwitter-logos_white.png" alt="Logo" width={120} height={120} />
          <Link href="/home" passHref>
            <span className="text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</span>
          </Link>
          <Link href="/profile" passHref>
            <span className="text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Profile</span>
          </Link>
          <Link href="/logout" passHref>
            <span className="text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Logout</span>
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md text-sm"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
