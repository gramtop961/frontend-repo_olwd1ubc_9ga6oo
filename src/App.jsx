import { useRef } from "react";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import AuthPanel from "./components/AuthPanel";
import DashboardPreview from "./components/DashboardPreview";

function App() {
  const authRef = useRef(null);

  const scrollToAuth = () => {
    if (authRef.current) authRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onAuthClick={scrollToAuth} />

      <main>
        <Hero onGetStarted={scrollToAuth} />
        <section id="features" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Email OTP Auth"
              desc="Frictionless sign-in with secure, expiring one-time codes."
            />
            <FeatureCard
              title="Roles & Access"
              desc="Separate experiences for customers and administrators."
            />
            <FeatureCard
              title="Subscriptions"
              desc="Plans, billing cycles, and renewals baked into your account."
            />
          </div>
        </section>
        <div ref={authRef}>
          <AuthPanel />
        </div>
        <DashboardPreview />
        <Pricing />
      </main>

      <footer id="security" className="py-10 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex items-center justify-between">
          <p>
            © {new Date().getFullYear()} Nimbus SaaS. All rights reserved.
          </p>
          <p>
            Email OTP • JWT sessions • Refresh tokens • Least-privilege roles
          </p>
        </div>
      </footer>
    </div>
  );
}

function Hero({ onGetStarted }) {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Launch your SaaS with pricing, auth, and dashboards built-in
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Passwordless email OTP authentication, role-based dashboards for
            customers and admins, and a flexible subscription system ready to
            grow with you.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              Get started free
            </button>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
            >
              See pricing
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            No credit card required. Email OTP in under a minute.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-500">Auth</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">OTP</p>
                <p className="text-xs text-slate-500">Passwordless</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-500">Subscriptions</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">Pro</p>
                <p className="text-xs text-slate-500">Active</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-500">Admin</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">Roles</p>
                <p className="text-xs text-slate-500">RBAC</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-500">API</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">JWT</p>
                <p className="text-xs text-slate-500">Refresh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="font-medium text-slate-900">{title}</p>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  );
}

export default App;
