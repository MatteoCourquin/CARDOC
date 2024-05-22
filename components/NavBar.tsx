import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cloneElement, useEffect, useState } from 'react';
import {
  IconArrowFolder,
  IconBike,
  IconCar,
  IconDashboard,
  IconLogout,
  IconProfil,
  IconSettings,
  IconSteeringWheel,
} from './Icons';

const NavBar = () => {
  const navItems = [
    {
      icon: <IconDashboard isActive={false} />,
      title: 'Dashboard',
      link: '/',
    },
    {
      icon: <IconSteeringWheel isActive={false} />,
      title: 'Véhicules',
      link: '/vehicles',
    },
    {
      icon: <IconCar isActive={false} />,
      title: 'CLIO 4',
      link: '/vehicles/1',
    },
    {
      icon: <IconCar isActive={false} />,
      title: '308',
      link: '/vehicles/2',
    },
    {
      icon: <IconBike isActive={false} />,
      title: 'Tracer 700',
      link: '/vehicles/3',
    },
    {
      icon: <IconCar isActive={false} />,
      title: 'C3',
      link: '/vehicles/4',
    },
    {
      icon: <IconBike isActive={false} />,
      title: 'CB 500 F',
      link: '/vehicles/5',
    },
    {
      icon: <IconProfil isActive={false} />,
      title: 'Profil',
      link: '/profile',
    },
    {
      icon: <IconSettings isActive={false} />,
      title: 'Réglages',
      link: '/settings',
    },
  ];

  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    setActiveLink(pathname !== '/logout' ? pathname : null);
  }, [pathname]);

  return (
    <div className="flex h-full w-80 flex-col justify-between py-8">
      <div className="flex flex-col items-center gap-6">
        <Link onClick={() => setActiveLink('/')} href="/">
          CarDoc
        </Link>
        <ul className="relative w-full">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={clsx(
                'relative z-10 px-2',
                item.link.includes('/vehicles/') ? 'pl-3' : 'pr-2',
              )}
              onClick={() => setActiveLink(item.link)}
            >
              <Link
                className={clsx(
                  'group flex h-12 items-center gap-2 px-6 transition-colors',
                  activeLink === item.link ? 'text-white' : 'hover:text-blue-500',
                )}
                href={item.link}
              >
                {item.link.includes('/vehicles/') && <IconArrowFolder />}
                {cloneElement(item.icon, { isActive: activeLink === item.link })}
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</p>
              </Link>
            </li>
          ))}
          <div
            className={clsx(
              'absolute left-0 top-0 z-0 h-12 w-full px-2 transition-all duration-300',
            )}
            style={{
              transform: `translateY(${navItems.findIndex((item) => item.link === pathname) * 3}rem)`,
            }}
          >
            <div
              className={clsx(
                'h-full w-full rounded-xl bg-blue-500 transition-transform duration-300',
                activeLink === null ? 'scale-0' : 'scale-100',
              )}
            ></div>
          </div>
        </ul>
      </div>
      <Link
        className={clsx('group flex items-center justify-center transition-colors')}
        onClick={() => setActiveLink(null)}
        href="/logout"
      >
        <IconLogout />
      </Link>
    </div>
  );
};

export default NavBar;
