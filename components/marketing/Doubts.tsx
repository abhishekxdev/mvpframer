"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { FaStar, FaUser } from "react-icons/fa";
import Link from "next/link";

const faqs = [
  {
    question: "Who Do You Work With?",
    answer: "We primarily work with SaaS companies, tech startups, and digital-first businesses who value design as a strategic investment. Our clients range from funded startups to established companies looking to elevate their design."
  },
  {
    question: "What's Your Design Process Like?",
    answer: "Our process starts with deep research into your business, users, and competition. We then move through strategy, wireframing, visual design, prototyping, and testing. We maintain transparent communication throughout with regular updates and feedback sessions."
  },
  {
    question: "How Long Does a Typical Project Take?",
    answer: "Timelines vary by project scope. A landing page typically takes 2 weeks, a comprehensive website 3-4 weeks, and app designs 4-6 weeks. Our MVP package is guaranteed to deliver in 2 weeks. We're transparent about timelines from the beginning."
  },
  {
    question: "Do You Offer Refunds?",
    answer: "For our Landing Page and Product Design services, we offer a satisfaction guarantee. If you're not happy with the initial concepts, we'll refund your deposit. For our MVP package, we guarantee delivery in 2 weeks or you get a full refund."
  },
  {
    question: "When Can You Start?",
    answer: "We typically can start new projects within 1-2 weeks of signing. For urgent projects, we sometimes have fast-track availability with a rush fee. The best way to find out is to book an intro call with us."
  },
  {
    question: "How Do We Communicate?",
    answer: "We use Slack for daily communication, Notion for project management, and schedule regular video calls for important discussions and presentations. You'll have direct access to your design team throughout the project."
  },
  {
    question: "Do You Offer On-Going Support?",
    answer: "Yes, many of our clients stay with us long-term. After the initial project, we offer flexible monthly retainers that include ongoing design work, updates, and optimizations based on user feedback and performance data."
  }
]

const testimonial = {
  name: "Rayn",
  role: "Autobot",
  image: null, // placeholder
  rating: 5.0,
  text: "Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement"
};

export function FaqSection() {
  return (
    <section className="w-full py-12 md:py-16 px-3 md:px-0 bg-transparent" id="faq">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-start">
        {/* Left: Testimonial Card and Buttons */}
        <div className="flex-1 flex flex-col items-start max-w-md w-full">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-black/80 border border-neutral-700 text-[10px] text-white font-normal tracking-wide uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            FAQ Section
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-normal mb-1" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            <span className="text-white">Questions,</span> <span className="text-neutral-400">Answers</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-6" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            Get quick answers to your most pressing questions
          </p>
          <div className="w-full mb-6">
            <div className="rounded-2xl bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] p-4 flex flex-row gap-3 items-center mb-4">
              <div className="flex-1 flex flex-col">
                <span className="text-white font-bold text-base" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{testimonial.name}</span>
                <span className="text-white/60 text-xs" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{testimonial.role}</span>
                <div className="flex items-center gap-1 mt-1 mb-1">
                  <span className="text-white/80 text-xs" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{testimonial.rating.toFixed(1)}</span>
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-3 h-3" />
                  ))}
                </div>
                <p className="text-white/80 text-xs" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{testimonial.text}</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 w-full">
              <Link href="/work" className="rounded-full px-5 py-1.5 text-sm font-normal w-full md:w-auto bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 text-white border border-white/10 transition hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                See All Projects
              </Link>
              <a href="https://cal.com/mvpstudio.in/30min" target="_blank" rel="noopener noreferrer" className="rounded-full px-5 py-1.5 text-sm font-normal w-full md:w-auto bg-gradient-to-r from-neutral-200 to-neutral-400 text-black border border-neutral-300 transition hover:from-neutral-100 hover:to-neutral-300 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                Contact Now
              </a>
            </div>
          </div>
        </div>
        {/* Right: FAQ Accordion */}
        <div className="flex-1 w-full">
          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/20 rounded-lg px-3 py-1.5 md:px-5 md:py-3 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-helvetica font-normal hover:text-white hover:no-underline text-white text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-helvetica pt-1 pb-1 md:pb-3 text-left text-xs md:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FaqSection;
