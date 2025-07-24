import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";

export default function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.header}
          className={
            item.className +
            (i > 1 ? " hidden md:block" : "")
          }
        />
      ))}
    </BentoGrid>
  );
}

const ArrowIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white drop-shadow-lg"
    style={{ transform: 'rotate(-30deg)' }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const projectImages = [
  { src: "/projectsync.JPG", alt: "ProjectSync" },
  { src: "/emailai.png", alt: "Email AI" },
  { src: "/horoscope.png", alt: "Nexar" },
  { src: "/autobot.png", alt: "Nurodeep" },
];

const items = [
  {
    header: (
      <div className="relative w-full h-full">
        <Image
          src={projectImages[0].src}
          alt={projectImages[0].alt}
          width={800}
          height={400}
          className="w-full h-full object-cover rounded-xl"
          priority
        />
        <Link href="/work" className="absolute top-2 right-2 z-10 p-1 bg-black/60 rounded-full hover:bg-black/80 transition" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
          <ArrowIcon />
        </Link>
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    header: (
      <div className="relative w-full h-full">
        <Image
          src={projectImages[1].src}
          alt={projectImages[1].alt}
          width={800}
          height={400}
          className="w-full h-full object-cover object-left rounded-xl"
        />
        <Link href="/work" className="absolute top-2 right-2 z-10 p-1 bg-black/60 rounded-full hover:bg-black/80 transition" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
          <ArrowIcon />
        </Link>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    header: (
      <div className="relative w-full h-full">
        <Image
          src={projectImages[2].src}
          alt={projectImages[2].alt}
          width={800}
          height={400}
          className="w-full h-full object-cover object-left rounded-xl"
        />
        <Link href="/work" className="absolute top-2 right-2 z-10 p-1 bg-black/60 rounded-full hover:bg-black/80 transition" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
          <ArrowIcon />
        </Link>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    header: (
      <div className="relative w-full h-full">
        <Image
          src={projectImages[3].src}
          alt={projectImages[3].alt}
          width={800}
          height={400}
          className="w-full h-full object-cover rounded-xl"
        />
        <Link href="/work" className="absolute top-2 right-2 z-10 p-1 bg-black/60 rounded-full hover:bg-black/80 transition" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
          <ArrowIcon />
        </Link>
      </div>
    ),
    className: "md:col-span-2",
  },
]; 