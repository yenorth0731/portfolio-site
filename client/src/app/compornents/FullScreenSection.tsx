"use client";
import Image from "next/image";
import { FadeInBottom } from "./FadeInBottom";
import { Link as Scroll } from "react-scroll";

interface FullScreenSectionProps {
  imageSrc: string;
  altText: string;
  heading: string;
  description: string;
  toScroll: string;
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({
  imageSrc,
  altText,
  heading,
  description,
  toScroll,
}) => {
  return (
    <section
      className="flex w-full h-screen items-center justify-center"
      id="top"
    >
      <div className="fixed  w-full h-screen ">
        <Image src={imageSrc} alt={altText} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center">
        <FadeInBottom>
          <div className="max-w-3xl px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{heading}</h1>
            <p className="text-lg md:text-xl">{description}</p>
            <Scroll to={toScroll} smooth={true} duration={600}>
              <button className="mt-4 focus:outline-none">
                <Image
                  src="/underArrow2.png"
                  alt="Button"
                  width={40}
                  height={40}
                />
              </button>
            </Scroll>
          </div>
        </FadeInBottom>
      </div>
    </section>
  );
};

export default FullScreenSection;
