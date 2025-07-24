"use client"

import { FaStar } from "react-icons/fa";
import Link from "next/link";

const stats = [
  { value: "100+", label: "Happy clients" },
  { value: "$250m", label: "revenue added" },
  { value: "4.8", label: "Average Rating" },
];

const testimonials = [
  {
    name: "Mark Caputo",
    role: "Nuro Deep",
    image: null, // placeholder
    rating: 5.0,
    text: "We launched our MVP in record time. The process was fast, focused, and we started getting real user feedback within weeks!",
  },
  {
    name: "Daniel Muretto",
    role: "Email AI",
    image: null, // placeholder
    rating: 4.7,
    text: "Their validation-first approach saved us months of wasted development. We built only what mattered and quickly found product-market fit.",
  },
  {
    name: "Vivek Dixit",
    role: "Finc",
    image: null, // placeholder
    rating: 5.0,
    text: "The automation and AI integrations were a game-changer. Our MVP was not just a prototype, but a scalable product ready for growth.",
  },
  {
    name: "Lily Johnson",
    role: "Phantom",
    image: null, // placeholder
    rating: 5.0,
    text: "We went from idea to live MVP in under a month. The team’s expertise in MVP development and real-world results exceeded our expectations.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-24 px-3 md:px-0 bg-transparent">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Heading, stats, CTA */}
        <div className="flex-1 flex flex-col items-start justify-start max-w-xl w-full">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-black/80 border border-neutral-700 text-[10px] text-white font-normal tracking-wide uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            Happy Clients
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-normal mb-1" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '2.2rem' }}>
            <span className="text-white">Clients</span> <span className="text-neutral-400">Love me</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-6" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '0.85rem' }}>
            Trusted by 100+ happy clients, adding $250M+ in revenue.
          </p>
          <div className="flex flex-row gap-3 w-full mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center rounded-xl px-6 py-4 min-w-[80px] bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)]">
                <span className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '1.2rem' }}>{stat.value}</span>
                <span className="text-[10px] md:text-xs text-white/70 mt-1" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '0.7rem' }}>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-3 w-full">
            <Link href="/work" className="px-4 py-1.5 rounded-full text-white font-normal text-sm transition bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '0.85rem' }}>
              See All Projects
            </Link>
            <a href="https://cal.com/mvpstudio.in/30min" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-full text-white font-normal text-sm transition bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '0.85rem' }}>
              Contact Now
            </a>
          </div>
        </div>
        {/* Right: Testimonial Cards */}
        <div className="flex-1 flex flex-col gap-5 w-full">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl p-4 flex flex-col md:flex-row gap-3 items-start bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)]">
              <div className="flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                  <span className="text-white font-bold text-sm" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '0.7rem' }}>{t.name}</span>
                  <span className="text-white/60 text-[10px] md:ml-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '0.7rem' }}>{t.role}</span>
                </div>
                <div className="flex items-center gap-1 mt-1 mb-1">
                  <span className="text-white/80 text-[10px]" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '0.7rem' }}>{t.rating.toFixed(1)}</span>
                  {[...Array(Math.floor(t.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-2.5 h-2.5" />
                  ))}
                </div>
                <p className="text-white/80 text-[10px]" style={{ fontFamily: 'Satoshi-Regular, sans-serif', fontSize: '0.7rem' }}>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}