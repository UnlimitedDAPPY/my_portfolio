import React from "react";
import { Menu, X } from 'lucide-react';

const header = ({ logo, links }) => {
  return (
    <header className="bg-gray-700 text-white p-4 shadow-md fixed top-0 right-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
       <a href="#home" className="flex items-center no-underline hover:no-underline">
         {logo}
       </a>

        <nav>
          <ul className="flex space-x-6 list-none">
            {links.map((link) => (
              // <li key={index}>
                <a
                  href={link.href}
                  className=" hover:text-gray-900 under"
                >
                  {link.label}
                </a>
              // </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default header;
