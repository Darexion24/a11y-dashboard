'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Settings, User } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Profile', icon: User, href: '/profile' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <aside className="w-64 h-screen border-r border-[var(--border-color)] hidden md:block">
      <nav aria-label="Main Navigation" className="p-4 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={`
                flex items-center gap-3 p-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600
                ${isActive 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 high-contrast:bg-white high-contrast:text-black font-semibold' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 high-contrast:hover:bg-white high-contrast:hover:text-black font-medium'
                }
              `}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}