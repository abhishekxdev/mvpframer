import { FaRegListAlt, FaRocket, FaRegSmile, FaRegPaperPlane } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import Link from "next/link";

const steps = [
  {
    icon: <FaRegListAlt className="w-6 h-6 text-white" />,
    title: 'Discuss Your Idea',
    description: `Tell me your unique vision, and I'll create stunning, functional MVP that perfectly align with your goals`,
    step: 'Step 2',
  },
  {
    icon: <FaRocket className="w-6 h-6 text-white" />,
    title: 'Kickstart Development',
    description: `I expertly transform your idea into a powerful, scalable solution, fully ready to launch`,
    step: 'Step 3',
  },
  {
    icon: <FaRegPaperPlane className="w-6 h-6 text-white" />,
    title: 'And Hand Over',
    description: `Receive a fully tested, polished, quality product tailored to you, with ongoing support`,
    step: 'Step 4',
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full py-24 px-3 md:px-0 bg-transparent">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-black/80 border border-neutral-700 text-xs text-white font-normal tracking-wide uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          How it works
        </span>
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-6xl font-normal text-center mb-4" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          <span className="text-white">Process</span> <span className="text-neutral-400">Is Everything</span>
        </h2>
        {/* Subtitle */}
        <p className="text-white/60 text-base md:text-lg text-center max-w-2xl mb-14" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Simple, streamlined process is what get's you results
        </p>
        {/* Steps Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {/* Step 1 (Contact) */}
          <div className="relative rounded-xl p-4 md:p-8 flex flex-col justify-between min-h-[120px] md:min-h-[260px] bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)]">
            <span className="absolute top-2 right-2 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-black/60 border border-neutral-700 text-white text-base md:text-lg font-bold">1</span>
            <div className="mb-2 md:mb-4">
              <h3 className="text-white text-base md:text-lg font-bold mb-1 md:mb-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Contact</h3>
              <p className="text-white/80 text-xs md:text-sm">Book a call to discuss your goals, and ideas.</p>
            </div>
            <div className="mt-auto">
              <hr className="border-t border-neutral-800 mb-2" />
              <span className="inline-block px-3 py-0.5 rounded-full border border-neutral-700 text-xs text-white/60">Step 1</span>
            </div>
          </div>
          {/* Step 2-4 */}
          {steps.map((step, idx) => (
            <div key={idx} className="relative rounded-xl p-4 md:p-8 flex flex-col justify-between min-h-[120px] md:min-h-[260px] bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)]">
              <span className="absolute top-2 right-2 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-black/60 border border-neutral-700 text-white text-base md:text-lg font-bold">{idx + 2}</span>
              <div className="mb-2 md:mb-4">
                <h3 className="text-white text-base md:text-lg font-bold mb-1 md:mb-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{step.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{step.description}</p>
              </div>
              <div className="mt-auto">
                <hr className="border-t border-neutral-800 mb-2" />
                <span className="inline-block px-3 py-0.5 rounded-full border border-neutral-700 text-xs text-white/60">{step.step}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Callout Card */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 bg-black/80 rounded-2xl shadow-lg p-6 md:p-8 mt-8 border border-neutral-700">
          <div className="flex flex-col items-start">
            <span className="flex items-center text-white text-base font-bold mb-1" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              {/* Removed emoji icon */} Our team is with you 
            </span>
            <span className="text-white/70 text-sm" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              alongside at each step for seamless experience
            </span>
          </div>
          <div className="flex flex-row items-center gap-3 mt-4 md:mt-0">
            <Link href="/work" className="px-6 py-2 rounded-full text-white font-normal text-base transition bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              See All Projects
            </Link>
            <a href="https://cal.com/mvpstudio.in/30min" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full text-white font-normal text-base transition bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 