import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import {
  Logo,
  ChartIcon,
  ShieldIcon,
  BoltIcon,
  ArrowRightIcon,
  CheckIcon,
  MenuIcon,
  CloseIcon,
} from '../components/icons';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Analytics', href: '#analytics' },
];

const FEATURES = [
  {
    icon: ChartIcon,
    title: 'Track',
    desc: 'One clear view of every account, position and cashflow — live.',
  },
  {
    icon: ShieldIcon,
    title: 'Guard',
    desc: 'Bank-grade protection continuously monitors risk around the clock.',
  },
  {
    icon: BoltIcon,
    title: 'Act',
    desc: 'Send payments and rebalance in seconds with intelligent flows.',
  },
];

const RISKS = [
  { label: 'Valuation', value: 18 },
  { label: 'Market', value: 34 },
  { label: 'Regulatory', value: 12 },
  { label: 'Supply chain', value: 26 },
];

function RiskBar({ label, value, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-mist-300">{label}</span>
        <span className="font-mono text-leaf-400">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-ink-600/60 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-leaf-600 to-leaf-400 transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${value}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-ink-600 bg-ink-900/80 backdrop-blur-xl px-5 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo className="w-7 h-7" />
            <span className="font-display text-lg font-semibold text-cream-50 tracking-tight">FinGuard</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm text-mist-300">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-cream-50 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm text-mist-300 hover:text-cream-50 transition-colors px-2 py-1.5">
              Sign in
            </Link>
            <Link
              to="/register"
              className="text-sm font-medium text-ink-950 bg-leaf-500 hover:bg-leaf-400 transition-colors rounded-full px-5 py-2"
            >
              Get started
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-cream-50 p-1.5"
          >
            {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-ink-600 bg-ink-900/95 backdrop-blur-xl p-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-mist-200 py-2.5 border-b border-ink-700 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3">
              <Link to="/login" className="flex-1 text-center text-sm text-mist-200 border border-ink-600 rounded-full py-2.5">
                Sign in
              </Link>
              <Link
                to="/register"
                className="flex-1 text-center text-sm font-medium text-ink-950 bg-leaf-500 rounded-full py-2.5"
              >
                Get started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(95,152,67,0.16),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div className="max-w-xl">
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-leaf-500/30 bg-leaf-500/10 px-4 py-1.5 text-sm text-leaf-300">
              <span className="w-2 h-2 rounded-full bg-leaf-400 animate-pulse-soft" />
              Trusted by 2,400+ investors
            </div>

            <h1 className="animate-rise mt-6 font-display text-5xl sm:text-6xl font-semibold tracking-tight text-cream-50 leading-[1.05]" style={{ animationDelay: '120ms' }}>
              Financial clarity,
              <br />
              <span className="bg-gradient-to-r from-leaf-300 via-mint-200 to-leaf-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                engineered.
              </span>
            </h1>

            <p className="animate-rise mt-6 text-lg text-mist-300 leading-relaxed" style={{ animationDelay: '240ms' }}>
              FinGuard turns complex financial data into calm, actionable insight — track exposure, understand risk, and
              act in a single tap.
            </p>

            <div className="animate-rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '360ms' }}>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-full bg-leaf-500 px-7 py-3.5 font-semibold text-ink-950 hover:bg-leaf-400 transition-colors"
              >
                Start for free
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="#analytics"
                className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-7 py-3.5 font-medium text-cream-50 hover:border-mist-400 transition-colors"
              >
                Explore
              </a>
            </div>

            <div className="animate-rise mt-12 flex items-center gap-10" style={{ animationDelay: '480ms' }}>
              {[
                { end: 2.4, decimals: 1, prefix: '', suffix: 'M+', label: 'Investors' },
                { end: 12.4, decimals: 1, prefix: '$', suffix: 'B+', label: 'Tracked' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-cream-50">
                    <CountUp end={stat.end} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-mist-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-rise" style={{ animationDelay: '300ms' }}>
            <div className="relative w-full max-w-[540px] mx-auto">
              <div className="absolute -inset-8 bg-leaf-500/20 blur-3xl rounded-full animate-pulse-soft" />

              <div className="relative rounded-3xl border border-ink-600 bg-ink-800/70 backdrop-blur-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-leaf-500 animate-blink" />
                    <span className="text-sm text-mist-300">Portfolio</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-leaf-400 text-sm font-medium bg-leaf-500/10 border border-leaf-500/25 rounded-full px-3 py-1.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 14l5-5 5 5" />
                    </svg>
                    24.7%
                  </div>
                </div>

                <p className="text-3xl font-display font-semibold text-cream-50 mb-4">
                  $48,520<span className="text-lg text-mist-400">.42</span>
                </p>

                <svg viewBox="0 0 560 260" className="w-full h-auto">
                  <defs>
                    <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#84c35e" stopOpacity="0.4" />
                      <stop offset="1" stopColor="#84c35e" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#a9db85" />
                      <stop offset="1" stopColor="#5f9843" />
                    </linearGradient>
                  </defs>
                  <g stroke="#1a231a" strokeWidth="1">
                    <line x1="20" y1="70" x2="540" y2="70" />
                    <line x1="20" y1="135" x2="540" y2="135" />
                    <line x1="20" y1="200" x2="540" y2="200" />
                  </g>
                  <path
                    d="M20 205 C 65 185 90 210 140 170 S 215 95 265 128 S 350 45 405 78 S 490 30 540 52 L540 245 L20 245 Z"
                    fill="url(#area)"
                  />
                  <path
                    d="M20 205 C 65 185 90 210 140 170 S 215 95 265 128 S 350 45 405 78 S 490 30 540 52"
                    fill="none"
                    stroke="url(#line)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1200"
                    strokeDashoffset="1200"
                    className="animate-draw"
                  />
                  <circle cx="405" cy="78" r="5" fill="#a9db85" className="animate-pulse-soft" />
                </svg>

                <div className="grid grid-cols-3 gap-3 mt-5">
                  {[
                    { label: 'Equities', value: '62%' },
                    { label: 'Bonds', value: '24%' },
                    { label: 'Cash', value: '14%' },
                  ].map((cell) => (
                    <div key={cell.label} className="rounded-xl bg-ink-700/50 border border-ink-600/60 p-3">
                      <p className="text-[11px] text-mist-400">{cell.label}</p>
                      <p className="font-mono text-cream-50 mt-0.5">{cell.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-8 -right-6 animate-float bg-ink-800/90 border border-ink-600 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-[11px] text-mist-400 mb-1">Risk score</p>
                <p className="text-2xl font-display font-semibold text-cream-50">Low</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 sm:py-28 border-t border-ink-700/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-leaf-400 mb-4">Why FinGuard</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-cream-50">
            Track. Guard. Act.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-ink-600 bg-ink-800/50 p-7 hover:border-leaf-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <div className="mb-5 inline-flex rounded-xl border border-leaf-500/25 bg-leaf-500/10 p-3 text-leaf-400 group-hover:bg-leaf-500/20 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream-50 mb-2">{feature.title}</h3>
                <p className="text-sm text-mist-300 leading-relaxed">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Analytics() {
  return (
    <section id="analytics" className="py-24 sm:py-28 border-t border-ink-700/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-leaf-400 mb-4">Risk intelligence</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-cream-50">
              Know what you own.
            </h2>
            <p className="mt-5 text-lg text-mist-300 leading-relaxed">
              FinGuard organizes valuation, market, regulatory and supply-chain risk into a focused, intuitive flow.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Real-time exposure across every asset class',
                'Risk scoring tuned to your profile',
                'Instant alerts the moment a position turns',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-cream-50">
                  <span className="inline-flex rounded-full bg-leaf-500/15 border border-leaf-500/30 p-1 text-leaf-400">
                    <CheckIcon className="w-4 h-4" />
                  </span>
                  <span className="text-mist-200 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-6 bg-leaf-500/10 blur-3xl rounded-full" />
              <div className="relative rounded-3xl border border-ink-600 bg-ink-800/70 backdrop-blur-xl p-7">
                <div className="flex items-center justify-between mb-8">
                  <p className="font-display text-lg font-semibold text-cream-50">Exposure by risk</p>
                  <div className="flex items-center gap-2 rounded-full border border-leaf-500/25 bg-leaf-500/10 px-3 py-1.5 text-xs text-leaf-300">
                    Low risk
                  </div>
                </div>

                <div className="space-y-6">
                  {RISKS.map((risk, i) => (
                    <RiskBar key={risk.label} label={risk.label} value={risk.value} delay={i * 150} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-leaf-500/30 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-800 px-8 py-14 sm:py-16 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-64 bg-leaf-500/20 blur-3xl rounded-full" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl sm:text-4xl font-semibold tracking-tight text-cream-50">
                Start investing with clarity.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-mist-300">
                Free to start, no credit card required.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-leaf-500 px-8 py-4 font-semibold text-ink-950 hover:bg-leaf-400 transition-colors"
                >
                  Create free account
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center rounded-full border border-ink-600 px-8 py-4 font-medium text-cream-50 hover:border-mist-400 transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-700/70 py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="w-6 h-6" />
          <span className="font-display text-base font-semibold text-cream-50 tracking-tight">FinGuard</span>
        </a>
        <p className="text-xs text-mist-500">© {new Date().getFullYear()} FinGuard. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <main className="min-h-screen bg-ink-950 text-cream-50 antialiased selection:bg-leaf-500 selection:text-ink-950">
      <Navbar />
      <Hero />
      <Features />
      <Analytics />
      <CTABanner />
      <Footer />
    </main>
  );
}