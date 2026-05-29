import React from 'react';


// Define types for our data structures
interface Feature {
  title: string;
  desc: string;
  stat: string;
}

interface PricingItem {
  text: string;
}

export default function Home() {
  // Styles
  const gradientStyle: React.CSSProperties = {
    background: "linear-gradient(180deg, #f54f0a, #e90f08)",
  };

  const borderGradientStyle: React.CSSProperties = {
    borderImageSource: "linear-gradient(180deg, #f54f0a, #e90f08)",
    borderImageSlice: 1,
  };

  const textGradient = "bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400";
  const accentTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-[#f54f0a] to-[#e90f08]";

  // Data
  const features: Feature[] = [
    { title: "KYC Integration", desc: "Military-grade identity verification for strict US compliance.", stat: "SECURE" },
    { title: "Payment Gateway", desc: "Frictionless, high-speed transaction processing architecture.", stat: "FAST" },
    { title: "Game Aggregator", desc: "Unified API access to a massive library of top-tier gaming content.", stat: "SCALABLE" },
    { title: "Game Provider", desc: "Direct pipelines to premium, high-RTP game studios.", stat: "PREMIUM" },
    { title: "PAM System", desc: "Robust Player Account Management with real-time analytics.", stat: "CORE" },
    { title: "CRM & Marketing", desc: "Automated retention tools and built-in email marketing.", stat: "GROWTH" },
  ];

  return (
    <div className="min-h-screen  text-gray-200 font-sans relative overflow-hidden selection:bg-[#f54f0a] selection:text-white">
      
      {/* Dark Casino Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
        {/* Deep Red Radial Glow */}
        <div className="absolute top-0 w-full max-w-[1200px] h-[800px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen" />
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050000_100%)] opacity-90" />
      </div>

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:px-12 py-4 md:py-6 flex flex-col items-center">
        
        {/* Token Bet Styled Header */}
        <header className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-8 md:mb-10 max-w-7xl">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Token Bet Logo" className="w-32 h-auto sm:w-40 md:w-50" />
          </div>
         
        </header>
  <section className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center relative min-h-[unset] lg:min-h-[70vh] gap-10 lg:gap-12">
  
  {/* Text Section */}
  <div className="w-full lg:w-[60%] z-10 flex flex-col items-center lg:items-start text-center lg:text-left relative">
    <p className="text-sm sm:text-base md:text-2xl font-medium tracking-[0.22em] md:tracking-widest text-gray-300 uppercase mb-4">
      Welcome To The Elite
    </p>
    
    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.02] tracking-tight mb-5 md:mb-6 max-w-5xl uppercase">
      Multiply Your <br />
      <span className={textGradient}>Winstry Your Luck</span>
    </h1>
    
    <p className="text-[11px] sm:text-sm font-bold tracking-[0.22em] sm:tracking-widest text-gray-400 mb-8 md:mb-10">
      + B2C SWEEPSTAKES INFRASTRUCTURE
    </p>

    {/* Custom Button (Untouched) */}
    <button className="group relative inline-flex w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[22px] p-[1px] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1">
      {/* Animated Gradient Border */}
      <div
        className="absolute inset-0 rounded-[22px] opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,79,10,0.9), rgba(245,79,10,0.15), rgba(255,255,255,0.12), rgba(245,79,10,0.9))",
          backgroundSize: "300% 300%",
          animation: "gradientMove 6s ease infinite",
        }}
      />

      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-[22px] blur-2xl bg-[#f54f0a]/30 opacity-70 group-hover:opacity-100 transition-all duration-500" />

      {/* Main Button */}
      <div className="relative flex w-full items-center gap-4 sm:gap-5 overflow-hidden rounded-[21px] border border-white/10 bg-black/80 px-5 sm:px-7 md:px-9 py-4 backdrop-blur-3xl">
        {/* Mesh Background */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Orange Glow Blob */}
        <div className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[#f54f0a]/20 blur-3xl transition-all duration-700 group-hover:left-10" />

        {/* Shine Sweep */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-[-120%] h-full w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[150%] transition-all duration-1000" />
        </div>

        {/* Left Tech Icon */}
        <div className="relative flex items-center justify-center shrink-0">
          {/* Pulse Rings */}
          <div className="absolute h-10 w-10 rounded-full border border-[#f54f0a]/30 animate-ping" />
          <div className="absolute h-7 w-7 rounded-full border border-[#f54f0a]/20" />

          {/* Core */}
          <div
            className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-[#f54f0a]/20 shadow-[0_0_30px_rgba(245,79,10,0.35)]"
            style={gradientStyle}
          >
            <div className="absolute inset-[1px] rounded-2xl bg-black/70" />
            <div className="relative h-3 w-3 rounded-full bg-white shadow-[0_0_15px_white]" />
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start min-w-0">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[#f54f0a]/70 font-bold">
            Initialize
          </span>
          <a href="/form">
            <span className="text-base sm:text-lg font-black tracking-[-0.02em] text-white group-hover:text-[#f54f0a] transition-colors duration-300">
              Deploy Now
            </span>
          </a>
        </div>

        {/* Right Arrow */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="absolute h-10 w-10 rounded-full bg-[#f54f0a]/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] group-hover:border-[#f54f0a]/30 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#f54f0a]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute left-2 top-2 h-3 w-3 border-l border-t border-[#f54f0a]/40 rounded-tl-md" />
        <div className="absolute bottom-2 right-2 h-3 w-3 border-r border-b border-[#f54f0a]/40 rounded-br-md" />
      </div>
    </button>
  </div>

  {/* Image Section: Removed gradients, borders, and shadows. Kept dark/dimmed. */}
  <div className="relative lg:absolute right-0 top-auto lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[45%] z-0 pointer-events-none lg:pointer-events-auto mt-8 lg:mt-0 flex justify-center lg:justify-end order-first lg:order-none">
    <img 
      src="/image.webp" 
      alt="casino character" 
      className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[600px] h-auto object-contain brightness-75 opacity-100 lg:brightness-[0.65]" 
    />
  </div>

</section>
        {/* Core Loadout / Features */}
        <section className="w-full max-w-7xl mb-32">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white mb-16 flex items-center gap-4">
            <span className={accentTextGradient}>The Arsenal</span>
          </h2>
          
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  {features.map((feature, idx) => (
    <div
      key={idx}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-3xl transition-all duration-700 hover:-translate-y-3 hover:border-[#f54f0a]/40"
    >
      {/* Animated Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,79,10,0.18),transparent_40%)]" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-[#f54f0a]/10 blur-3xl" />
      </div>

      {/* Animated Border Beam */}
      <div className="absolute inset-0 rounded-[32px] p-[1px] overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
          <div className="absolute top-0 left-[-100%] h-full w-[40%] bg-gradient-to-r from-transparent via-[#f54f0a]/40 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000" />
        </div>
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Main Content */}
      <div className="relative z-10 p-8 flex flex-col h-full">

        {/* TOP SECTION */}
        <div className="flex items-start justify-between mb-8">

          {/* Futuristic Icon Box */}
          <div className="relative">
            
            {/* Outer Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"
              style={gradientStyle}
            />

            {/* Main Box */}
            <div
              className="relative w-16 h-16 rounded-3xl border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden"
              style={gradientStyle}
            >
              {/* Inner Dark Layer */}
              <div className="absolute inset-[1.5px] rounded-3xl bg-black/70 backdrop-blur-2xl" />

              {/* Cyber Rings */}
              <div className="absolute w-10 h-10 border border-[#f54f0a]/30 rounded-full animate-pulse" />
              <div className="absolute w-6 h-6 border border-white/20 rounded-full" />

              {/* Center Orb */}
              <div className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_20px_white]" />
            </div>

            {/* Floating Dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#f54f0a] shadow-[0_0_20px_#f54f0a]" />
          </div>

          {/* Right Side Stats */}
          <div className="flex flex-col items-end gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
              System
            </span>

            <div className="flex items-center gap-2 rounded-full border border-[#f54f0a]/20 bg-[#f54f0a]/10 px-3 py-1.5 backdrop-blur-xl">
              <div className="w-2 h-2 rounded-full bg-[#f54f0a] animate-pulse" />
              <span className="text-[11px] font-bold text-[#f54f0a]">
                {feature.stat}
              </span>
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="relative mb-5">
          <h3 className="text-2xl font-black tracking-tight leading-tight text-white group-hover:text-[#f54f0a] transition-all duration-500">
            {feature.title}
          </h3>

          {/* Underline */}
          <div className="mt-4 relative h-[2px] w-full overflow-hidden rounded-full bg-white/5">
            <div className="absolute left-0 top-0 h-full w-1/3 rounded-full bg-[#f54f0a] shadow-[0_0_20px_#f54f0a]" />
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm leading-7 text-gray-400 group-hover:text-gray-300 transition-all duration-500">
          {feature.desc}
        </p>

        {/* BOTTOM SECTION */}
        <div className="mt-auto pt-8 flex items-center justify-between">

          {/* Mini Stats */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full border border-black bg-[#111]" />
              <div className="w-7 h-7 rounded-full border border-black bg-[#1a1a1a]" />
              <div className="w-7 h-7 rounded-full border border-black bg-[#222]" />
            </div>

            <span className="text-xs text-white/30 tracking-wide">
              Neural Sync
            </span>
          </div>

        
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-5 right-5 w-12 h-12 border-t border-r border-white/10 rounded-tr-2xl opacity-40" />
        <div className="absolute bottom-5 left-5 w-12 h-12 border-b border-l border-[#f54f0a]/20 rounded-bl-2xl opacity-60" />
      </div>
    </div>
  ))}
</div>
        </section>

        {/* Deployment Models */}
        <section className="relative w-full max-w-7xl mb-40 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#f54f0a]/10 blur-[180px] rounded-full pointer-events-none" />

  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white mb-16 flex items-center gap-4">
            <span className={accentTextGradient}>Choose Your Build</span>
          </h2>

  {/* Cards */}
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

    {/* CARD 1 */}
    <div className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-black/50 backdrop-blur-3xl hover:-translate-y-3 transition-all duration-700">

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      {/* Top Beam */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10 p-10 flex flex-col h-full">

        {/* Top */}
        <div className="flex items-start justify-between mb-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center backdrop-blur-xl">
                <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white]" />
              </div>

              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-white/30">
                  Managed System
                </span>

                <h3 className="text-3xl font-black text-white mt-1">
                  Turnkey
                </h3>
              </div>
            </div>

            <p className="text-gray-500 text-sm max-w-sm leading-7">
              Fully operated infrastructure with hosting, deployment,
              maintenance, and uptime monitoring handled by our team.
            </p>
          </div>

          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs tracking-[0.25em] uppercase text-white/50">
            Managed
          </div>
        </div>

        {/* Price */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8">

          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 blur-3xl rounded-full" />

          <div className="relative z-10 flex items-end gap-3">
            <span className="text-7xl font-black text-white">$2K</span>
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              / Month
            </span>
          </div>

          <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />

          <div className="mt-5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Live Maintenance Included
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-5 mb-10">
          {[
            'Replica site deployment included',
            'Full technical maintenance by us',
            'Secure server hosting & uptime SLA',
            'Access to all core loadout features'
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 hover:bg-white/[0.04] transition-all"
            >
              <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full border border-white/10 bg-white/[0.03]">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              <span className="text-gray-300 text-sm leading-7">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <a href="/form" className="group/button relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-5 font-black uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-white/30 hover:bg-white/[0.06]">
          
          <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/button:translate-x-full" />

          <span className="relative z-10 flex items-center justify-center gap-2">
            Select Turnkey
          </span>
        </a>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="group relative overflow-hidden rounded-[36px] border border-[#f54f0a]/20 bg-black/60 backdrop-blur-3xl hover:-translate-y-3 transition-all duration-700">

      {/* Orange Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,79,10,0.18),transparent_45%)]" />
      </div>

      {/* Animated Beam */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[-120%] h-full w-[45%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-[#f54f0a]/10 to-transparent group-hover:left-[150%] transition-all duration-1000" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#f54f0a_1px,transparent_1px),linear-gradient(to_bottom,#f54f0a_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 p-10 flex flex-col h-full">

        {/* Header */}
        <div className="flex items-start justify-between mb-10">

          <div>
            <div className="flex items-center gap-3 mb-4">

              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden border border-[#f54f0a]/20"
                style={gradientStyle}
              >
                <div className="absolute inset-[1px] rounded-2xl bg-black/70" />

                <div className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_18px_white]" />
              </div>

              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#f54f0a]/70">
                  Ownership System
                </span>

                <h3 className="text-3xl font-black text-white mt-1">
                  Source Code
                </h3>
              </div>
            </div>

            <p className="text-gray-400 text-sm max-w-sm leading-7">
              Complete infrastructure ownership with full customization,
              scalability, deployment flexibility, and unrestricted access.
            </p>
          </div>

          <div className="px-4 py-2 rounded-full border border-[#f54f0a]/20 bg-[#f54f0a]/10 text-xs tracking-[0.25em] uppercase text-[#f54f0a] shadow-[0_0_20px_rgba(245,79,10,0.2)]">
            Root Access
          </div>
        </div>

        {/* Pricing */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#f54f0a]/10 bg-[#f54f0a]/5 p-8">

          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#f54f0a]/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-end gap-3">
              <span className="text-7xl font-black text-white">
                Custom
              </span>

              <span className="text-sm uppercase tracking-[0.3em] text-[#f54f0a]/70 mb-3">
                Quote
              </span>
            </div>

            <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-[#f54f0a]/30 to-transparent" />

            <div className="mt-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#f54f0a] animate-pulse" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#f54f0a]/60">
                Infinite Scalability
              </span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-5 mb-10">
          {[
            'Full platform source code transfer',
            'Self-hosted & independently maintained',
            'Infinite scalability & customization',
            'Access to all core loadout features'
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-[#f54f0a]/10 bg-[#f54f0a]/5 px-5 py-4 hover:bg-[#f54f0a]/10 transition-all"
            >
              <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full border border-[#f54f0a]/20">
                <div className="w-2 h-2 rounded-full bg-[#f54f0a]" />
              </div>

              <span className="text-gray-200 text-sm leading-7">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="/form"
          className="group/button relative overflow-hidden rounded-2xl border border-[#f54f0a]/20 py-5 font-black uppercase tracking-[0.25em] text-white transition-all duration-500 hover:-translate-y-1"
          style={gradientStyle}
        >
          <div className="absolute inset-[1px] rounded-2xl bg-black/70" />

          <div className="absolute top-0 left-[-120%] h-full w-[45%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/button:left-[150%] transition-all duration-1000" />

          <span className="relative flex items-center justify-center gap-2 z-10">Inquire Now</span>
        </a>
      </div>
    </div>

  </div>
</section>
      </div>
    </div>
  );
}