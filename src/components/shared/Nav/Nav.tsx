import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Authentication } from '@/components/Auth/Authentication';

interface NavigationLinks {
  label: string;
  path: string;
  links?: {
    label: string;
    path: string;
  }[];
}

const navigationLinks: NavigationLinks[] = [
  { label: 'Tasks', path: '/' },
  { label: 'Create Task', path: '/create-task' },
];

export const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex items-center justify-between py-7">
      <nav
        className={`fixed inset-y-0 z-10 flex w-64 flex-col gap-y-3.5 bg-white p-7 transition-all md:static md:flex md:w-auto md:flex-row md:items-center md:justify-between md:gap-x-3.5 md:bg-transparent md:px-0 md:py-6 md:shadow-none${
          showSidebar ? 'left-0' : '-left-64'
        }`}
      >
        {navigationLinks.map(({ label, path }) => (
          <Link key={path} to={path}>
            {label}
          </Link>
        ))}

        <div className="block md:hidden">
          <Authentication />
        </div>
      </nav>

      <div className="hidden md:block">
        <Authentication />
      </div>

      <button
        onClick={() => {
          setShowSidebar((prev) => !prev);
        }}
        className="block md:hidden"
      >
        <Bars3Icon className="w-10" />
      </button>
    </div>
  );
};
