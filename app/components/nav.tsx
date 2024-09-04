'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about me',
  },
  '/projects': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog',
  },
};

export function Navbar() {
  const pathname = usePathname(); // Get the current path
  const [underlineStyle, setUnderlineStyle] = useState({ left: '0px', width: '0px' });
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const activeLink = navRefs.current[pathname];
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px` });
    }
  }, [pathname]);

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight relative">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 relative">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                ref={(el) => (navRefs.current[path] = el)}
                className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                  pathname === path ? 'text-neutral-800 dark:text-neutral-200 font-semibold' : ''
                }`}
              >
                {name}
              </Link>
            ))}
            <span
              className="absolute bottom-0 h-[2px] bg-neutral-800 dark:bg-neutral-200 transition-all duration-300"
              style={underlineStyle}
            />
          </div>
        </nav>
      </div>
    </aside>
  );
}
