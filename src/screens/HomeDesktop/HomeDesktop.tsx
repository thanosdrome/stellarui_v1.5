import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { WaitlistModal } from "../../components/WaitlistModal";
import { Footer } from "../../components/Footer";
import { PointerTracker } from "../../components/PointerTracker";

export const HomeDesktop = (): JSX.Element => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

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
        <div className="overflow-hidden max-w-[144rem] mx-auto w-full">
          <div className="relative min-h-[123.5rem]">
            {/* Circular decorative elements - fade in with scale */}
            <div className="absolute w-[98rem] h-[98rem] top-[7rem] left-[23rem] animate-fade-in-scale animate-delay-300">
              <div className="relative w-[100.8rem] h-[98.2rem] -top-[0.1rem] left-[-1.5rem]">
                <div className="absolute w-[98.2rem] h-[98.2rem] top-0 left-[1.4rem] rounded-[49.1rem] circle-light" />

                <img
                  className="absolute w-[9.9rem] h-[29.7rem] top-[22.5rem] left-0 animate-fade-in-left animate-delay-500"
                  alt="Vector"
                  src="/vector.svg"
                />

                <img
                  className="absolute w-[7.1rem] h-[26.9rem] top-[23.9rem] left-[1.4rem] animate-fade-in-left animate-delay-600"
                  alt="Vector"
                  src="/vector-3.svg"
                />

                <img
                  className="absolute w-[15.6rem] h-[28.7rem] top-[14.6rem] left-[85.2rem] animate-fade-in-right animate-delay-500"
                  alt="Vector"
                  src="/vector-2.svg"
                />

                <img
                  className="absolute w-[11.9rem] h-[25.2rem] top-[16.5rem] left-[87.1rem] animate-fade-in-right animate-delay-600"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
            </div>

            {/* Main content section */}
            <div className="flex flex-col w-[129.6rem] items-center gap-[6rem] absolute top-[18.6rem] left-[7.3rem] overflow-hidden">
              <div className="absolute w-[88.6rem] h-[88.6rem] top-[28.4rem] left-[20.5rem] rounded-[44.3rem] border border-solid border-accent-dark-brown shadow-[inset_0rem_0rem_25rem_16rem_rgba(var(--dark-background-rgb),0.3),0rem_-0.6rem_11.4rem_1rem_rgba(var(--glow-light-rgb),0.05)] animate-fade-in-scale animate-delay-400">
                <img
                  className="absolute w-[72.8rem] h-[17rem] top-[1.1rem] left-[7.8rem] animate-fade-in-down animate-delay-700"
                  alt="Partical abstract"
                  src="/partical-abstract-design.svg"
                />
              </div>

              {/* Hero content */}
              <div className="flex flex-col w-[98.8rem] items-center gap-[2.4rem] relative flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-[4rem] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-[2rem] relative self-stretch w-full flex-[0_0_auto]">
                    {/* Feature badge */}
                    <Badge className="inline-flex items-center justify-center gap-[1.2rem] px-[1.4rem] py-[0.8rem] relative flex-[0_0_auto] rounded-[10rem] border border-solid border-accent-dark-brown shadow-[inset_0rem_0rem_2.2rem_rgba(var(--accent-orange-dark-rgb),0.4)] backdrop-blur-[1.2rem] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.2rem)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_85%)] animate-fade-in-up animate-delay-200">
                      <div className="relative w-[2.4rem] h-[2.4rem]">
                        <div className="relative h-[2.4rem]">
                          <img
                            className="absolute w-[5.5rem] h-[5rem] -top-[1.2rem] left-[0.3rem]"
                            alt="Icon"
                            src="/icon.png"
                          />
                        </div>
                      </div>

                      <div className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-97 text-[1.5rem] tracking-[0] leading-[normal] whitespace-nowrap">
                        Introducing Our Latest Features
                      </div>
                    </Badge>

                    <div className="flex flex-col items-start gap-[1.6rem] relative self-stretch w-full flex-[0_0_auto]">
                      <h1 className="relative self-stretch mt-[-0.1rem] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-light-95 text-[5.8rem] text-center tracking-[0] leading-[6.96rem] animate-fade-in-up animate-delay-300">
                        Revolutionize Your Design <br />
                        With Powerful UI Elements
                      </h1>

                      <p className="relative self-stretch [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-70 text-[1.6rem] text-center tracking-[0] leading-[2.4rem] animate-fade-in-up animate-delay-400">
                        Transform your UI workflow with StellarUI—where sleek design <br />
                       meets blazing-fast development.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="h-[5.2rem] px-[2.4rem] py-[1.6rem] relative rounded-[10rem] animate-fade-in-up animate-delay-500"
                    style={{
                      background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                    }}
                  >
                    <span className="relative w-fit mt-[-0.1rem] [font-family:'Instrument_Sans',Helvetica] font-semibold text-gray-90 text-[1.7rem] tracking-[0] leading-[2.04rem] whitespace-nowrap">
                      View Documentation
                    </span>
                  </Button>
                </div>

                {/* Companies using the product */}
                <div className="inline-flex items-center justify-center gap-[0.6rem] relative flex-[0_0_auto] rounded animate-fade-in-up animate-delay-600">
                  <img
                    className="relative w-[2rem] h-[2rem]"
                    alt="Icon container"
                    src="/icon-container.svg"
                  />

                  <div className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-normal text-gray-90 text-[1.5rem] tracking-[0] leading-[1.5rem]">
                    <span className="font-medium text-[#92929f] leading-[2.25rem]">
                      Used and helping over more
                    </span>

                    <span className="font-medium text-zinc-200 leading-[2.25rem]">
                      {" "}
                      200+ Companies
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <Card
                className="flex flex-col h-[58.6rem] items-start gap-[1.387rem] p-[2rem] relative self-stretch w-full rounded-[2.2rem] border-solid border-black backdrop-blur-[2.358rem] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.358rem)_brightness(100%)] animate-fade-in-up animate-delay-700"
                style={{
                  background: `radial-gradient(circle,rgba(194, 107, 58, 1) 0%, rgba(67, 58, 59, 1) 35%, rgba(10, 10, 10, 1) 100%)`,
                }}
              >
                <CardContent className="p-0 w-full h-full">
                  <div className="absolute w-[72rem] h-[3.8rem] top-[1.5rem] left-[28.8rem]">
                    <div className="relative h-[3.8rem]">
                      <div className="absolute w-[3.8rem] h-[72rem] top-[-34.1rem] left-[34.1rem] bg-[#E0A784] rounded-[1.9rem/36rem] rotate-90 blur-[13.7rem]" />
                      <div className="absolute w-[3.8rem] h-[72rem] top-[-34.1rem] left-[34.1rem] bg[#8A5B40] rounded-[1.9rem/36rem] rotate-90 blur-[4.2rem]" />
                      <div className="absolute w-[3.8rem] h-[72rem] top-[-34.1rem] left-[34.1rem] bg-[#C26B3A] rounded-[1.9rem/36rem] rotate-90 blur-[9.2rem]" />
                    </div>
                  </div>

                  <img
                    className="w-full h-full object-cover rounded-[1.8rem] animate-fade-in-scale animate-delay-800"
                    alt="Image"
                    src="https://ranjanshu.com/docs.png"
                  />

                  <div
                    className="absolute w-[133.7rem] h-[21.3rem] top-[37.3rem] -left-[0.8rem]"
                    style={{
                      background: `linear-gradient(180deg, rgba(var(--dark-background-rgb),0) 0%, rgba(var(--dark-background-rgb),1) 81%)`,
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Navigation bar */}
            <Card
              className="flex flex-col w-[89.3rem] items-start gap-[1rem] pl-[1.6rem] pr-[1.2rem] py-[1rem] absolute top-[3rem] left-[27.4rem] rounded-[11.938rem] border-none backdrop-blur-[12.63rem] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12.63rem)_brightness(100%)] animate-fade-in-down"
              style={{
                background: `linear-gradient(90deg, var(--dark-background) 0%, var(--accent-dark-brown) 100%)`,
                borderRadius: "5rem",
                position: "relative",
                height: "7.5rem",
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
                  inset: "0.3rem",
                  height: "calc(100% - 0.6rem)",
                  width: "calc(100% - 0.6rem)",
                  zIndex: 1,
                }}
                aria-hidden="true"
              />
              <CardContent
                className="p-0 w-full"
                style={{ position: "relative", zIndex: 2 }}
              >
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  {/* Logo */}
                  <div className="relative w-[12rem] h-[4.4rem] animate-fade-in-left animate-delay-100">
                    <div
                      className="absolute w-[4.4rem] h-[4.4rem] top-0 left-0 rounded-[10rem] overflow-hidden"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <img
                        className="absolute scale-75 left-0"
                        alt="Abstract"
                        src="/stellar.png"
                        width="10rem"
                        height="10rem"
                      />
                    </div>

                    <h1 className="absolute w-[6.7rem] h-[1.5rem] top-[1rem] left-[5.1rem] text-white font-bold">
                      StellerUI
                    </h1>
                  </div>

                  {/* Right side actions */}
                  <div className="inline-flex items-center justify-end gap-[1.6rem] relative flex-[0_0_auto] animate-fade-in-right animate-delay-100">
                    <img
                      className="relative w-[2.4rem] h-[2.4rem]"
                      alt="Icon container"
                      src="/icon-container-1.svg"
                    />

                    <Button
                      onClick={() => setIsWaitlistModalOpen(true)}
                      className="h-[5.2rem] px-[2.4rem] py-[1.6rem] relative rounded-[10rem] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <span className="relative w-fit mt-[-0.1rem] [font-family:'Instrument_Sans',Helvetica] font-semibold text-gray-90 text-[1.7rem] tracking-[0] leading-[2.04rem] whitespace-nowrap">
                        Join the waitlist
                      </span>
                    </Button>
                  </div>

                  {/* Navigation menu */}
                  <nav className="inline-flex items-center gap-[2.4rem] absolute top-[1.5rem] left-[18.7rem] animate-fade-in-up animate-delay-200">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-medium text-${
                          item.active ? "white" : "gray-70"
                        } text-[1.6rem] tracking-[0] leading-[2.24rem] whitespace-nowrap transition-colors duration-200 hover:text-white`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </CardContent>
            </Card>
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