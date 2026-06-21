import React, { useState } from 'react';
import { Check, Flame, Trophy, Crown } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = [
    {
      name: 'Free',
      icon: Trophy,
      priceMonthly: 0,
      priceYearly: 0,
      description: 'Perfect for casual players looking to play games at their own pace.',
      features: [
        'Unlimited casual matches',
        'Standard matchmaking',
        'Basic tactics puzzles (5/day)',
        'Ad-supported experience'
      ],
      cta: 'Get Started',
      highlighted: false,
      colorClass: 'border-slate-200 dark:border-slate-800'
    },
    {
      name: 'Premium',
      icon: Flame,
      priceMonthly: 9.99,
      priceYearly: 7.99,
      description: 'The sweet spot for improving players who want deep analysis.',
      features: [
        'Everything in Free',
        'Unlimited AI engine analysis',
        'Advanced, adaptive puzzles',
        'Official tournament entry',
        'Ad-free experience'
      ],
      cta: 'Upgrade to Premium',
      highlighted: true,
      colorClass: 'border-primary ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-900 shadow-xl'
    },
    {
      name: 'Grandmaster',
      icon: Crown,
      priceMonthly: 29.99,
      priceYearly: 23.99,
      description: 'For competitive players who want professional 1-on-1 coaching.',
      features: [
        'Everything in Premium',
        'Personalized coaching feedback',
        'Video masterclasses access',
        'Priority matchmaking queue',
        'Exclusive profile badge'
      ],
      cta: 'Become Grandmaster',
      highlighted: false,
      colorClass: 'border-slate-200 dark:border-slate-800'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Choose Your Mastery Level
          </h2>
          <p className="text-lg text-slate-650 dark:text-slate-400">
            Select the plan that fits your ambition. Upgrade or downgrade anytime you want.
          </p>
        </div>

        {/* Toggle billing */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-sm font-semibold transition-colors duration-250 ${billingCycle === 'monthly' ? 'text-primary' : 'text-slate-500'}`}>
            Billed Monthly
          </span>
          <button
            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
            className="w-14 h-8 bg-slate-200 dark:bg-slate-800 rounded-full p-1 relative transition-colors cursor-pointer"
            aria-label="Toggle Billing Cycle"
          >
            <div className={`w-6 h-6 bg-primary rounded-full shadow-md transition-all duration-300 transform ${
              billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
          <span className={`text-sm font-semibold transition-colors duration-250 flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-primary' : 'text-slate-500'}`}>
            Billed Annually
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;

            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between p-8 rounded-3xl bg-slate-50 dark:bg-darkSurface border transition-all duration-300 hover:scale-[1.03] text-left ${plan.colorClass}`}
              >
                {plan.highlighted && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-xs font-extrabold uppercase tracking-widest px-4 py-1 bg-primary text-white rounded-full shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${
                      plan.highlighted ? 'text-primary' : 'text-slate-500'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-5 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-800 dark:text-white">
                      ${price}
                    </span>
                    <span className="text-sm text-slate-400 font-semibold">
                      / month
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call-to-action button */}
                <button className={`w-full py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-250 cursor-pointer ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-secondary text-white shadow-primary/20 hover:scale-105'
                    : 'bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-250 dark:border-slate-800 hover:scale-105'
                }`}>
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;