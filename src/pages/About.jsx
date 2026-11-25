import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* CHAPTER 01: Full-Screen Portrait Hero */}
      <header className="relative h-screen w-full overflow-hidden">
        <img src="/assets/portrait-professional-front.webp" alt="Dr. Ramatoulaye Diallo N'Diaye" className="absolute inset-0 w-full h-full object-cover hero-portrait filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r to-transparent"></div>
        {/* Hero Text Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 lg:px-20 pb-16 md:pb-24">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
            About
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] font-light" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
            A Global African Leader
          </h1>
          <div className="w-24 h-px bg-white/60 mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-xl font-light tracking-wide">
            Dr. Ramatoulaye Diallo N'Diaye
          </p>
        </div>
      </header>
      {/* Introduction Section */}
      <section className="section-padding bg-black">
        <article className="max-w-4xl mx-auto text-center">
          <p className="drop-cap text-2xl md:text-3xl leading-relaxed text-white/90 font-light">
            Ramatoulaye Diallo N'Diaye is a visionary African leader whose work blends diplomacy, cultural renaissance, climate action, and innovative finance into a uniquely powerful voice for transformation on the continent.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-white/70 font-light">
            Her journey reflects a lifelong commitment to dignity, heritage, ecological stewardship, and the belief that Africa's cultural and environmental wealth can serve as a foundation for a new era of prosperity.
          </p>
        </article>
      </section>
      {/* QUOTE 01: Climate Leadership (Left-aligned) */}
      <section className="relative h-screen w-full overflow-hidden" data-quote-position="left">
        <img src="/images/gallery-04-640.webp" alt="Dr. Ramatoulaye Diallo N'Diaye speaking about climate leadership" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        {/* Gradient overlay: stronger for better text backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/40 z-10"></div>
        {/* Quote container */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pb-12 md:pb-16 lg:pb-20 px-6 md:px-16 lg:px-20">
          <div className="max-w-2xl">
            <blockquote className="text-white text-left font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed font-light" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)" }}>
              "The climate crisis is not Africa's burden, it is Africa's opportunity to lead the world's most strategic transition."
            </blockquote>
            <footer className="text-white/90 text-left mt-4 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>
              — Dr. Ramatoulaye Diallo N'Diaye
            </footer>
          </div>
        </div>
      </section>
      {/* Climate & Finance Leadership Section */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-16 font-light text-white text-center">
            Climate{" "}
            &
            {" "}Finance Leadership
          </h2>
          <div className="">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white font-light text-center">
                CEO, Great Green Wall of Africa Foundation
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-white/70 font-light text-center">
                Leading a continent-wide mission to restore landscapes, build climate resilience, and unlock new pathways for sustainable development. Her work focuses on mobilizing impact capital, forging strategic partnerships across global institutions, and ensuring that African communities remain at the center of transforming the Great Green Wall into one of the world's most ambitious ecological projects.
              </p>
            </div>
            <div className="w-24 h-px bg-white/30 mx-auto"></div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white font-light text-center">
                Chair, Africa Impact Finance Subgroup
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-white/70 font-light text-center">
                Through the Global Impact Disclosure Taskforce, she helps shape a more inclusive global financial architecture for small and medium enterprises. Her leadership emphasizes transparency, dignity, and the central role of African voices in defining new standards for sustainability and impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Photo Break: Side Portrait */}
      <section className="relative w-full overflow-hidden mt-16">
        <img src="/assets/portrait-profile.webp" alt="Dr. Ramatoulaye Diallo N'Diaye" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
      </section>
      {/* Cultural & Diplomatic Heritage Section */}
      <section className="section-padding bg-black">
        <article className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-16 text-center">
            Cultural{" "}
            &
            {" "}Diplomatic Heritage
          </h2>
          <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white font-light text-center">
              Minister of Culture, Handicrafts and Tourism of Mali
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/70 font-light text-center">
              In this role, she championed the protection of cultural heritage, the creative economy, and the global visibility of African cultural assets. Her diplomatic and cultural leadership has touched global platforms including UNESCO, world expositions, multilateral initiatives, and high-level international forums.
            </p>
          </div>
          <div className="w-24 h-px bg-white/30 mx-auto"></div>
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-white font-light">
              Signature Frameworks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="border border-white/10 p-8 transition-all duration-300">
                <h4 className="font-serif text-xl mb-3 text-white font-light">
                  Culture as Capital
                </h4>
                <p className="text-white/60 text-base leading-relaxed font-light">
                  Elevating Africa's cultural heritage as a strategic economic asset
                </p>
              </div>
              <div className="border border-white/10 p-8 transition-all duration-300">
                <h4 className="font-serif text-xl mb-3 text-white font-light">
                  Bridge of Dignity
                </h4>
                <p className="text-white/60 text-base leading-relaxed font-light">
                  Connecting communities to opportunity with respect and equity
                </p>
              </div>
              <div className="border border-white/10 p-8 transition-all duration-300">
                <h4 className="font-serif text-xl mb-3 text-white font-light">
                  Ubuntu Earth Fund
                </h4>
                <p className="text-white/60 text-base leading-relaxed font-light">
                  Harmony between people, land, and identity for sustainable development
                </p>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-white/60 font-light mb-8">
              These concepts guide her work and inspire new models of development that honor Africa's traditions while embracing innovation, inclusion, and global collaboration.
            </p>
            <Link to="/vision" className="inline-block px-10 py-5 border-2 border-white/50 text-base uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300">
              {" "}Explore the Vision →{" "}
            </Link>
          </div>
        </article>
      </section>
      {/* Spacer */}
      <div className="h-16 bg-black"></div>
      {/* QUOTE 02: Cultural Power (Right-aligned) */}
      <section className="relative h-screen w-full overflow-hidden" data-quote-position="right">
        <img src="/assets/rama-blue-dress.webp" alt="Dr. Ramatoulaye Diallo N'Diaye on cultural diplomacy" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        {/* Gradient overlay: stronger for better text backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/40 z-10"></div>
        {/* Quote container */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pb-12 md:pb-16 lg:pb-20 px-6 md:px-16 lg:px-20">
          <div className="max-w-2xl ml-auto">
            <blockquote className="text-white text-right font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed font-light" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)" }}>
              "Culture is wealth. Culture is value. Culture is capital that connects our past to our global future."
            </blockquote>
            <footer className="text-white/90 text-right mt-4 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>
              — Dr. Ramatoulaye Diallo N'Diaye
            </footer>
          </div>
        </div>
      </section>
      {/* Recognition & Impact Section */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-16 font-light text-white">
            Recognition{" "}
            &
            {" "}Impact
          </h2>
          <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
              Prestigious Distinctions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Award Card 1 */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-white/10 p-8 transition-all duration-300">
                  <div className="w-12 h-px mb-6"></div>
                  <h4 className="font-serif text-lg md:text-xl text-white font-light">
                    Officer of the National Order of Mali
                  </h4>
                </div>
              </div>
              {/* Award Card 2 */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-white/10 p-8 transition-all duration-300">
                  <div className="w-12 h-px mb-6"></div>
                  <h4 className="font-serif text-lg md:text-xl text-white font-light">
                    Commander of the National Order of Merit of France
                  </h4>
                </div>
              </div>
              {/* Award Card 3 */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-white/10 p-8 transition-all duration-300">
                  <div className="w-12 h-px mb-6"></div>
                  <h4 className="font-serif text-lg md:text-xl text-white font-light">
                    UNESCO
                  </h4>
                  <p className="text-white/50 text-sm uppercase tracking-widest">
                    70th Anniversary Medal
                  </p>
                </div>
              </div>
              {/* Award Card 4 */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-white/10 p-8 transition-all duration-300">
                  <div className="w-12 h-px mb-6"></div>
                  <h4 className="font-serif text-lg md:text-xl text-white font-light">
                    UAE Government
                  </h4>
                  <p className="text-white/50 text-sm uppercase tracking-widest">
                    Decoration
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-24 h-px bg-white/30 mx-auto"></div>
          <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white font-light">
              Board Leadership
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/70 font-light">
              Serves on the boards of{" "}
              <span className="text-white">
                Human Capital Africa
              </span>
              {" "}and the{" "}
              <span className="text-white">
                School of Politics, Policy and Governance
              </span>
              , furthering strategic initiatives across the continent.
            </p>
          </div>
          <div className="w-24 h-px bg-white/30 mx-auto"></div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white font-light">
              Academic Excellence
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/70 font-light mb-6">
              Holds a PhD with research exploring the Great Green Wall as a symbol of time, resilience, and generational responsibility.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light italic">
              Today she stands among Africa's most influential and trusted voices working to advance climate justice, cultural sovereignty, peace, and human dignity across the continent and beyond.
            </p>
          </div>
        </div>
      </section>
      {/* QUOTE 03: African Sovereignty (Center-aligned) */}
      <section className="relative h-screen w-full overflow-hidden" data-quote-position="center">
        <img src="/rama/quotes-1.webp" alt="Dr. Ramatoulaye Diallo N'Diaye on African cultural investment" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
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
      {/* Strategic Engagement Section */}
      <section className="section-padding bg-black">
        <div className="mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white" style={{ marginBottom: "0.8rem" }}>
            Strategic Engagement
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-16">
            Dr. Ramatoulaye Diallo N'Diaye invites institutional partners, development finance leaders, and cultural stakeholders to collaborate on the future of Africa's green transition.
          </p>
          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="border border-white/10 p-10 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Strengthen Communities
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Support initiatives that build resilience and prosperity at the grassroots level.
              </p>
            </div>
            <div className="border border-white/10 p-10 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Empower Women{" "}
                &
                {" "}Youth
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Expand education and leadership opportunities for the continent's greatest assets.
              </p>
            </div>
            <div className="border border-white/10 p-10 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Mobilize Capital
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Drive investment for green industrialization and climate prosperity.
              </p>
            </div>
            <div className="border border-white/10 p-10 transition-all duration-300">
              <h3 className="font-serif text-xl md:text-2xl mb-4 text-white font-light">
                Restore Ecosystems
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Build peace and security through large-scale environmental restoration.
              </p>
            </div>
          </div>
          {/* CTA to Contact */}
          <div className="text-center">
            <Link to="/contact" className="inline-block px-10 py-5 border-2 border-white/50 text-base uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300">
              {" "}Get in Touch →{" "}
            </Link>
          </div>
        </div>
      </section>
      {/* Media Section */}
      <section className="section-padding bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
              Press{" "}
              &
              {" "}Coverage
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Media
            </h2>
          </div>
          {/* Media Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Forbes Interview Card */}
            <a href="https://www.forbes.com" target="_blank" rel="noopener noreferrer" className="media-card group block border border-white/10 overflow-hidden transition-all duration-300">
              <div className="overflow-hidden">
                <img src="/images/contact.webp" alt="Forbes Interview" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="py-1 uppercase tracking-[0.2em] border border-white/20 text-white/50">
                    Forbes
                  </span>
                  {" "}
                  <span className="text-xs text-white/40">
                    Media Interview
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-white font-light transition-colors">
                  Forbes Interview
                </h3>
                <p className="text-base leading-relaxed text-white/50 font-light mb-4">
                  Driving global conversations on Africa's green transition through strategic media engagement and thought leadership.
                </p>
                <span className="inline-flex items-center text-xs uppercase tracking-[0.15em] text-white/40 transition-colors">
                  {" "}Read Article{" "}
                  <span className="">
                    →
                  </span>
                </span>
              </div>
            </a>
            {" "}
            {/* Jeune Afrique Article Card */}
            {" "}
            <a href="https://www.jeuneafrique.com/1502246/politique/ramatoulaye-diallo-ndiaye-la-ministre-malienne-devenue-madame-afrique/" target="_blank" rel="noopener noreferrer" className="media-card group block border border-white/10 overflow-hidden transition-all duration-300">
              <div className="overflow-hidden">
                <img src="/images/ramatoulaye-diallo (1).webp" alt="Jeune Afrique Article" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="py-1 uppercase tracking-[0.2em] border border-white/20 text-white/50">
                    Jeune Afrique
                  </span>
                  {" "}
                  <span className="text-xs text-white/40">
                    Politique
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-white font-light transition-colors">
                  L'ex ministre malienne devenue ambassadrice africaine du climat
                </h3>
                <p className="text-base leading-relaxed text-white/50 font-light mb-4">
                  L'ancienne ministre de la Culture du président Ibrahim Boubacar Keïta sera l'une des figures de proue du continent à la COP28.
                </p>
                <span className="inline-flex items-center text-xs uppercase tracking-[0.15em] text-white/40 transition-colors">
                  {" "}Lire l'article{" "}
                  <span className="">
                    →
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Spacer before closing */}
      <div className="h-16 bg-black"></div>
      {/* Final Photo: Closing Image */}
      <section className="relative w-full overflow-hidden">
        <img src="/assets/diplomatic-meeting.webp" alt="Dr. Ramatoulaye Diallo N'Diaye" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
      </section>
    </>
  )
}
