import React from "react";
import "../style.css";

const Footer = ({ links }) => {
  return (
    <footer className="">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center py-4 border-t border-gray-300">
        <nav className="text-center">
          <ul className="flex space-x-6 list-none">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-gray-700 "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="text-center mx-auto px-4 py-8">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
