import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/constants/Nav';

const NavMenuList = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 mx-auto text-sm font-bold tracking-widest ">
      {navItems.map(({ name, href }) => (
        <Link
          key={href}
          href={href}
          className={`hover:text-[#D87D4A] transition uppercase ${
            pathname === href ? "text-[#D87D4A]" : "text-white"
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default NavMenuList