import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-background text-white relative overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[73px] pt-12 sm:pt-16 pb-6 sm:pb-8">
        {/* Top section with logo and links */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0 mb-12 sm:mb-16">
          {/* Logo and copyright */}
          <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden flex items-center justify-center"
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
              <h2 className="text-white font-bold text-lg sm:text-xl">StellarUI</h2> 
            </div>
            
            {/* Copyright */}
            <p className="text-gray-70 text-sm max-w-[300px] mx-auto lg:mx-0">
              © copyright StellarUI 2024. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 text-center lg:text-left">
            {/* Pages */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-white font-semibold text-base">Pages</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">All Products</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Studio</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Clients</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Blog</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-white font-semibold text-base">Socials</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Facebook</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Instagram</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Twitter</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">LinkedIn</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-white font-semibold text-base">Legal</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Register */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-white font-semibold text-base">Register</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Sign Up</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Login</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Forgot Password</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large STELLAR UI text - Bold and Thick - Responsive */}
        <div className="relative flex justify-center">
          <h1 
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[11rem] bg-clip-text bg-gradient-to-t from-[#292929] to-[#000000] leading-none tracking-wider select-none pointer-events-none text-center"
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