import { Link } from "react-router-dom";

type NavigationLinks = {
  label: string
  path: string
  links?: Array<{
    label: string
    path: string
  }>
}

const navigationLinks: Array<NavigationLinks> = [
  { label: 'Posts', path: '/' },
  { label: 'Login', path: '/auth/login' },
]

export const Nav = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <nav className="flex items-center gap-x-3.5">
        {navigationLinks.map(({ label, path }) => <Link to={path}>{label}</Link>)}
      </nav>

      <div>
        <Link to="/">Hosein Soleymani</Link>
      </div>
    </header>
  );
};