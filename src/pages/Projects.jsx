import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden">
        <img src="/assets/community-planting.webp" alt="Projects" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-end p-8 pb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">
            Strategic Initiatives
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] font-light" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
            Projects
          </h1>
          <div className="w-24 h-px bg-white/60"></div>
        </div>
      </header>
      {/* Projects Introduction */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light mb-8">
            Transformative initiatives driving Africa's green transition, cultural renaissance, and sustainable development.
          </p>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            Each project represents a strategic pillar in the mission to position Africa as a global leader in climate solutions, cultural economics, and community-centered prosperity.
          </p>
        </div>
      </section>
      {/* Featured Project */}
      <section className="section-padding bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/2] overflow-hidden">
              <img src="/images/great-wall-of-africa.webp" alt="Great Green Wall Foundation" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
                Featured Initiative
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
                Great Green Wall of Africa
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-white/70 font-light mb-6">
                Leading the largest ecological restoration initiative on Earth, the Great Green Wall spans 8,000 km across the Sahel region, restoring degraded landscapes and creating sustainable livelihoods for millions.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/60 font-light mb-8">
                Under Dr. Ramatoulaye Diallo N'Diaye's leadership, the Foundation mobilizes billions in climate finance, builds community resilience, and drives green industrialization across Africa.
              </p>
              <Link to="/contact" className="inline-block px-8 py-4 border-2 border-white/50 text-base uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300">
                {" "}Learn More →{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="section-padding bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white" style={{ marginBottom: "0.8rem" }}>
            Key Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Project Card 1 - Mali Timbuktu */}
            <div className="project-card border border-white/10 overflow-hidden flex flex-col">
              <div className="overflow-hidden aspect-[3/2]">
                <img src="/images/mali.webp" alt="Mali - Timbuktu Renaissance" className="w-full h-full object-cover filter grayscale" />
              </div>
              <div className="p-8 text-left flex flex-col flex-1">
                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-white font-light">
                  Mali - Timbuktu Renaissance
                </h3>
                <p className="text-lg leading-relaxed text-white/60 font-light mb-6">
                  Restoring and preserving Mali's rich cultural heritage while building pathways for sustainable tourism and community development.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/50">
                    Heritage
                  </span>
                  {" "}
                  <span className="px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/50">
                    Culture
                  </span>
                </div>
              </div>
            </div>
            {/* Project Card 3 - Mali Magic */}
            <div className="project-card border border-white/10 overflow-hidden flex flex-col">
              <div className="overflow-hidden aspect-[3/2]">
                <img src="/images/mali-magic.webp" alt="Mali Magic" className="w-full h-full object-cover filter grayscale" />
              </div>
              <div className="p-8 text-left flex flex-col flex-1">
                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-white font-light">
                  Mali Magic
                </h3>
                <p className="text-lg leading-relaxed text-white/60 font-light mb-6">
                  Celebrating Malian arts, music, and traditions through cultural festivals and international showcases that amplify African creative excellence.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/50">
                    Arts
                  </span>
                  {" "}
                  <span className="px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/50">
                    Festival
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 font-light text-white">
            Partner With Us
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-10">
            Join the movement to transform Africa's future through strategic collaboration, investment, and shared vision.
          </p>
          <Link to="/contact" className="inline-block px-10 py-5 border-2 border-white/50 text-base uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300">
            {" "}Get in Touch →{" "}
          </Link>
        </div>
      </section>
      {/* Spacer */}
      <div className="h-16 bg-black"></div>
    </>
  )
}
