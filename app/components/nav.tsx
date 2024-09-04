'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;

              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                    isActive ? 'text-neutral-800 dark:text-neutral-200 font-semibold' : ''
                  }`}
                >
                  {name}
                  {isActive && (
                    <span
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-neutral-800 dark:bg-neutral-200"
                      style={{ transform: 'translateY(3px)' }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
