'use client';
 
import {
  CalendarDaysIcon,
  UserCircleIcon,
  FireIcon,
  RssIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
const links = [
  { name: 'Profile', href: '/dashboard', icon: UserCircleIcon },
  { name: 'Workouts', href: '/dashboard/workouts', icon: FireIcon },
  { name: 'Schedule', href: '/dashboard/schedule', icon: CalendarDaysIcon },
  { name: 'Activity', href: '/dashboard/activity', icon: RssIcon },
];
 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}