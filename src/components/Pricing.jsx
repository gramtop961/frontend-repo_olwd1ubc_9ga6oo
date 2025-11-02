import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    priceMonthly: 9,
    priceYearly: 90,
    tagline: "Everything to get started",
    features: ["Email OTP login", "Basic analytics", "Community support"],
  },
  {
    name: "Pro",
    priceMonthly: 29,
    priceYearly: 290,
    tagline: "Grow with advanced features",
    highlighted: true,
    features: [
      "Email OTP login",
      "Team workspaces",
      "Usage-based dashboards",
      "Priority support",
    ],
  },
  {
    name: "Business",
    priceMonthly: 79,
    priceYearly: 790,
    tagline: "For teams and organizations",
    features: [
      "Email OTP login",
      "Admin controls",
      "SAML/SCIM (coming soon)",
      "SLA & dedicated support",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-slate-600">
            Choose a plan that scales with your business. Cancel anytime.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 p-1 bg-white">
            <button
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !yearly ? "bg-slate-900 text-white" : "text-slate-700"
              }`}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                yearly ? "bg-slate-900 text-white" : "text-slate-700"
              }`}
              onClick={() => setYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border ${
                plan.highlighted ? "border-indigo-300" : "border-slate-200"
              } bg-white shadow-sm p-6 flex flex-col`}
            >
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-600">{plan.tagline}</p>
                <div className="mt-5">
                  <span className="text-4xl font-bold text-slate-900">
                    ${yearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-slate-500">/{yearly ? "year" : "mo"}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="mt-0.5 text-emerald-600" size={18} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`mt-6 inline-flex justify-center items-center rounded-lg px-4 py-2.5 text-sm font-medium border transition-colors ${
                plan.highlighted
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-600"
                  : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200"
              }`}>
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
