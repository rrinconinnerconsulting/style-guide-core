import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800">
  <nav className="container mx-auto px-6 py-3">
    <div className="flex items-center justify-between">
      <div className="text-white font-bold text-xl">
        <a href="#">Logo</a>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <li><a href="/" className="text-white">Titulos</a></li>
          <li><a href="/parrafos" className="text-white">Parrafos</a></li>
          <li><a href="/Componentes" className="text-white">Componentes</a></li>
          <li><a href="/Graficas" className="text-white">Graficas</a></li>
          <li><a href="/Icons" className="text-white">Iconos</a></li>
        </ul>
      </div>
      <div className="md:hidden">
        <button className="outline-none mobile-menu-button">
          <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</header>
  );
};

export default Header;


