'use client'
import { FaCheck, FaTimes } from 'react-icons/fa';

const comparisons = [
  [
    {
      icon: <FaCheck className="w-4 h-4 text-white/80" />,
      title: 'Rapid MVP Delivery',
      description: 'Launch your MVP in weeks, not months, with a proven, streamlined process built for speed.',
    },
    {
      icon: <FaTimes className="w-4 h-4 text-white/80" />,
      title: 'Slow Traditional Teams',
      description: 'Conventional agencies drag projects out, delaying your market entry and feedback.',
    },
  ],
  [
    {
      icon: <FaCheck className="w-4 h-4 text-white/80" />,
      title: 'Validation-First Approach',
      description: 'We focus on building what matters for user and market validation, not just features for features’ sake.',
    },
    {
      icon: <FaTimes className="w-4 h-4 text-white/80" />,
      title: 'Feature Overload',
      description: 'Others overbuild, wasting time and budget on features you may not need.',
    },
  ],
  [
    {
      icon: <FaCheck className="w-4 h-4 text-white/80" />,
      title: 'Tech & Automation Experts',
      description: 'Get access to automation, AI, and scalable tech stacks that accelerate your MVP and future growth.',
    },
    {
      icon: <FaTimes className="w-4 h-4 text-white/80" />,
      title: 'Outdated Methods',
      description: 'Legacy approaches and manual processes slow you down and limit scalability.',
    },
  ],
  [
    {
      icon: <FaCheck className="w-4 h-4 text-white/80" />,
      title: 'Real-World Results',
      description: 'We build MVPs that attract users, investors, and traction—not just pretty prototypes.',
    },
    {
      icon: <FaTimes className="w-4 h-4 text-white/80" />,
      title: 'Unproven Outcomes',
      description: 'Many agencies deliver nice demos, but not products that win in the real world.',
    },
  ],
];

export default function WhyMeSection() {
  return (
    <section className="w-full py-24 px-3 md:px-0 bg-transparent">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-black/80 border border-neutral-700 text-xs text-white font-normal tracking-wide uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Why choose MVP Studio
        </span>
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-6xl font-normal text-center mb-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Why us as <span className="text-neutral-400">Development Partner</span>
        </h2>
        {/* Subtitle */}
        <p className="text-white/60 text-base md:text-lg text-center max-w-2xl mb-10" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
         
        </p>
        {/* Comparison Grid */}
        <div className="w-full flex flex-col gap-6">
          {comparisons.map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 rounded-2xl overflow-hidden">
              {row.map((item, colIdx) => (
                <div key={colIdx} className="p-6 md:p-8 flex flex-col h-full min-h-[120px] md:min-h-[140px] bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <span className="ml-2 text-white text-lg font-bold" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{item.title}</span>
                  </div>
                  <p className="text-white/80 text-sm" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 