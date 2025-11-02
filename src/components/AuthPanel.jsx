import { useMemo, useState } from "react";
import { Mail, KeyRound, Loader2 } from "lucide-react";

export default function AuthPanel() {
  const [step, setStep] = useState("request");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || "", []);

  const requestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Backend endpoint to implement: POST /auth/request-otp { email }
      // await fetch(`${baseUrl}/auth/request-otp`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      await new Promise((r) => setTimeout(r, 600));
      setStep("verify");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Backend endpoint to implement: POST /auth/login-otp { email, otp }
      // const res = await fetch(`${baseUrl}/auth/login-otp`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, otp }) });
      // const data = await res.json(); // { access_token, refresh_token }
      await new Promise((r) => setTimeout(r, 600));
      const data = { access_token: "demo_access_token", refresh_token: "demo_refresh_token" };
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      setStep("done");
    } finally {
      setLoading(false);
    }
  };

  const renewSession = async () => {
    setLoading(true);
    try {
      // Backend endpoint to implement: POST /auth/renew { refresh_token }
      // const res = await fetch(`${baseUrl}/auth/renew`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ refresh_token: localStorage.getItem('refresh_token') }) });
      await new Promise((r) => setTimeout(r, 600));
      localStorage.setItem("access_token", "demo_access_token_refreshed");
    } finally {
      setLoading(false);
    }
  };

  const validateSession = async () => {
    setLoading(true);
    try {
      // Backend endpoint to implement: GET /auth/validate (Authorization: Bearer <access_token>)
      // await fetch(`${baseUrl}/auth/validate`, { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } });
      await new Promise((r) => setTimeout(r, 600));
      alert("Session token looks valid (demo)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="auth" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Sign in with Email OTP</h3>
          <p className="mt-1 text-sm text-slate-600">No passwords. We'll send a one-time code to your inbox.</p>

          {step === "request" && (
            <form onSubmit={requestOtp} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Email address</label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-70"
              >
                {loading && <Loader2 className="animate-spin" size={16} />}
                Send OTP
              </button>
            </form>
          )}

          {step === "verify" && (
            <form onSubmit={verifyOtp} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Enter code</label>
                <div className="mt-1 relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="pl-9 tracking-widest text-center w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="123456"
                  />
                </div>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-indigo-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 disabled:opacity-70"
              >
                {loading && <Loader2 className="animate-spin" size={16} />}
                Verify & Sign in
              </button>
              <p className="text-xs text-slate-500 text-center">We sent a 6-digit code to {email}.</p>
            </form>
          )}

          {step === "done" && (
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-900 text-sm p-3">
                You're signed in (demo). You can now validate or renew your session.
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={validateSession}
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
                >
                  Validate session
                </button>
                <button
                  onClick={renewSession}
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800"
                >
                  Renew token
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 p-6">
          <h4 className="font-semibold text-slate-900">How it works</h4>
          <ol className="mt-4 space-y-3 text-sm text-slate-700 list-decimal list-inside">
            <li>Enter your email address and request an OTP.</li>
            <li>Check your inbox and paste the 6-digit code.</li>
            <li>We'll create a short-lived access token and a refresh token for you.</li>
            <li>Use the access token to call APIs, and the refresh token to renew when expired.</li>
          </ol>
          <div className="mt-6 text-xs text-slate-500">
            Backend endpoints to implement:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>POST /auth/request-otp</li>
              <li>POST /auth/login-otp</li>
              <li>GET /auth/validate</li>
              <li>POST /auth/renew</li>
            </ul>
            Base URL: {baseUrl || "(not set)"}
          </div>
        </div>
      </div>
    </section>
  );
}
