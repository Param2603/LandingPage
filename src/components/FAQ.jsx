import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Is the platform free?',
    answer: 'Yes! The core gaming experience is 100% free. You can play unlimited casual and rated matches, match with friends, and solve up to 5 daily puzzles without ever paying anything.'
  },
  {
    question: 'Can I play with friends?',
    answer: 'Absolutely! You can challenge any friend by sharing a unique custom game link, or search for their username directly on the platform to send a match request. You can also customize time controls and board colors for friend matches.'
  },
  {
    question: 'Do puzzles improve rating?',
    answer: 'Yes, solving tactical puzzles regularly trains your brain to spot critical pins, forks, and checkmating patterns in live games. Our adaptive algorithm serves puzzles tailored exactly to your tactical rating level.'
  },
  {
    question: 'Is mobile supported?',
    answer: 'Yes, ChessMaster is fully responsive and optimized for mobile devices. You can play matches, solve puzzles, and review analysis directly in your mobile browser without downloading any apps.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-lightBg dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have questions about ChessMaster? We have answers. If you need anything else, feel free to contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-darkSurface border border-slate-200/50 dark:border-slate-800/50 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-200 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 transition-colors shrink-0 ${isOpen ? 'text-primary' : 'text-slate-400'}`} />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-450 dark:text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-primary' : 'rotate-0'
                  }`} />
                </button>

                {/* Answer content with smooth height transition */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-52 border-t border-slate-200/50 dark:border-slate-800/50' : 'max-h-0'
                } overflow-hidden`}>
                  <p className="p-6 text-sm leading-relaxed text-slate-650 dark:text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
