"use client";
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

const ProfileIcon = () => {
  return (
    <Link href="/profile/user" className="hover:opacity-80 transition-opacity">
      <FaUserCircle className="w-8 h-8 text-gray-600" />
    </Link>
  );
};

export default ProfileIcon;
