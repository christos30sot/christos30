"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "Is Run Smart suitable for beginners or just experienced runners?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Run Smart works for all fitness levels. Whether you&apos;re training for your first 5K or targeting a sub-3-hour marathon, our AI-powered platform adapts to your current fitness level, schedule constraints, and goals. The app scales the training intensity and volume appropriately for your experience.
      </div>
    ),
  },
  {
    question: "How much time do I need to commit each week?",
    answer: (
      <p>
        Our training plans are flexible and designed for busy professionals. Most plans range from 3-6 hours per week, broken into manageable sessions that fit around work and family commitments. You tell us your availability, and we optimize your training within those constraints.
      </p>
    ),
  },
  {
    question: "What makes Run Smart different from free training plans online?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Run Smart provides personalized, adaptive training that adjusts to your progress, recovery status, and schedule changes. Unlike static plans, we integrate training, nutrition, and recovery strategies tailored to you. Plus, our evidence-based approach eliminates information overload and conflicting advice.
      </div>
    ),
  },
  {
    question: "Do I need special equipment or a gym membership?",
    answer: (
      <p>
        No special equipment required beyond good running shoes. All training sessions can be completed outdoors or on a treadmill. Recovery exercises use bodyweight movements, though we provide alternatives if you have access to basic equipment like resistance bands or foam rollers.
      </p>
    ),
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: (
      <p>
        Absolutely. You can cancel your subscription at any time with no penalties or hidden fees. Your access continues until the end of your current billing period. We also offer a 7-day free trial so you can experience the full platform risk-free before committing.
      </p>
    ),
  },
  {
    question: "Will this help me avoid injuries?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Injury prevention is built into every aspect of Run Smart. Our progressive training loads, mandatory recovery protocols, and nutrition guidance work together to keep you healthy. We monitor training stress and automatically adjust intensity when you need extra recovery. That said, always listen to your body and consult a healthcare professional for any concerns.
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-heading font-extrabold text-neutral">
            Questions from runners like you
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
