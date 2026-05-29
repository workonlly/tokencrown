import React from 'react'

const gradientStyle: React.CSSProperties = {
  background: 'linear-gradient(180deg, #f54f0a, #e90f08)',
}

const accentTextGradient = 'bg-clip-text text-transparent bg-gradient-to-r from-[#f54f0a] to-[#e90f08]'

function Page() {
  return (
    <>
    <section className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-[28px] md:rounded-[40px] border border-white/10 bg-black/60 backdrop-blur-3xl">

  {/* Background Effects */}
  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:34px_34px]" />

  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#f54f0a]/10 blur-[140px]" />

  {/* Animated Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,79,10,0.15),transparent_40%)]" />

  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">

    {/* LEFT SIDE */}
    <div className="relative p-6 sm:p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10">

    
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white">
        Start Your{" "}
        <span className={accentTextGradient}>
          Deployment
        </span>
      </h2>

      <p className="mt-6 text-gray-400 leading-7 md:leading-8 text-sm sm:text-base max-w-lg">
        Share your details and our infrastructure team will connect with you
        regarding deployment architecture, pricing, and onboarding.
      </p>

      {/* FORM */}
      <form className="mt-8 md:mt-10 space-y-5 md:space-y-6">

        {/* Name */}
        <div className="group relative">
          <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/40 font-bold">
            Full Name
          </label>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 focus-within:border-[#f54f0a]/40">
            <input
              type="text"
              placeholder="John Carter"
              className="w-full bg-transparent px-4 sm:px-6 py-4 sm:py-5 text-white placeholder:text-gray-500 outline-none text-sm sm:text-base"
            />

            <div className="absolute inset-y-0 right-5 flex items-center">
              <div className="w-2 h-2 rounded-full bg-white/30 group-focus-within:bg-[#f54f0a]" />
            </div>
          </div>
        </div>

        {/* Country */}
        <div className="group relative">
          <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/40 font-bold">
            Country
          </label>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 focus-within:border-[#f54f0a]/40">
            <input
              type="text"
              placeholder="United States"
              className="w-full bg-transparent px-4 sm:px-6 py-4 sm:py-5 text-white placeholder:text-gray-500 outline-none text-sm sm:text-base"
            />

            <div className="absolute inset-y-0 right-5 flex items-center">
              <div className="w-2 h-2 rounded-full bg-white/30 group-focus-within:bg-[#f54f0a]" />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="group relative">
          <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/40 font-bold">
            Email Address
          </label>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 focus-within:border-[#f54f0a]/40">
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full bg-transparent px-4 sm:px-6 py-4 sm:py-5 text-white placeholder:text-gray-500 outline-none text-sm sm:text-base"
            />

            <div className="absolute inset-y-0 right-5 flex items-center">
              <div className="w-2 h-2 rounded-full bg-white/30 group-focus-within:bg-[#f54f0a]" />
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="group relative">
          <label className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 font-bold">
            Contact Number
            <span className="text-[10px] text-[#f54f0a]">(Optional)</span>
          </label>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 focus-within:border-[#f54f0a]/40">
            <input
              type="tel"
              placeholder="+1 234 567 890"
              className="w-full bg-transparent px-4 sm:px-6 py-4 sm:py-5 text-white placeholder:text-gray-500 outline-none text-sm sm:text-base"
            />

            <div className="absolute inset-y-0 right-5 flex items-center">
              <div className="w-2 h-2 rounded-full bg-white/30 group-focus-within:bg-[#f54f0a]" />
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="group relative mt-4 w-full overflow-hidden rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.01]"
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={gradientStyle}
          />

          <div className="relative flex items-center justify-center gap-3 rounded-2xl bg-black/80 px-6 sm:px-8 py-4 sm:py-5 backdrop-blur-3xl">

            <div className="absolute top-0 left-[-120%] h-full w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[150%] transition-all duration-1000" />

            <div className="relative w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_white]" />

            <span className="relative z-10 text-xs sm:text-sm font-black uppercase tracking-[0.24em] sm:tracking-[0.3em] text-white text-center">
              Initialize Request
            </span>
          </div>
        </button>
      </form>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative p-6 sm:p-8 md:p-14 flex flex-col justify-between">

      {/* Glow Orb */}
      <div className="absolute top-20 right-10 w-52 h-52 rounded-full bg-[#f54f0a]/10 blur-[120px]" />

      <div className="relative z-10">


        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-black tracking-[-0.05em] text-white leading-tight">
          Prefer Direct{" "}
          <span className={accentTextGradient}>
            Communication?
          </span>
        </h3>

        <p className="mt-6 text-gray-400 leading-7 md:leading-8 text-sm sm:text-base max-w-md">
          If you prefer not to fill out the onboarding form, you can directly
          contact our deployment desk through email or phone.
        </p>

        {/* Contact Cards */}
        <div className="mt-10 space-y-5">

          {/* Email */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl hover:border-[#f54f0a]/30 transition-all duration-500">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(245,79,10,0.15),transparent_45%)] transition-all duration-500" />

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                Email Address
              </span>

              <p className="mt-3 text-lg sm:text-xl font-bold text-white break-all">
                hello@yourcompany.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl hover:border-[#f54f0a]/30 transition-all duration-500">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(245,79,10,0.15),transparent_45%)] transition-all duration-500" />

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                Contact Number
              </span>

              <p className="mt-3 text-xl sm:text-2xl font-black tracking-wide text-white">
                +1 (512) 988-2727
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 mt-16 border-t border-white/10 pt-8">
        <p className="text-sm text-gray-500 leading-7">
          Enterprise response time is typically under{" "}
          <span className="text-[#f54f0a] font-bold">12 hours</span>.
        </p>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Page