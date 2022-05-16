import * as React from 'react';
import IconLogofSource from '../images/logof.svg';
import IconLogoStepSource from '../images/logostep.svg';

const Footer = () => {
  return (
    <>
      <footer className="mt-24 lg:mt-0 text-white">
        <div className="row items-center">
          <div className="col-full md:col-6 lg:col-5">
            <div className="bg-red-300 px-5 md:px-20 lg:px-24 py-10 rounded-tr-3xl">
              <img src={IconLogofSource} className="" alt="logof icon" />
              <p className="typo-small mt-8">
                <span className="font-bold">Indonesian Beautypreneur Community.</span>
                {' '}
                Wadah positif bagi para Beautypreneur. Berpenghasilan dari rumah dengan memanfaatkan teknologi. Bergabung  bersama beautypreneur lainnya.
              </p>
              <img src={IconLogoStepSource} className="mt-10" alt="logostep icon" />
              <p className="typo-small mt-4">
                <span className="font-bold">© 2022 Beautieslife.id.</span>
                {' '}
                Made with love
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-col md:col-3 lg:col-2">
            <p className="typo-blockquote text-red-300">About</p>
            <a href="#" className="typo-small text-gray-400 mt-8">Home</a>
            <a href="#" className="typo-small text-gray-400 mt-3.5">Beautypreneur</a>
            <a href="#" className="typo-small text-gray-400 mt-3.5">Brand Partner</a>
            <a href="#" className="typo-small text-gray-400 mt-3.5">Official Partner</a>
          </div>
          <div className="hidden md:flex flex-col md:col-3 lg:col-2">
            <p className="typo-blockquote text-red-300">Support</p>
            <a href="#" className="typo-small text-gray-400 mt-8">Kelas Geratis <span className="text-red-300">*</span></a>
            <a href="#" className="typo-small text-gray-400 mt-3.5">Fasilitas</a>
            <a href="#" className="typo-small text-gray-400 mt-3.5">FAQs</a>
            <a href="#" className="typo-small text-gray-400 mt-3.5">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
