import Link from "next/link"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-10 md:py-16 bg-transparent px-3 md:px-0">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-2 md:px-4">
        {/* Left: Text and Services */}
        <div className="flex-1 flex flex-col items-start max-w-xl w-full">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-black/80 border border-neutral-700 text-[10px] text-white font-normal tracking-wide uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            Let's Connect
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-normal mb-4" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            <span className="text-white">Let's Grow</span> <span className="text-neutral-400">Together</span>
          </h2>
          <div className="w-full border-t border-neutral-800 my-2" />
          {/* Services */}
          <div className="w-full flex flex-col gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-white text-lg md:text-xl font-bold" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Web Design</span>
                <span className="bg-black/80 border border-neutral-700 text-[10px] text-white rounded-full px-2 py-0.5 font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Starting from $1,999</span>
              </div>
              <p className="text-white/60 text-sm md:text-base" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Showcasing sleek, high-performance MVPs tailored for impact</p>
            </div>
            <div className="w-full border-t border-neutral-800" />
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-white text-lg md:text-xl font-bold" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Framer Development</span>
                <span className="bg-black/80 border border-neutral-700 text-[10px] text-white rounded-full px-2 py-0.5 font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Starting from $1,500</span>
              </div>
              <p className="text-white/60 text-sm md:text-base" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Building visually stunning, user-focused websites that elevate brands.</p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-row gap-4 w-full mt-2">
            <Link href="/work" className="rounded-full px-6 py-3 text-base font-normal w-full md:w-auto bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 text-white border border-white/10 transition hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              See All Projects
            </Link>
            <a href="https://cal.com/mvpstudio.in/30min" target="_blank" rel="noopener noreferrer" className="rounded-full px-6 py-3 text-base font-normal w-full md:w-auto bg-gradient-to-r from-neutral-200 to-neutral-400 text-black border border-neutral-300 transition hover:from-neutral-100 hover:to-neutral-300 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Get Started Now
            </a>
          </div>
        </div>
        {/* Right: Image Showcase */}
        <div className="flex-1 flex justify-center items-center w-full hidden md:flex">
          <div className="rounded-3xl bg-black/80 border border-neutral-800 shadow-2xl p-1 md:p-2 w-full max-w-2xl aspect-video flex items-center justify-center relative overflow-hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full">
              <Image src="/Phantom.png" alt="Showcase 1" width={600} height={400} className="rounded-xl w-full h-full object-cover" />
              <Image src="/emailai.png" alt="Showcase 2" width={600} height={400} className="rounded-xl w-full h-full object-cover" />
              <Image src="/crm.png" alt="Showcase 3" width={600} height={400} className="rounded-xl w-full h-full object-cover" />
              <Image src="/projectsync.JPG" alt="Showcase 4" width={600} height={400} className="rounded-xl w-full h-full object-cover" />
            </div>
            <span className="absolute bottom-4 right-6 bg-black/60 text-white text-lg font-bold px-4 py-1.5 rounded-2xl flex items-center gap-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.08"/><path d="M8.5 12.5L11 15l4.5-4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Fade
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}