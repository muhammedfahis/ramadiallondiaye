import { Link } from 'react-router-dom'

function scrollToAbout() {
  document.getElementById('about-rama-section')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Home() {
  return (
    <>
      {/* Gateway Container - 100vh, No Scroll */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background with subtle texture/pattern */}
        <div className="absolute inset-0 bg-black">
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 hidden lg:block" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 70%)" }}></div>
          {/* Subtle vertical lines pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px)" }}></div>
          {/* Corner accent */}
          <div className="absolute bottom-0 left-0 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-[1px] h-[30%] bg-gradient-to-b from-white/10 to-transparent"></div>
        </div>
        {/* Portrait. Phone/tablet: fills the top of the screen above the text.
            Desktop (lg+): sits on the right with the text beside it. */}
        <div className="absolute inset-x-0 top-0 h-[60%] lg:left-auto lg:h-full lg:w-[58%] flex items-start justify-end overflow-hidden">
          <img
            src="/assets/home-background.webp"
            alt="Dr. Ramatoulaye Diallo N'Diaye"
            className="w-full h-full object-cover object-[70%_15%] lg:w-auto lg:h-[110%] lg:object-contain lg:object-right lg:scale-110 lg:mt-[5vh] lg:origin-top-right filter grayscale"
          />
          {/* Fades: bottom edge on every size, left edge on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        {/* Main message: below the photo on phone/tablet, beside it on desktop */}
        <div className="relative z-10 h-full flex flex-col justify-end lg:justify-center px-8 pt-8 pb-24 md:px-16 md:pb-28 lg:py-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
              Pan-African Diplomat
              <br />
              &
              {" "}Global Strategist
            </h1>
            <div className="w-24 h-px bg-white mb-6"></div>
            <ul className="font-sans text-sm md:text-lg lg:text-xl text-gray-300 font-light uppercase tracking-[0.15em] md:tracking-[0.2em] space-y-2">
              <li>Climate Resilience</li>
              <li>Green Industrialization</li>
              <li>Cultural Power</li>
            </ul>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="scroll-indicator" id="scroll-indicator" onClick={scrollToAbout}>
          <div className="scroll-indicator-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
      {/* About Rama Section */}
      <section id="about-rama-section" className="relative w-full py-20 md:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(10,10,10,1) 50%, rgba(0,0,0,1) 100%)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side: Text Content */}
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                About
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight">
                Dr. Ramatoulaye Diallo N'Diaye
              </h2>
              <div className="w-16 h-px bg-white/60"></div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                A visionary African leader whose work blends diplomacy, cultural renaissance, climate action, and innovative finance into a uniquely powerful voice for transformation on the continent.
              </p>
              <p className="text-base md:text-lg text-white/60 leading-relaxed font-light">
                Her journey reflects a lifelong commitment to dignity, heritage, ecological stewardship, and the belief that Africa's cultural and environmental wealth can serve as a foundation for a new era of prosperity.
              </p>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:max-w-xl">
                <Link to="/about" className="px-5 py-4 border-2 border-white/50 text-xs md:text-sm uppercase tracking-[0.15em] whitespace-nowrap text-white hover:bg-white hover:text-black transition-all duration-300 text-center">
                  {" "}Learn More →{" "}
                </Link>
                {" "}
                <Link to="/biography" className="px-5 py-4 border-2 border-white bg-white text-black text-xs md:text-sm uppercase tracking-[0.15em] whitespace-nowrap hover:bg-white/90 transition-all duration-300 text-center font-medium">
                  {" "}Read Full Biography →{" "}
                </Link>
              </div>
            </div>
            {/* Right Side: Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-sm transform translate-x-4 translate-y-4"></div>
                <div className="relative border-2 border-white/20 rounded-sm overflow-hidden" style={{ maxWidth: "400px" }}>
                  <img src="/assets/rama-professional.webp" alt="Dr. Ramatoulaye Diallo N'Diaye" className="w-full h-auto object-cover filter grayscale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
