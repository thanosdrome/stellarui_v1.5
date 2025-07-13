import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-background text-white relative overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[73px] pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
        {/* Top section with logo and links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 mb-8 sm:mb-12 lg:mb-16">
          {/* Logo and copyright */}
          <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-up animate-delay-100 w-full lg:w-auto">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div 
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: `linear-gradient(180deg, #925C40 0%, #cd5a25 100%)`
                }}
              >
                <img
                  className="scale-75"
                  alt="StellarUI Logo"
                  src="/stellar.png"
                  width={44}
                  height={44}
                />
              </div>
              <h2 className="text-white font-bold text-base sm:text-lg">StellarUI</h2> 
            </div>
            
            {/* Copyright */}
            <p className="text-gray-70 text-sm max-w-[300px]">
              © copyright StellarUI 2024. All rights reserved.
            </p>
          </div>

          {/* Link columns - responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-16 w-full lg:w-auto">
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
              <h3 className="text-white font-semibold text-sm sm:text-base">Legal</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Sign Up</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Login</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-xs sm:text-sm">Forgot Password</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large STELLAR UI text - responsive sizing */}
        <div className="relative flex justify-center animate-fade-in-scale animate-delay-600">
          <h1 
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[13rem] bg-clip-text bg-gradient-to-t from-[#292929] to-[#000000] leading-none tracking-wider select-none pointer-events-none text-center"
            style={{
              color: 'rgba(255, 255, 255, 0.02)',
              fontFamily: 'Bricolage Grotesque, Helvetica',
              textTransform: 'uppercase',
              fontWeight: '900', 
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)', 
            }}
          >
            STELLAR UI
          </h1>
        </div>
      </div>
    </footer>
  );
};