import { NavLink } from "./NavLink";

const links = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  return (
    <nav className="border-glass-border bg-card/75 shadow-2 rounded-t-card lg:rounded-tr-card lg:rounded-bl-card fixed bottom-0 left-0 z-20 mx-3 mb-0 w-[calc(100%-1.5rem)] border backdrop-blur-md lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:m-0 lg:w-max lg:rounded-none lg:px-5 lg:shadow-none">
      <ul className="flex flex-wrap items-center justify-center gap-3 px-2.5 xs:gap-4 sm:gap-5 lg:gap-7 lg:px-5">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink href={link.path} name={link.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
