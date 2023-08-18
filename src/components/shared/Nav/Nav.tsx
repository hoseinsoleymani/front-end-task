import { Authentication } from "@/components/Auth/Authentication";
import { Link } from "react-router-dom";
import { SearchBox } from "..";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

type NavigationLinks = {
  label: string
  path: string
  links?: Array<{
    label: string
    path: string
  }>
}

const navigationLinks: Array<NavigationLinks> = [
  { label: 'Tasks', path: '/' },
  { label: 'Create Task', path: '/create-task' },
]

export const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex items-center justify-between py-7">
      <nav className={`flex-col transition-all flex gap-y-3.5 fixed bg-white bottom-0 top-0 w-64 z-10 px-7 py-7 shadow-md md:shadow-none md:gap-x-3.5 md:w-auto md:flex-row md:bg-transparent md:static md:flex md:items-center md:justify-between md:py-6 md:px-0 ${showSidebar ? 'left-0' : '-left-64'}`}>
        {navigationLinks.map(({ label, path }) => <Link key={path} to={path}>{label}</Link>)}

        <div className="block md:hidden">
          <Authentication />
        </div>
      </nav>

      <SearchBox />

      <div className="hidden md:block">
        <Authentication />
      </div>

      <button onClick={() => {
        setShowSidebar(prev => !prev)
      }} className="block md:hidden">
        <Bars3Icon className="w-10" />
      </button>
    </div>
  );
};
