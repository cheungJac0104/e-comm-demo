'use client';

import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const SubscriptionPage = () => {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = {
    monthly: [
      { id: 'basic', name: 'Basic', price: 9, features: ['Projects'], features_description: [' Unlimited Projects'] },
      { id: 'pro', name: 'Professional', price: 29, features: ['Projects', 'Team Members', 'Analytics'], features_description: ['Unlimited Projects', '10 Team Members', 'Advanced Analytics'] },
      { id: 'enterprise', name: 'Enterprise', price: 99, features: ['Projects', 'Team Members', 'Analytics', 'Support', 'Custom Domain'], features_description: ['Unlimited Projects', 'Unlimited Team Members', 'Advanced Analytics', '24/7 Support', 'Custom Domain'] }
    ],
    annual: [
      { id: 'basic', name: 'Basic', price: 90, features: ['Projects'], features_description: ['Unlimited Projects'] },
      { id: 'pro', name: 'Professional', price: 290, features: ['Projects', 'Team Members', 'Analytics'], features_description: ['Unlimited Projects', 'Unlimited Team Members', 'Advanced Analytics'] },
      { id: 'enterprise', name: 'Enterprise', price: 990, features: ['Projects', 'Team Members', 'Analytics', 'Support', 'Custom Domain'], features_description: ['Unlimited Projects', 'Unlimited Team Members', 'Advanced Analytics', '24/7 Support', 'Custom Domain'] }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 mb-8">Start with a free 14-day trial. No credit card required.</p>
          
          {/* Billing Toggle */}
          <div className="flex justify-center items-center mb-12">
            <span className="mr-4 text-gray-700">Billed Monthly</span>
            <button
              onClick={() => setBillingInterval(prev => prev === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <span className={`${
                billingInterval === 'annual' ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
            </button>
            <span className="ml-4 text-gray-700">Billed Annually</span>
            <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">Save 20%</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans[billingInterval].map((plan) => (
            <div
              key={plan.id}
              className={`${
                plan.id === 'pro' 
                  ? 'border-2 border-indigo-600 shadow-xl transform scale-105' 
                  : 'border border-gray-200'
              } bg-white rounded-lg p-8 transition-all hover:shadow-lg`}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="ml-2 text-gray-600">/{billingInterval === 'monthly' ? 'month' : 'year'}</span>
                </div>
                {billingInterval === 'annual' && plan.id !== 'enterprise' && (
                  <p className="text-sm text-gray-600">Equivalent to ${plan.price / 12}/mo</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features_description.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 px-6 rounded-md font-medium ${
                  plan.id === 'pro'
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}
              >
                {selectedPlan === plan.id ? 'Current Plan' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16 bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                {plans[billingInterval].map((plan) => (
                  <th key={plan.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {['Projects', 'Team Members', 'Analytics', 'Support', 'Custom Domain'].map((feature) => (
                <tr key={feature}>
                  <td className="px-6 py-4 text-sm text-gray-700">{feature}</td>
                  {plans[billingInterval].map((plan) => (
                    <td key={plan.id} className="px-6 py-4 text-center">
                      {plan.features.includes(feature) ? (
                        <CheckIcon className="h-5 w-5 text-indigo-600 mx-auto" />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time.'
              },
              {
                question: 'Do you offer team discounts?',
                answer: 'We offer special pricing for teams larger than 20 members. Contact our sales team.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards and PayPal.'
              }
            ].map((faq) => (
              <div key={faq.question} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;