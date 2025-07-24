"use client"

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "MVP Standard Plan",
    price: "$1,999",
    description: "Perfect for validating your idea quickly",
    features: [
      "Core features only",
      "Basic UI/UX design",
      "2 Weeks development",
      "Basic testing",
      "Deployment support",
      "1 month of support",
    ],
    highlighted: false,
    cta: "Book a Call",
    href: "https://cal.com/mvpstudio.in/30min",
  },
  {
    name: "MVP Growth Retainer Plan",
    price: "$2,999",
    description: "Ideal for growing businesses",
    features: [
      "All MVP features",
      "Advanced UI/UX design",
      "Continuous development",
      "Comprehensive testing",
      "Performance optimization",
      "3 months of support",
      "Analytics integration",
      "Basic SEO setup",
    ],
    highlighted: true,
    cta: "Book a Call",
    href: "https://cal.com/mvpstudio.in/30min",
  },
];

export function PricingSection() {
  return (
    <section id="plans" className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-3 md:px-0">
      <div className="w-full max-w-5xl mx-auto z-10 px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-lg font-normal leading-7 text-white/80" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            Pricing
          </h2>
        </div>
        <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-center text-white" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Simple Pricing. Maximum Value.
        </h2>
        <div className="isolate mt-16 grid max-w-md grid-cols-1 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col justify-between rounded-3xl p-10 ring-1 ring-white/20 xl:p-12 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)]"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-full bg-neutral-700 px-6 py-2 text-base font-semibold leading-6 text-white" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  Most popular
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold leading-8 text-white" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  {plan.name}
                </h3>
                <p className="mt-6 text-base leading-6 text-white/80" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  {plan.description}
                </p>
                <p className="mt-8 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-white" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                    {plan.price}
                  </span>
                  <span className="text-base font-semibold leading-6 text-white/80" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                    /project
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-10 space-y-4 text-base leading-6 text-white/80"
                  style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-6 flex-none text-white/60"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block rounded-full px-6 py-3 text-center text-base font-normal text-white border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}