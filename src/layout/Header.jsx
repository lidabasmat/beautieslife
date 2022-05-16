import * as React from 'react';
import IconLogoSource from '../images/logo.svg';
import IconMenuSource from '../images/icon-menu.svg';

const Header = () => {
  return (
    <>
      <header className="bg-red-100 py-9">
        <div className="container-lg">
          <div className="row items-center justify-between">
            <div className="col">
              <img src={IconLogoSource} className="" alt="logo icon" />
            </div>
            <div className="hidden md:flex items-center col">
              <a href="#" className="typo-h6 text-gray-300">Fasilitas</a>
              <a href="#" className="typo-h6 text-gray-300 ml-8">Beautypreneur</a>
              <a href="#" className="typo-h6 text-gray-300 ml-8">Brand Partner</a>
              <button className="bg-red-300 rounded-xl py-2.5 px-4 text-sm ml-16 text-white font-bold">Registrasi</button>
            </div>
            <img src={IconMenuSource} className="inline-block md:hidden pr-4" alt="menu icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
