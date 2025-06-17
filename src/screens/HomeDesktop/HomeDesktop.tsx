import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { WaitlistModal } from "../../components/WaitlistModal";
import { Footer } from "../../components/Footer";
import { Menu, X } from "lucide-react";

export const HomeDesktop = (): JSX.Element => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", active: true },
    { label: "Feature", active: false },
    { label: "Pricing", active: false },
    { label: "Testimonial", active: false },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div 
        className="flex flex-row justify-center w-full relative"
        style={{
          backgroundImage: "url('/footer-gradient.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundColor: "var(--dark-background)"
        }}
      >
        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden">
            <div className="flex flex-col h-full bg-dark-background/95 backdrop-blur-md">
              <div className="flex justify-between items-center p-6 border-b border-accent-dark-brown">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center"
                    style={{
                      background: `linear-gradient(180deg, #925C40 0%, #cd5a25 100%)`
                    }}
                  >
                    <img
                      className="scale-75"
                      alt="StellarUI Logo"
                      src="/stellar.png"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h2 className="text-white font-bold">StellarUI</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:bg-accent-dark-brown"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <nav className="flex flex-col gap-6 p-6">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`text-lg font-medium ${
                      item.active ? "text-white" : "text-gray-70"
                    } hover:text-white transition-colors`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <Button 
                  onClick={() => {
                    setIsWaitlistModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="h-12 px-6 py-3 mt-6 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: `linear-gradient(180deg, #925C40 0%, #cd5a25 100%)`
                  }}
                >
                  <span className="font-semibold text-white">
                    Join the waitlist
                  </span>
                </Button>
              </nav>
            </div>
          </div>
        )}

        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-0">
          <div className="relative min-h-screen lg:h-[1235px]">
            {/* Circular decorative elements - Hidden on mobile */}
            <div className="hidden lg:block absolute w-[980px] h-[980px] top-[70px] left-[230px]">
              <div className="relative w-[1008px] h-[982px] -top-px left-[-15px]">
                <div className="absolute w-[982px] h-[982px] top-0 left-3.5 rounded-[491px] circle-light" />

                <img
                  className="absolute w-[99px] h-[297px] top-[225px] left-0"
                  alt="Vector"
                  src="/vector.svg"
                />

                <img
                  className="absolute w-[71px] h-[269px] top-[239px] left-3.5"
                  alt="Vector"
                  src="/vector-3.svg"
                />

                <img
                  className="absolute w-[156px] h-[287px] top-[146px] left-[852px]"
                  alt="Vector"
                  src="/vector-2.svg"
                />

                <img
                  className="absolute w-[119px] h-[252px] top-[165px] left-[871px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
            </div>

            {/* Main content section */}
            <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-[60px] pt-24 sm:pt-32 lg:absolute lg:top-[186px] lg:left-[73px] lg:w-[1296px] px-4 sm:px-6 lg:px-0">
              {/* Large circle background - Responsive */}
              <div className="hidden sm:block absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[886px] lg:h-[886px] top-[200px] sm:top-[250px] lg:top-[284px] left-1/2 transform -translate-x-1/2 lg:left-[205px] lg:transform-none rounded-full border border-solid border-accent-dark-brown shadow-[inset_0px_0px_150px_80px_rgba(var(--dark-background-rgb),0.3),0px_-6px_60px_5px_rgba(var(--glow-light-rgb),0.05)] lg:shadow-[inset_0px_0px_250px_160px_rgba(var(--dark-background-rgb),0.3),0px_-6px_114px_10px_rgba(var(--glow-light-rgb),0.05)]">
                <img
                  className="absolute w-[300px] h-[70px] sm:w-[500px] sm:h-[120px] lg:w-[728px] lg:h-[170px] top-[5px] sm:top-[8px] lg:top-[11px] left-1/2 transform -translate-x-1/2 lg:left-[78px] lg:transform-none"
                  alt="Partical abstract"
                  src="/partical-abstract-design.svg"
                />
              </div>

              {/* Hero content */}
              <div className="flex flex-col w-full max-w-[988px] items-center gap-6 relative z-10">
                <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 relative w-full">
                  <div className="flex flex-col items-center gap-4 sm:gap-5 relative w-full">
                    {/* Feature badge */}
                    <Badge className="inline-flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-3.5 py-2 relative rounded-full border border-solid border-accent-dark-brown shadow-[inset_0px_0px_22px_rgba(var(--accent-orange-dark-rgb),0.4)] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_85%)]"> 
                      <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                        <div className="relative h-5 sm:h-6">
                          <img
                            className="absolute w-[45px] h-[40px] sm:w-[55px] sm:h-[50px] -top-2.5 sm:-top-3 left-[2px] sm:left-[3px]"
                            alt="Icon"
                            src="/icon.png"
                          />
                        </div>
                      </div>

                      <div className="relative w-fit font-medium text-gray-97 text-sm sm:text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Introducing Our Latest Features
                      </div>
                    </Badge>

                    <div className="flex flex-col items-start gap-3 sm:gap-4 relative w-full">
                      <h1 className="relative w-full font-bold text-light-95 text-3xl sm:text-4xl md:text-5xl lg:text-[58px] text-center tracking-[0] leading-tight sm:leading-[1.2] lg:leading-[69.6px]">
                        Revolutionize Your Design <br className="hidden sm:block" />
                        <span className="sm:hidden">With Powerful </span>
                        <span className="hidden sm:inline">With Powerful </span>
                        UI Elements
                      </h1>

                      <p className="relative w-full font-medium text-gray-70 text-sm sm:text-base text-center tracking-[0] leading-5 sm:leading-6 px-4 sm:px-0">
                        Empower your business with Bester's AI-driven
                        solutions designed to streamline <br className="hidden lg:block" />
                        operations and enhance customer relationships.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="h-12 sm:h-[52px] px-6 py-3 sm:py-4 relative rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: `linear-gradient(180deg, #925C40 0%, #cd5a25 100%)`
                    }}
                  >
                    <span className="relative w-fit font-semibold text-gray-90 text-base sm:text-[17px] tracking-[0] leading-[20.4px] whitespace-nowrap">
                      View Documentation
                    </span>
                  </Button>
                </div>

                {/* Companies using the product */}
                <div className="inline-flex items-center justify-center gap-1.5 relative rounded">
                  <img
                    className="relative w-4 h-4 sm:w-5 sm:h-5"
                    alt="Icon container"
                    src="/icon-container.svg"
                  />

                  <div className="relative w-fit font-normal text-gray-90 text-sm sm:text-[15px] tracking-[0] leading-[15px] text-center">
                    <span className="font-medium text-[#92929f] leading-[22.5px]">
                      Used and helping over more
                    </span>

                    <span className="font-medium text-zinc-200 leading-[22.5px]">
                      {" "}
                      200+ Companies
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <Card 
                className="flex flex-col h-[300px] sm:h-[400px] lg:h-[586px] items-start gap-[13.87px] p-3 sm:p-4 lg:p-5 relative w-full max-w-[1296px] rounded-[16px] sm:rounded-[20px] lg:rounded-[22px] border-solid border-black backdrop-blur-[23.58px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(23.58px)_brightness(100%)]"
                style={{
                  background: `radial-gradient(circle,rgba(194, 107, 58, 1) 0%, rgba(67, 58, 59, 1) 35%, rgba(10, 10, 10, 1) 100%)`
                }}
              >
                <CardContent className="p-0 w-full h-full">
                  <div className="hidden lg:block absolute w-[720px] h-[38px] top-[15px] left-72">
                    <div className="relative h-[38px]">
                      <div className="absolute w-[38px] h-[720px] top-[-341px] left-[341px] bg-[#E0A784] rounded-[19px/360px] rotate-90 blur-[137px]" />
                      <div className="absolute w-[38px] h-[720px] top-[-341px] left-[341px] bg[#8A5B40] rounded-[19px/360px] rotate-90 blur-[42px]" />
                      <div className="absolute w-[38px] h-[720px] top-[-341px] left-[341px] bg-[#C26B3A] rounded-[19px/360px] rotate-90 blur-[92px]" />
                    </div>
                  </div>

                  <img
                    className="w-full h-full object-cover rounded-[12px] sm:rounded-[16px] lg:rounded-[18px]"
                    alt="Image"
                    src="https://ranjanshu.com/docs.png"
                  />

                  <div 
                    className="absolute w-full h-[100px] sm:h-[150px] lg:w-[1337px] lg:h-[213px] bottom-0 lg:top-[373px] left-0 lg:-left-2"
                    style={{
                      background: `linear-gradient(180deg, rgba(var(--dark-background-rgb),0) 0%, rgba(var(--dark-background-rgb),1) 81%)`
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Navigation bar */}
            <Card
              className="flex flex-col items-start gap-2.5 px-4 sm:px-6 lg:pl-4 lg:pr-3 py-2.5 absolute top-4 sm:top-6 lg:top-[30px] left-4 right-4 sm:left-6 sm:right-6 lg:left-[274px] lg:right-auto lg:w-[893px] rounded-[25px] sm:rounded-[35px] lg:rounded-[119.38px] border-none backdrop-blur-[126.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(126.3px)_brightness(100%)]"
              style={{
                background: `linear-gradient(90deg, var(--dark-background) 0%, var(--accent-dark-brown) 100%)`,
                position: "relative",
                height: "60px",
                overflow: "hidden",
              }}
            >
              {/* Conic gradient */}
              <span
                className="hidden lg:block"
                style={{
                  content: "''",
                  background: `conic-gradient(transparent 270deg, var(--glow-light), transparent)`,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  aspectRatio: "1",
                  width: "100%",
                  animation: "rotate 2s linear infinite",
                  zIndex: 0,
                }}
                aria-hidden="true"
              />
              {/* Overlay */}
              <span
                className="hidden lg:block"
                style={{
                  content: "''",
                  background: "inherit",
                  borderRadius: "inherit",
                  position: "absolute",
                  inset: "3px",
                  height: "calc(100% - 6px)",
                  width: "calc(100% - 6px)",
                  zIndex: 1,
                }}
                aria-hidden="true"
              />
              <CardContent
                className="p-0 w-full h-full flex items-center"
                style={{ position: "relative", zIndex: 2 }}
              >
                <div className="flex items-center justify-between relative w-full">
                  {/* Logo */}
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden flex items-center justify-center"
                      style={{
                        background: `linear-gradient(180deg, #925C40 0%, #cd5a25 100%)`
                      }}
                    >
                      <img
                        className="scale-75"
                        alt="Abstract"
                        src="/stellar.png"
                        width={44}
                        height={44}
                      />
                    </div>

                    <h1 className="text-white font-bold text-sm sm:text-base lg:text-lg">
                      StellarUI
                    </h1>
                  </div>

                  {/* Desktop Navigation menu */}
                  <nav className="hidden lg:flex items-center gap-6">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`relative w-fit font-medium text-${
                          item.active ? "white" : "gray-70"
                        } text-base tracking-[0] leading-[22.4px] whitespace-nowrap hover:text-white transition-colors`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Right side actions */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    {/* Desktop actions */}
                    <div className="hidden sm:flex items-center gap-4">
                      <img
                        className="relative w-5 h-5 sm:w-6 sm:h-6"
                        alt="Icon container"
                        src="/icon-container-1.svg"
                      />

                      <Button 
                        onClick={() => setIsWaitlistModalOpen(true)}
                        className="h-10 sm:h-12 lg:h-[52px] px-4 sm:px-6 py-2 sm:py-3 lg:py-4 relative rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                          background: `linear-gradient(180deg, #925C40 0%, #cd5a25 100%)`
                        }}
                      >
                        <span className="relative w-fit font-semibold text-gray-90 text-sm sm:text-base lg:text-[17px] tracking-[0] leading-[20.4px] whitespace-nowrap">
                          Join the waitlist
                        </span>
                      </Button>
                    </div>

                    {/* Mobile menu button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(true)}
                      className="sm:hidden text-white hover:bg-accent-dark-brown h-8 w-8"
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
};