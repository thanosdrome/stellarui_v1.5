import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-background text-white relative overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-[73px] pt-16 pb-8">
        {/* Top section with logo and links */}
        <div className="flex justify-between items-start mb-16">
          {/* Logo and copyright */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div 
                className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center"
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
              <h2 className="text-white font-bold text-lg">StellarUI</h2> 
            </div>
            
            {/* Copyright */}
            <p className="text-gray-70 text-sm max-w-[300px]">
              © copyright StellarUI 2024. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            {/* Pages */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-base">Pages</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">All Products</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Studio</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Clients</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Blog</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-base">Socials</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Facebook</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Instagram</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Twitter</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">LinkedIn</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-base">Legal</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Register */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-base">Register</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Sign Up</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Login</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Forgot Password</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large STELLAR UI text */}
        <div className="relative">
          <h1 
            className="text-[200px] font-bold leading-none bg-[linear-gradient(0deg,rgba(69, 69, 69, 1) 35%, rgba(10, 10, 10, 1) 100%)] tracking-wider select-none pointer-events-none"
            style={{
              color: 'rgba(255, 255, 255, 0.03)',
              fontFamily: 'Bricolage Grotesque, Helvetica',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            STELLAR UI
          </h1>
        </div>
      </div>
    </footer>
  );
};