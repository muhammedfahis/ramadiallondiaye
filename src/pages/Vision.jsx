import { Link } from 'react-router-dom'

export default function Vision() {
  return (
    <>
      {/* CHAPTER 01: Full-Screen Hero */}
      <header className="relative h-screen w-full overflow-hidden">
        {/* Photo shifted right so the heading sits beside her, not over her */}
        <img src="/images/contact.webp" alt="Dr. Ramatoulaye Diallo N'Diaye" className="absolute inset-0 w-full h-full object-cover object-[62%_center] md:object-[30%_center] filter grayscale" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 lg:px-20 pb-16 md:pb-24 md:max-w-[55%] lg:max-w-[50%]">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
            The Vision
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] font-light" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
            Culture as a World Class Asset
          </h1>
          <div className="w-24 h-px bg-white/60"></div>
        </div>
      </header>
      {/* Introduction Section */}
      <section className="section-padding bg-black">
        <article className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-2xl md:text-3xl leading-relaxed text-white/90 font-light">
            Across Africa and beyond, culture defines identity, moves markets, shapes diplomacy, fuels creativity, and anchors social cohesion. It is the foundation upon which nations build confidence, prosperity, resilience, and unity.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-white/70 font-light">
            Dr. Ramatoulaye Diallo N'Diaye places culture at the heart of Africa's rise, not as a secondary dimension but as a primary driver of transformation, investment, innovation, and sovereignty.
          </p>
        </article>
      </section>
      {/* QUOTE 01: Cultural Asset (Left-aligned) */}
      <section className="relative h-screen w-full overflow-hidden" data-quote-position="left">
        <img src="/assets/quote-culture-capital.webp" alt="Dr. Ramatoulaye Diallo N'Diaye on culture as strategic asset" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        {/* Gradient overlay: stronger for better text backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/40 z-10"></div>
        {/* Quote container */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pb-12 md:pb-16 lg:pb-20 px-6 md:px-16 lg:px-20">
          <div className="max-w-2xl">
            <blockquote className="text-white text-left font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed font-light" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)" }}>
              "Culture is more than soft power. It is a world-class asset that shapes identities, economies, and the destiny of nations."
            </blockquote>
            <footer className="text-white/90 text-left mt-4 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>
              — Dr. Ramatoulaye Diallo N'Diaye
            </footer>
          </div>
        </div>
      </section>
      {/* The Six Pillars Section */}
      <section className="section-padding bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white" style={{ marginBottom: "0.8rem" }}>
            The Six Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
            <div className="border border-white/10 p-8 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Culture is Capital
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Generates economic opportunity and new markets.
              </p>
            </div>
            <div className="border border-white/10 p-8 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Culture is Infrastructure
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Strengthens identity, education, community, and stability.
              </p>
            </div>
            <div className="border border-white/10 p-8 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Culture is Diplomacy
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Amplifies how nations present themselves to the world.
              </p>
            </div>
            <div className="border border-white/10 p-8 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Culture is Intelligence
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Connecting past, present, and future narratives.
              </p>
            </div>
            <div className="border border-white/10 p-8 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Culture is Resilience
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Sustaining peace, pride, and social cohesion.
              </p>
            </div>
            <div className="border border-white/10 p-8 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Culture is Value
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Unlocking investment through creative industries and heritage assets.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Photo Break */}
      <section className="relative h-[80vh] w-full overflow-hidden mt-16">
        <img src="/assets/community-planting.webp" alt="Community Initiative" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
      </section>
      {/* Green Future Section */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white">
            Why Culture Matters for Africa's Green Future
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-white/70 font-light mb-10">
            Africa is becoming one of the world's most strategic regions for climate and green industrial opportunity. Yet no green transition succeeds without people, identity, belief, purpose, and dignity. Culture is the key to unlocking all of these.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-white/60 font-light">
            Culture empowers communities to embrace restoration, protect ecosystems, lead sustainable development, preserve identity while embracing innovation, ensure ownership of climate solutions, and transmit knowledge across generations.
          </p>
        </div>
      </section>
      {/* QUOTE 02: Climate Finance (Right-aligned) */}
      <section className="relative h-screen w-full overflow-hidden" data-quote-position="right">
        <img src="/assets/community-planting.webp" alt="Dr. Ramatoulaye Diallo N'Diaye on climate finance and community empowerment" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        {/* Gradient overlay: stronger for better text backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/40 z-10"></div>
        {/* Quote container */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pb-12 md:pb-16 lg:pb-20 px-6 md:px-16 lg:px-20">
          <div className="max-w-2xl ml-auto">
            <blockquote className="text-white text-right font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed font-light" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)" }}>
              "The path to Africa's new economy lies in strategic climate finance that centers communities, empowers women and youth, and creates transformation that lasts."
            </blockquote>
            <footer className="text-white/90 text-right mt-4 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>
              — Dr. Ramatoulaye Diallo N'Diaye
            </footer>
          </div>
        </div>
      </section>
      {/* Economic Intelligence Section */}
      <section className="section-padding bg-black">
        <article className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-16 font-light text-white">
            Culture as Economic Intelligence
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-white/70 font-light mb-10">
            Culture shapes how societies think, evolve, innovate, and respond to change. When harnessed intentionally, it becomes a powerful form of competitive intelligence that supports economic foresight, investment confidence, global positioning, regional stability, creative industry expansion, cultural tourism, heritage economics, and green entrepreneurship.
          </p>
          <div className="border-white/30 mt-12">
            <p className="text-xl md:text-2xl italic text-white/90 leading-relaxed font-light">
              This is not a cultural sector. It is a cultural strategy with economic, social, and diplomatic impact.
            </p>
          </div>
        </article>
      </section>
      {/* QUOTE 03: Cultural Investment (Center-aligned) */}
      <section className="relative h-screen w-full overflow-hidden" data-quote-position="center">
        <img src="/rama/quotes-2.webp" alt="Dr. Ramatoulaye Diallo N'Diaye on culture and national power" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        {/* Gradient overlay: stronger for better text backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/40 z-10"></div>
        {/* Quote container */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pb-12 md:pb-16 lg:pb-20 px-6 md:px-16 lg:px-20">
          <div className="max-w-2xl">
            <blockquote className="text-white text-left font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed font-light" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)" }}>
              "An Africa that invests in its culture invests in its power, its dignity, and its place in the world."
            </blockquote>
            <footer className="text-white/90 text-left mt-4 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>
              — Dr. Ramatoulaye Diallo N'Diaye
            </footer>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white" style={{ marginBottom: "0.8rem" }}>
            Strategic Engagement
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-16">
            Dr. Ramatoulaye Diallo N'Diaye invites institutional partners, development finance leaders, and cultural stakeholders to collaborate on the future of Africa's green transition.
          </p>
          <Link to="/contact" className="inline-block px-10 py-5 border-2 border-white/50 text-base uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300">
            {" "}Get in Touch →{" "}
          </Link>
        </div>
      </section>
      {/* Spacer before footer */}
      <div className="h-16 bg-black"></div>
    </>
  )
}
