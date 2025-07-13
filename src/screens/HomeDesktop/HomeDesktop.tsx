import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { WaitlistModal } from "../../components/WaitlistModal";
import { Footer } from "../../components/Footer";
import { PointerTracker } from "../../components/PointerTracker";
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
      <PointerTracker />
      <div
        className="flex flex-row justify-center w-full"
        style={{
          backgroundImage: "url('/footer-gradient.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundColor: "var(--dark-background)",
        }}
      >
        <div className="overflow-hidden w-full max-w-[1440px] min-h-screen px-4 sm:px-6 lg:px-0">
          <div className="relative min-h-screen pb-20">
            {/* Circular decorative elements - responsive positioning */}
            <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[980px] lg:h-[980px] top-[100px] sm:top-[80px] lg:top-[70px] left-1/2 transform -translate-x-1/2 lg:left-[230px] lg:transform-none animate-fade-in-scale animate-delay-300">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full rounded-full circle-light" />

                {/* Decorative vectors - hidden on mobile, visible on larger screens */}
                <img
                  className="hidden lg:block absolute w-[99px] h-[297px] top-[225px] left-0 animate-fade-in-left animate-delay-500"
                  alt="Vector"
                  src="/vector.svg"
                />

                <img
                  className="hidden lg:block absolute w-[71px] h-[269px] top-[239px] left-3.5 animate-fade-in-left animate-delay-600"
                  alt="Vector"
                  src="/vector-3.svg"
                />

                <img
                  className="hidden lg:block absolute w-[156px] h-[287px] top-[146px] right-0 animate-fade-in-right animate-delay-500"
                  alt="Vector"
                  src="/vector-2.svg"
                />

                <img
                  className="hidden lg:block absolute w-[119px] h-[252px] top-[165px] right-[19px] animate-fade-in-right animate-delay-600"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
            </div>

            {/* Main content section */}
            <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-[60px] relative pt-24 sm:pt-32 lg:pt-[186px] px-4 sm:px-6 lg:px-[73px]">
              {/* Background circle - responsive */}
              <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[886px] lg:h-[886px] top-[200px] sm:top-[250px] lg:top-[284px] left-1/2 transform -translate-x-1/2 lg:left-[205px] lg:transform-none rounded-full border border-solid border-accent-dark-brown shadow-[inset_0px_0px_150px_80px_rgba(var(--dark-background-rgb),0.3),0px_-6px_60px_5px_rgba(var(--glow-light-rgb),0.05)] lg:shadow-[inset_0px_0px_250px_160px_rgba(var(--dark-background-rgb),0.3),0px_-6px_114px_10px_rgba(var(--glow-light-rgb),0.05)] animate-fade-in-scale animate-delay-400">
                <img
                  className="absolute w-[200px] h-[47px] sm:w-[400px] sm:h-[93px] lg:w-[728px] lg:h-[170px] top-[3px] sm:top-[6px] lg:top-[11px] left-1/2 transform -translate-x-1/2 lg:left-[78px] lg:transform-none animate-fade-in-down animate-delay-700"
                  alt="Partical abstract"
                  src="/partical-abstract-design.svg"
                />
              </div>

              {/* Hero content */}
              <div className="flex flex-col w-full max-w-[988px] items-center gap-6 relative z-10">
                <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 relative w-full">
                  <div className="flex flex-col items-center gap-4 sm:gap-5 relative w-full">
                    {/* Feature badge */}
                    <Badge className="inline-flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-3.5 py-2 relative rounded-full border border-solid border-accent-dark-brown shadow-[inset_0px_0px_22px_rgba(var(--accent-orange-dark-rgb),0.4)] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_85%)] animate-fade-in-up animate-delay-200">
                      <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                        <div className="relative h-full">
                          <img
                            className="absolute w-[45px] h-[40px] sm:w-[55px] sm:h-[50px] -top-2.5 sm:-top-3 left-[1px] sm:left-[3px]"
                            alt="Icon"
                            src="/icon.png"
                          />
                        </div>
                      </div>

                      <div className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-97 text-sm sm:text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Introducing Our Latest Features
                      </div>
                    </Badge>

                    <div className="flex flex-col items-start gap-3 sm:gap-4 relative w-full">
                      <h1 className="relative w-full mt-[-1.00px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-light-95 text-3xl sm:text-4xl lg:text-[58px] text-center tracking-[0] leading-[1.2] lg:leading-[69.6px] animate-fade-in-up animate-delay-300">
                        Revolutionize Your Design <br className="hidden sm:block" />
                        <span className="sm:hidden">With Powerful </span>
                        <span className="hidden sm:inline">With Powerful </span>UI Elements
                      </h1>

                      <p className="relative w-full [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-70 text-sm sm:text-base text-center tracking-[0] leading-5 sm:leading-6 animate-fade-in-up animate-delay-400 px-4 sm:px-0">
                        Transform your UI workflow with StellarUI—where sleek design <br className="hidden lg:block" />
                        meets blazing-fast development.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="h-12 sm:h-[52px] px-6 py-3 sm:py-4 relative rounded-full animate-fade-in-up animate-delay-500 w-full sm:w-auto max-w-xs"
                    style={{
                      background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                    }}
                  >
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-semibold text-gray-90 text-base sm:text-[17px] tracking-[0] leading-[20.4px] whitespace-nowrap">
                      View Documentation
                    </span>
                  </Button>
                </div>

                {/* Companies using the product */}
                <div className="inline-flex items-center justify-center gap-1.5 relative rounded animate-fade-in-up animate-delay-600 px-4 text-center">
                  <img
                    className="relative w-4 h-4 sm:w-5 sm:h-5"
                    alt="Icon container"
                    src="/icon-container.svg"
                  />

                  <div className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-normal text-gray-90 text-sm sm:text-[15px] tracking-[0] leading-[15px]">
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
                className="flex flex-col h-[300px] sm:h-[400px] lg:h-[586px] items-start gap-[13.87px] p-3 sm:p-4 lg:p-5 relative w-full max-w-[1296px] rounded-[22px] border-solid border-black backdrop-blur-[23.58px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(23.58px)_brightness(100%)] animate-fade-in-up animate-delay-700 z-10"
                style={{
                  background: `radial-gradient(circle,rgba(194, 107, 58, 1) 0%, rgba(67, 58, 59, 1) 35%, rgba(10, 10, 10, 1) 100%)`,
                }}
              >
                <CardContent className="p-0 w-full h-full">
                  <div className="absolute w-[200px] h-[10px] sm:w-[400px] sm:h-[20px] lg:w-[720px] lg:h-[38px] top-[8px] sm:top-[12px] lg:top-[15px] left-1/2 transform -translate-x-1/2 lg:left-72 lg:transform-none">
                    <div className="relative h-full">
                      <div className="absolute w-[10px] h-[200px] sm:w-[20px] sm:h-[400px] lg:w-[38px] lg:h-[720px] top-[-95px] sm:top-[-190px] lg:top-[-341px] left-1/2 transform -translate-x-1/2 lg:left-[341px] lg:transform-none bg-[#E0A784] rounded-[5px/100px] sm:rounded-[10px/200px] lg:rounded-[19px/360px] rotate-90 blur-[30px] sm:blur-[70px] lg:blur-[137px]" />
                      <div className="absolute w-[10px] h-[200px] sm:w-[20px] sm:h-[400px] lg:w-[38px] lg:h-[720px] top-[-95px] sm:top-[-190px] lg:top-[-341px] left-1/2 transform -translate-x-1/2 lg:left-[341px] lg:transform-none bg-[#8A5B40] rounded-[5px/100px] sm:rounded-[10px/200px] lg:rounded-[19px/360px] rotate-90 blur-[15px] sm:blur-[25px] lg:blur-[42px]" />
                      <div className="absolute w-[10px] h-[200px] sm:w-[20px] sm:h-[400px] lg:w-[38px] lg:h-[720px] top-[-95px] sm:top-[-190px] lg:top-[-341px] left-1/2 transform -translate-x-1/2 lg:left-[341px] lg:transform-none bg-[#C26B3A] rounded-[5px/100px] sm:rounded-[10px/200px] lg:rounded-[19px/360px] rotate-90 blur-[25px] sm:blur-[50px] lg:blur-[92px]" />
                    </div>
                  </div>

                  <img
                    className="w-full h-full object-cover rounded-[18px] animate-fade-in-scale animate-delay-800"
                    alt="Image"
                    src="https://ranjanshu.com/docs.png"
                  />

                  <div
                    className="absolute w-full h-[100px] sm:h-[150px] lg:h-[213px] bottom-0 left-0"
                    style={{
                      background: `linear-gradient(180deg, rgba(var(--dark-background-rgb),0) 0%, rgba(var(--dark-background-rgb),1) 81%)`,
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Navigation bar */}
            <Card
              className="flex flex-col w-full max-w-[893px] items-start gap-2.5 px-3 sm:px-4 lg:pl-4 lg:pr-3 py-2.5 absolute top-4 sm:top-6 lg:top-[30px] left-1/2 transform -translate-x-1/2 lg:left-[274px] lg:transform-none rounded-[50px] border-none backdrop-blur-[126.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(126.3px)_brightness(100%)] animate-fade-in-down z-20"
              style={{
                background: `linear-gradient(90deg, var(--dark-background) 0%, var(--accent-dark-brown) 100%)`,
                height: "60px",
                overflow: "hidden",
              }}
            >
              {/* Conic gradient */}
              <span
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
                  <div className="relative flex items-center gap-2 sm:gap-3 animate-fade-in-left animate-delay-100">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden flex items-center justify-center"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
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
                      StellerUI
                    </h1>
                  </div>

                  {/* Desktop Navigation menu */}
                  <nav className="hidden lg:flex items-center gap-6 animate-fade-in-up animate-delay-200">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`relative w-fit [font-family:'Instrument_Sans',Helvetica] font-medium text-${
                          item.active ? "white" : "gray-70"
                        } text-base tracking-[0] leading-[22.4px] whitespace-nowrap transition-colors duration-200 hover:text-white`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Right side actions */}
                  <div className="flex items-center gap-2 sm:gap-4 animate-fade-in-right animate-delay-100">
                    {/* Mobile menu button */}
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="lg:hidden p-2 text-white hover:text-gray-70 transition-colors"
                    >
                      {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <img
                      className="hidden sm:block relative w-5 h-5 sm:w-6 sm:h-6"
                      alt="Icon container"
                      src="/icon-container-1.svg"
                    />

                    <Button
                      onClick={() => setIsWaitlistModalOpen(true)}
                      className="h-10 sm:h-12 lg:h-[52px] px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 relative rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm lg:text-base"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-semibold text-gray-90 tracking-[0] leading-[20.4px] whitespace-nowrap">
                        Join waitlist
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden fixed inset-0 z-30 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
                <div 
                  className="absolute top-20 left-4 right-4 bg-dark-background border border-accent-dark-brown rounded-2xl p-6 animate-fade-in-down"
                  onClick={(e) => e.stopPropagation()}
                >
                  <nav className="flex flex-col gap-4">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`relative w-fit [font-family:'Instrument_Sans',Helvetica] font-medium text-${
                          item.active ? "white" : "gray-70"
                        } text-lg tracking-[0] leading-[22.4px] transition-colors duration-200 hover:text-white py-2`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="animate-fade-in-up animate-delay-800">
        <Footer />
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
};