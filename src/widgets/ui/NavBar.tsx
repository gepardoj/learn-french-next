"use client";
import { ButtonIcon } from '@/shared/ui/ButtonIcon';
import AccountIcon from '@/shared/ui/icons/AccountIcon';
import EiffelTowerIcon from '@/shared/ui/icons/EiffelTowerIcon';
import OptionsIcon from '@/shared/ui/icons/OptionsIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const links = [
    { href: "/", icon: EiffelTowerIcon, label: "Learn French" },
    { href: "/profile", icon: AccountIcon, label: "My Profile" },
    { href: "/options", icon: OptionsIcon, label: "Options" },
  ];
  return (
    <nav className="mt-auto">
      <ul className='flex gap-5 justify-center'>
        {links.map(link =>
          <li key={link.href}><Link href={link.href}><ButtonIcon Icon={link.icon} size="large" alt={link.label} type={pathname === link.href ? "primary" : "default"} /></Link></li>
        )}
      </ul>
    </nav>
  );
}
