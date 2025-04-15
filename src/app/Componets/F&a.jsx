'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Plus, Minus, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Bexon offer to clients?',
    answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery',
  },
  {
    question: 'How do I get started with Corporate Business?',
    answer:
      'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
  },
  {
    question: 'How do consultants add value to a business?',
    answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery',
  },
  {
    question: 'How long will it take to complete my project?',
    answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery',
  },
  {
    question: 'Can I track the progress of my project?',
    answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-[#edf2f2]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="relative rounded-xl overflow-hidden">
          <div className='top-0 bottom-0 right-0 left-0 bg-teal-600'>
            <Image
              src="/bussiness process bg.jpg"
              alt="Need Help"
              width={600}
              height={500}
              className="w-full h-full object-cover opacity-50"
            />
          </div>
       
          <div className="absolute top-10 left-10 text-white text-3xl font-semibold max-w-sm leading-snug">
            Need Help? Start Here...
          </div>
          <div className="absolute bottom-6 left-6">
            <div className="bg-[#00000076] p-6 rounded-xl text-white w-64">
              <p className="text-lg font-medium mb-2">Get Started Free Call?</p>
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <Phone size={18} />
                </div>
                <a href="tel:1-888-452-1505" className="underline text-sm hover:text-white/80 transition">
                  1-888-452-1505
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg px-6 py-5 shadow transition-colors ${openIndex === index ? 'bg-teal-600 text-white' : 'bg-white'
                }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="font-semibold text-md">{faq.question}</h4>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </div>
              {openIndex === index && faq.answer && (
                <div className="mt-3 text-sm border-t pt-3 opacity-90 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
