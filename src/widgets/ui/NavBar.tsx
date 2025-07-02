"use client";
import { quizModel } from '@/features/quiz/model/QuizModel';
import { ButtonIcon } from '@/shared/ui/ButtonIcon';
import AccountIcon from '@/shared/ui/icons/AccountIcon';
import EiffelTowerIcon from '@/shared/ui/icons/EiffelTowerIcon';
import OptionsIcon from '@/shared/ui/icons/OptionsIcon';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = observer(() => {
  const pathname = usePathname();
  const links = [
    { href: "/", icon: EiffelTowerIcon, label: "Learn French" },
    { href: "/profile", icon: AccountIcon, label: "My Profile" },
    { href: "/options", icon: OptionsIcon, label: "Options" },
  ];
  if (quizModel.state !== "home") return null;
  return (
    <nav className="mt-auto">
      <ul className='flex gap-5 justify-center'>
        {links.map(link =>
          <li key={link.href}><Link href={link.href}><ButtonIcon Icon={link.icon} size="large" alt={link.label} variant={pathname === link.href ? "primary" : "default"} /></Link></li>
        )}
      </ul>
    </nav>
  );
});

export default NavBar;