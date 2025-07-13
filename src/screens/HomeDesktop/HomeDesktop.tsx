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
        <div className="overflow-hidden max-w-[144rem] mx-auto w-full px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-0">
          <div className="relative min-h-[60rem] sm:min-h-[80rem] lg:min-h-[100rem] xl:min-h-[123.5rem]">
            {/* Circular decorative elements - hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute w-[60rem] h-[60rem] lg:w-[80rem] lg:h-[80rem] xl:w-[98rem] xl:h-[98rem] top-[4rem] lg:top-[6rem] xl:top-[7rem] left-[10rem] lg:left-[18rem] xl:left-[23rem] animate-fade-in-scale animate-delay-300">
              <div className="relative w-[62rem] h-[60.2rem] lg:w-[82rem] lg:h-[80.2rem] xl:w-[100.8rem] xl:h-[98.2rem] -top-[0.1rem] left-[-1rem] lg:left-[-1.2rem] xl:left-[-1.5rem]">
                <div className="absolute w-[60.2rem] h-[60.2rem] lg:w-[80.2rem] lg:h-[80.2rem] xl:w-[98.2rem] xl:h-[98.2rem] top-0 left-[1rem] lg:left-[1.2rem] xl:left-[1.4rem] rounded-[30.1rem] lg:rounded-[40.1rem] xl:rounded-[49.1rem] circle-light" />

                <img
                  className="absolute w-[6rem] h-[18rem] lg:w-[8rem] lg:h-[24rem] xl:w-[9.9rem] xl:h-[29.7rem] top-[14rem] lg:top-[18rem] xl:top-[22.5rem] left-0 animate-fade-in-left animate-delay-500"
                  alt="Vector"
                  src="/vector.svg"
                />

                <img
                  className="absolute w-[4.5rem] h-[16rem] lg:w-[6rem] lg:h-[22rem] xl:w-[7.1rem] xl:h-[26.9rem] top-[15rem] lg:top-[19rem] xl:top-[23.9rem] left-[1rem] lg:left-[1.2rem] xl:left-[1.4rem] animate-fade-in-left animate-delay-600"
                  alt="Vector"
                  src="/vector-3.svg"
                />

                <img
                  className="absolute w-[10rem] h-[18rem] lg:w-[13rem] lg:h-[24rem] xl:w-[15.6rem] xl:h-[28.7rem] top-[9rem] lg:top-[12rem] xl:top-[14.6rem] left-[50rem] lg:left-[67rem] xl:left-[85.2rem] animate-fade-in-right animate-delay-500"
                  alt="Vector"
                  src="/vector-2.svg"
                />

                <img
                  className="absolute w-[8rem] h-[16rem] lg:w-[10rem] lg:h-[20rem] xl:w-[11.9rem] xl:h-[25.2rem] top-[10rem] lg:top-[13rem] xl:top-[16.5rem] left-[51rem] lg:left-[69rem] xl:left-[87.1rem] animate-fade-in-right animate-delay-600"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
            </div>

            {/* Main content section */}
            <div className="flex flex-col w-full items-center gap-[3rem] sm:gap-[4rem] lg:gap-[5rem] xl:gap-[6rem] absolute top-[8rem] sm:top-[12rem] lg:top-[16rem] xl:top-[18.6rem] left-0 overflow-hidden px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[7.3rem]">
              {/* Background circle - responsive sizing */}
              <div className="hidden sm:block absolute w-[50rem] h-[50rem] sm:w-[60rem] sm:h-[60rem] lg:w-[75rem] lg:h-[75rem] xl:w-[88.6rem] xl:h-[88.6rem] top-[15rem] sm:top-[20rem] lg:top-[25rem] xl:top-[28.4rem] left-[50%] transform -translate-x-1/2 lg:left-[20.5rem] lg:transform-none rounded-[25rem] sm:rounded-[30rem] lg:rounded-[37.5rem] xl:rounded-[44.3rem] border border-solid border-accent-dark-brown shadow-[inset_0rem_0rem_15rem_8rem_rgba(var(--dark-background-rgb),0.3),0rem_-0.3rem_6rem_0.5rem_rgba(var(--glow-light-rgb),0.05)] lg:shadow-[inset_0rem_0rem_20rem_12rem_rgba(var(--dark-background-rgb),0.3),0rem_-0.5rem_9rem_0.8rem_rgba(var(--glow-light-rgb),0.05)] xl:shadow-[inset_0rem_0rem_25rem_16rem_rgba(var(--dark-background-rgb),0.3),0rem_-0.6rem_11.4rem_1rem_rgba(var(--glow-light-rgb),0.05)] animate-fade-in-scale animate-delay-400">
                <img
                  className="absolute w-[40rem] h-[9rem] sm:w-[50rem] sm:h-[12rem] lg:w-[60rem] lg:h-[14rem] xl:w-[72.8rem] xl:h-[17rem] top-[0.8rem] lg:top-[1rem] xl:top-[1.1rem] left-[5rem] sm:left-[5rem] lg:left-[7.5rem] xl:left-[7.8rem] animate-fade-in-down animate-delay-700"
                  alt="Partical abstract"
                  src="/partical-abstract-design.svg"
                />
              </div>

              {/* Hero content */}
              <div className="flex flex-col w-full max-w-[98.8rem] items-center gap-[1.5rem] sm:gap-[2rem] lg:gap-[2.4rem] relative flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-[2rem] sm:gap-[3rem] lg:gap-[4rem] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-[1.5rem] sm:gap-[2rem] relative self-stretch w-full flex-[0_0_auto]">
                    {/* Feature badge */}
                    <Badge className="inline-flex items-center justify-center gap-[0.8rem] sm:gap-[1rem] lg:gap-[1.2rem] px-[1rem] sm:px-[1.2rem] lg:px-[1.4rem] py-[0.6rem] sm:py-[0.7rem] lg:py-[0.8rem] relative flex-[0_0_auto] rounded-[5rem] sm:rounded-[8rem] lg:rounded-[10rem] border border-solid border-accent-dark-brown shadow-[inset_0rem_0rem_1.5rem_rgba(var(--accent-orange-dark-rgb),0.4)] sm:shadow-[inset_0rem_0rem_1.8rem_rgba(var(--accent-orange-dark-rgb),0.4)] lg:shadow-[inset_0rem_0rem_2.2rem_rgba(var(--accent-orange-dark-rgb),0.4)] backdrop-blur-[1rem] sm:backdrop-blur-[1.1rem] lg:backdrop-blur-[1.2rem] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1rem)_brightness(100%)] sm:[-webkit-backdrop-filter:blur(1.1rem)_brightness(100%)] lg:[-webkit-backdrop-filter:blur(1.2rem)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_85%)] animate-fade-in-up animate-delay-200">
                      <div className="relative w-[1.8rem] h-[1.8rem] sm:w-[2rem] h-[2rem] lg:w-[2.4rem] lg:h-[2.4rem]">
                        <div className="relative h-[1.8rem] sm:h-[2rem] lg:h-[2.4rem]">
                          <img
                            className="absolute w-[4rem] h-[3.6rem] sm:w-[4.5rem] sm:h-[4rem] lg:w-[5.5rem] lg:h-[5rem] -top-[0.9rem] sm:-top-[1rem] lg:-top-[1.2rem] left-[0.2rem] sm:left-[0.25rem] lg:left-[0.3rem]"
                            alt="Icon"
                            src="/icon.png"
                          />
                        </div>
                      </div>

                      <div className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-97 text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] tracking-[0] leading-[normal] whitespace-nowrap">
                        Introducing Our Latest Features
                      </div>
                    </Badge>

                    <div className="flex flex-col items-start gap-[1rem] sm:gap-[1.3rem] lg:gap-[1.6rem] relative self-stretch w-full flex-[0_0_auto]">
                      <h1 className="relative self-stretch mt-[-0.1rem] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-light-95 text-[2.8rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.2rem] xl:text-[5.8rem] text-center tracking-[0] leading-[3.2rem] sm:leading-[4.2rem] md:leading-[5rem] lg:leading-[6rem] xl:leading-[6.96rem] animate-fade-in-up animate-delay-300">
                        Revolutionize Your Design <br className="hidden sm:block" />
                        <span className="sm:hidden">With Powerful UI Elements</span>
                        <span className="hidden sm:inline">With Powerful UI Elements</span>
                      </h1>

                      <p className="relative self-stretch [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-70 text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] text-center tracking-[0] leading-[1.8rem] sm:leading-[2.1rem] lg:leading-[2.4rem] animate-fade-in-up animate-delay-400">
                        Transform your UI workflow with StellarUI—where sleek design <br className="hidden lg:block" />
                        meets blazing-fast development.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="h-[4rem] sm:h-[4.5rem] lg:h-[5.2rem] px-[1.8rem] sm:px-[2rem] lg:px-[2.4rem] py-[1.2rem] sm:py-[1.4rem] lg:py-[1.6rem] relative rounded-[5rem] sm:rounded-[8rem] lg:rounded-[10rem] animate-fade-in-up animate-delay-500"
                    style={{
                      background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                    }}
                  >
                    <span className="relative w-fit mt-[-0.1rem] [font-family:'Instrument_Sans',Helvetica] font-semibold text-gray-90 text-[1.3rem] sm:text-[1.5rem] lg:text-[1.7rem] tracking-[0] leading-[1.5rem] sm:leading-[1.8rem] lg:leading-[2.04rem] whitespace-nowrap">
                      View Documentation
                    </span>
                  </Button>
                </div>

                {/* Companies using the product */}
                <div className="inline-flex items-center justify-center gap-[0.4rem] sm:gap-[0.5rem] lg:gap-[0.6rem] relative flex-[0_0_auto] rounded animate-fade-in-up animate-delay-600">
                  <img
                    className="relative w-[1.6rem] h-[1.6rem] sm:w-[1.8rem] sm:h-[1.8rem] lg:w-[2rem] lg:h-[2rem]"
                    alt="Icon container"
                    src="/icon-container.svg"
                  />

                  <div className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-normal text-gray-90 text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] tracking-[0] leading-[1.2rem] sm:leading-[1.3rem] lg:leading-[1.5rem]">
                    <span className="font-medium text-[#92929f] leading-[1.8rem] sm:leading-[2rem] lg:leading-[2.25rem]">
                      Used and helping over more
                    </span>

                    <span className="font-medium text-zinc-200 leading-[1.8rem] sm:leading-[2rem] lg:leading-[2.25rem]">
                      {" "}
                      200+ Companies
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <Card
                className="flex flex-col h-[30rem] sm:h-[40rem] lg:h-[50rem] xl:h-[58.6rem] items-start gap-[1rem] sm:gap-[1.2rem] lg:gap-[1.387rem] p-[1rem] sm:p-[1.5rem] lg:p-[2rem] relative self-stretch w-full rounded-[1.5rem] sm:rounded-[1.8rem] lg:rounded-[2.2rem] border-solid border-black backdrop-blur-[1.5rem] sm:backdrop-blur-[2rem] lg:backdrop-blur-[2.358rem] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.5rem)_brightness(100%)] sm:[-webkit-backdrop-filter:blur(2rem)_brightness(100%)] lg:[-webkit-backdrop-filter:blur(2.358rem)_brightness(100%)] animate-fade-in-up animate-delay-700"
                style={{
                  background: `radial-gradient(circle,rgba(194, 107, 58, 1) 0%, rgba(67, 58, 59, 1) 35%, rgba(10, 10, 10, 1) 100%)`,
                }}
              >
                <CardContent className="p-0 w-full h-full">
                  <div className="absolute w-[40rem] h-[2rem] sm:w-[50rem] sm:h-[2.5rem] lg:w-[60rem] lg:h-[3rem] xl:w-[72rem] xl:h-[3.8rem] top-[1rem] sm:top-[1.2rem] lg:top-[1.4rem] xl:top-[1.5rem] left-[50%] transform -translate-x-1/2 lg:left-[20rem] xl:left-[28.8rem] lg:transform-none">
                    <div className="relative h-[2rem] sm:h-[2.5rem] lg:h-[3rem] xl:h-[3.8rem]">
                      <div className="absolute w-[2rem] h-[40rem] sm:w-[2.5rem] sm:h-[50rem] lg:w-[3rem] lg:h-[60rem] xl:w-[3.8rem] xl:h-[72rem] top-[-19rem] sm:top-[-23.75rem] lg:top-[-28.5rem] xl:top-[-34.1rem] left-[19rem] sm:left-[23.75rem] lg:left-[28.5rem] xl:left-[34.1rem] bg-[#E0A784] rounded-[1rem/20rem] sm:rounded-[1.25rem/25rem] lg:rounded-[1.5rem/30rem] xl:rounded-[1.9rem/36rem] rotate-90 blur-[8rem] sm:blur-[10rem] lg:blur-[12rem] xl:blur-[13.7rem]" />
                      <div className="absolute w-[2rem] h-[40rem] sm:w-[2.5rem] sm:h-[50rem] lg:w-[3rem] lg:h-[60rem] xl:w-[3.8rem] xl:h-[72rem] top-[-19rem] sm:top-[-23.75rem] lg:top-[-28.5rem] xl:top-[-34.1rem] left-[19rem] sm:left-[23.75rem] lg:left-[28.5rem] xl:left-[34.1rem] bg-[#8A5B40] rounded-[1rem/20rem] sm:rounded-[1.25rem/25rem] lg:rounded-[1.5rem/30rem] xl:rounded-[1.9rem/36rem] rotate-90 blur-[2.5rem] sm:blur-[3rem] lg:blur-[3.5rem] xl:blur-[4.2rem]" />
                      <div className="absolute w-[2rem] h-[40rem] sm:w-[2.5rem] sm:h-[50rem] lg:w-[3rem] lg:h-[60rem] xl:w-[3.8rem] xl:h-[72rem] top-[-19rem] sm:top-[-23.75rem] lg:top-[-28.5rem] xl:top-[-34.1rem] left-[19rem] sm:left-[23.75rem] lg:left-[28.5rem] xl:left-[34.1rem] bg-[#C26B3A] rounded-[1rem/20rem] sm:rounded-[1.25rem/25rem] lg:rounded-[1.5rem/30rem] xl:rounded-[1.9rem/36rem] rotate-90 blur-[5.5rem] sm:blur-[7rem] lg:blur-[8rem] xl:blur-[9.2rem]" />
                    </div>
                  </div>

                  <img
                    className="w-full h-full object-cover rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[1.8rem] animate-fade-in-scale animate-delay-800"
                    alt="Image"
                    src="https://ranjanshu.com/docs.png"
                  />

                  <div
                    className="absolute w-[calc(100%+1.6rem)] h-[12rem] sm:h-[15rem] lg:h-[18rem] xl:h-[21.3rem] top-[18rem] sm:top-[25rem] lg:top-[32rem] xl:top-[37.3rem] -left-[0.8rem]"
                    style={{
                      background: `linear-gradient(180deg, rgba(var(--dark-background-rgb),0) 0%, rgba(var(--dark-background-rgb),1) 81%)`,
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Navigation bar */}
            <Card
              className="flex flex-col w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-[80rem] xl:w-[89.3rem] items-start gap-[0.8rem] sm:gap-[1rem] pl-[1rem] sm:pl-[1.2rem] lg:pl-[1.6rem] pr-[0.8rem] sm:pr-[1rem] lg:pr-[1.2rem] py-[0.8rem] sm:py-[1rem] absolute top-[1.5rem] sm:top-[2rem] lg:top-[2.5rem] xl:top-[3rem] left-[1rem] sm:left-[2rem] lg:left-[50%] lg:transform lg:-translate-x-1/2 xl:left-[27.4rem] xl:transform-none rounded-[3rem] sm:rounded-[4rem] lg:rounded-[5rem] xl:rounded-[11.938rem] border-none backdrop-blur-[8rem] sm:backdrop-blur-[10rem] lg:backdrop-blur-[12.63rem] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8rem)_brightness(100%)] sm:[-webkit-backdrop-filter:blur(10rem)_brightness(100%)] lg:[-webkit-backdrop-filter:blur(12.63rem)_brightness(100%)] animate-fade-in-down"
              style={{
                background: `linear-gradient(90deg, var(--dark-background) 0%, var(--accent-dark-brown) 100%)`,
                borderRadius: "5rem",
                position: "relative",
                height: "5rem",
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
                  inset: "0.2rem",
                  height: "calc(100% - 0.4rem)",
                  width: "calc(100% - 0.4rem)",
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
                  <div className="relative w-[8rem] sm:w-[10rem] lg:w-[12rem] h-[3rem] sm:h-[3.5rem] lg:h-[4.4rem] animate-fade-in-left animate-delay-100">
                    <div
                      className="absolute w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] lg:w-[4.4rem] lg:h-[4.4rem] top-0 left-0 rounded-[5rem] sm:rounded-[8rem] lg:rounded-[10rem] overflow-hidden"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <img
                        className="absolute scale-75 left-0"
                        alt="Abstract"
                        src="/stellar.png"
                        width="6rem"
                        height="6rem"
                        style={{
                          width: "6rem",
                          height: "6rem",
                        }}
                      />
                    </div>

                    <h1 className="absolute w-[4.5rem] sm:w-[5.5rem] lg:w-[6.7rem] h-[1.2rem] sm:h-[1.3rem] lg:h-[1.5rem] top-[0.8rem] sm:top-[1rem] lg:top-[1rem] left-[3.5rem] sm:left-[4.2rem] lg:left-[5.1rem] text-white font-bold text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]">
                      StellerUI
                    </h1>
                  </div>

                  {/* Right side actions */}
                  <div className="inline-flex items-center justify-end gap-[0.8rem] sm:gap-[1.2rem] lg:gap-[1.6rem] relative flex-[0_0_auto] animate-fade-in-right animate-delay-100">
                    <img
                      className="relative w-[1.8rem] h-[1.8rem] sm:w-[2rem] sm:h-[2rem] lg:w-[2.4rem] lg:h-[2.4rem] hidden sm:block"
                      alt="Icon container"
                      src="/icon-container-1.svg"
                    />

                    <Button
                      onClick={() => setIsWaitlistModalOpen(true)}
                      className="h-[3rem] sm:h-[4rem] lg:h-[5.2rem] px-[1.2rem] sm:px-[1.8rem] lg:px-[2.4rem] py-[0.8rem] sm:py-[1.2rem] lg:py-[1.6rem] relative rounded-[5rem] sm:rounded-[8rem] lg:rounded-[10rem] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <span className="relative w-fit mt-[-0.1rem] [font-family:'Instrument_Sans',Helvetica] font-semibold text-gray-90 text-[1rem] sm:text-[1.3rem] lg:text-[1.7rem] tracking-[0] leading-[1.2rem] sm:leading-[1.6rem] lg:leading-[2.04rem] whitespace-nowrap">
                        <span className="sm:hidden">Join</span>
                        <span className="hidden sm:inline">Join the waitlist</span>
                      </span>
                    </Button>
                  </div>

                  {/* Navigation menu - hidden on mobile and small tablets */}
                  <nav className="hidden lg:inline-flex items-center gap-[1.8rem] xl:gap-[2.4rem] absolute top-[1.2rem] xl:top-[1.5rem] left-[14rem] xl:left-[18.7rem] animate-fade-in-up animate-delay-200">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-medium text-${
                          item.active ? "white" : "gray-70"
                        } text-[1.4rem] xl:text-[1.6rem] tracking-[0] leading-[1.8rem] xl:leading-[2.24rem] whitespace-nowrap transition-colors duration-200 hover:text-white`}
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