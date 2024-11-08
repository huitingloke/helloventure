'use client';
import Link from 'next/link';
import { FiSettings } from 'react-icons/fi';

export default function SettingsIcon() {
  return (
    <Link href="/profile/settings" className="hover:text-gray-300 transition-colors">
      <FiSettings className="w-6 h-6" />
    </Link>
  );
}
