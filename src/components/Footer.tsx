import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-background text-white relative overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-[144rem] mx-auto px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[7.3rem] pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-8">
        {/* Top section with logo and links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8 lg:gap-0 mb-8 sm:mb-12 lg:mb-16">
          {/* Logo and copyright */}
          <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-up animate-delay-100">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div 
                className="w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[4.4rem] lg:h-[4.4rem] rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: `linear-gradient(180deg, #925C40 0%, #cd5a25 100%)`
                }}
              >
                <img
                  className="scale-75"
                  alt="StellarUI Logo"
                  src="/stellar.png"
                  width="3.5rem"
                  height="3.5rem"
                />
              </div>
              <h2 className="text-white font-bold text-base sm:text-lg">StellarUI</h2> 
            </div>
            
            {/* Copyright */}
            <p className="text-gray-70 text-xs sm:text-sm max-w-[25rem] sm:max-w-[30rem]">
              © copyright StellarUI 2024. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex gap-8 sm:gap-12 lg:gap-16 w-full lg:w-auto">
            {/* Pages */}
            <div className="flex flex-col gap-3 sm:gap-4 animate-fade-in-up animate-delay-200">
              <h3 className="text-white font-semibold text-sm sm:text-base">Pages</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">All Products</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Studio</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Clients</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3 sm:gap-4 animate-fade-in-up animate-delay-300">
              <h3 className="text-white font-semibold text-sm sm:text-base">Socials</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Instagram</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Twitter</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">LinkedIn</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3 sm:gap-4 animate-fade-in-up animate-delay-400">
              <h3 className="text-white font-semibold text-sm sm:text-base">Legal</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Register */}
            <div className="flex flex-col gap-3 sm:gap-4 animate-fade-in-up animate-delay-500">
              <h3 className="text-white font-semibold text-sm sm:text-base">Register</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Sign Up</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Login</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Forgot Password</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large STELLAR UI text - Bold and Thick */}
        <div className="relative flex justify-center animate-fade-in-scale animate-delay-600 overflow-hidden">
          <h1 
            className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[13rem] bg-clip-text bg-gradient-to-t from-[#292929] to-[#000000] leading-none tracking-wider select-none pointer-events-none text-center"
            style={{
              color: 'rgba(255, 255, 255, 0.02)',
              fontFamily: 'Bricolage Grotesque, Helvetica',
              textTransform: 'uppercase',
              fontWeight: '900', 
              WebkitTextStroke: '0.1rem rgba(255, 255, 255, 0.05)', 
            }}
          >
            STELLAR UI
          </h1>
        </div>
      </div>
    </footer>
  );
};