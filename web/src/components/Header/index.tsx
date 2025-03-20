import React from "react";
import "./Header.css";
import githubIcon from "/src/assets/github.svg";

interface LinkProps {
  label: string;
  href: string;
  className?: string;
  icon?: string;
};

const links: LinkProps[] = [
  { label: "Why", href: "#why" },
  { label: "How It Works", href: "#" },
  { label: "Products", href: "##" },
  { label: "", href: "https://github.com/marcoscannabrava/aibits", icon: githubIcon }
];

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">

        <ul>
          {links.slice(0, 3).map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="menu">
                {label}
              </a>
            </li>
          ))}
        </ul>

      </nav>
      <div className="github">
        {links[3].icon && (
          <a
            href={links[3].href}
            className="menu github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={links[3].icon} alt="GitHub" />
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;