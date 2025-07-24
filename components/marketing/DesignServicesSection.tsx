'use client'
import Image from "next/image";
import { FaRegObjectGroup, FaPenSquare, FaRegImage, FaRegWindowRestore } from 'react-icons/fa';

const services = [
  {
    icon: <FaRegObjectGroup className="w-5 h-5 text-white" />,
    title: "MVP Development",
    description: "Developing breathtaking, user-centric MVPs that boost engagement, conversions, and growth, perfectly aligned with your brand",
    image: "/emailai.png",
    imageAlt: "MVP Example",
    imageClass: "object-contain bg-white rounded-xl mt-4"
  },
  {
    icon: <FaPenSquare className="w-5 h-5 text-white" />,
    title: "Logo Design",
    description: "Crafting distinctive, scalable, and impactful logos that embody your brand's identity and vision",
  },
  {
    icon: <FaRegWindowRestore className="w-5 h-5 text-white" />,
    title: "Website Design",
    description: "Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience",
    image: "/nexar.png",
    imageAlt: "Website Example",
    imageClass: "object-cover rounded-xl mt-4"
  },
  {
    icon: <FaRegImage className="w-5 h-5 text-white" />,
    title: "App Development",
    description: " Beautiful, user-friendly apps that people enjoy using—and keep coming back for.",
  },
];

const features = [
  "MVP Development",
  "Web Development",
  "App Development",
  "Cross Platform Development",
  "AI Agents",
  "Automation",
  "SEO",
  "Framer",
  "Optimization",
];

export default function DesignServicesSection() {
  return (
    <section id="development-services" className="w-full py-24 px-3 md:px-0 bg-transparent">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-black/80 border border-neutral-700 text-xs text-white font-normal tracking-wide uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Development Services
        </span>
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-6xl font-normal text-center mb-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Development <span className="text-neutral-400">Services</span>
        </h2>
        {/* Subtitle */}
        <p className="text-white/60 text-base md:text-lg text-center max-w-2xl mb-10" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Explore a suite of design services to elevate your brand.
        </p>
        {/* Contact Now Button */}
        
        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {services.map((service, idx) => (
            <div key={service.title} className="rounded-2xl p-6 flex flex-col h-full bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)]">
              <div className="flex items-center mb-3">
                {service.icon}
                <span className="ml-2 text-white text-lg font-bold" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{service.title}</span>
              </div>
              <p className="text-white/80 text-sm mb-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{service.description}</p>
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={200}
                  className={(service.title === "MVP Development" ? "object-left " : "") + service.imageClass + " w-full max-h-40 object-cover"}
                />
              )}
            </div>
          ))}
        </div>
        {/* Features Infinite Scroll Row */}
        <div className="w-full overflow-x-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-2 md:gap-3">
            {features.concat(features).map((feature, idx) => (
              <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] border border-neutral-800 text-white/80 text-xs font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 