import { Link } from 'react-router-dom'

export default function Biography() {
  return (
    <>
      {/* Hero Section with Portrait */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img src="/assets/portrait-professional-front.webp" alt="Dr. Ramatoulaye Diallo N'Diaye" className="absolute inset-0 w-full h-full object-cover hero-portrait filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r to-transparent"></div>
        {/* Hero Text Overlay - positioned at bottom with proper spacing from nav */}
        <div className="relative z-10 h-screen flex flex-col justify-end px-6 md:px-16 lg:px-20 pb-16 md:pb-24">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
            Biography
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] font-light" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
            A Visionary Leader
          </h1>
          <div className="w-24 h-px bg-white/60 mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl font-light tracking-wide">
            The complete story of Dr. Ramatoulaye Diallo N'Diaye
          </p>
        </div>
      </section>
      {/* Biography Essay Section */}
      <section className="relative w-full py-20 md:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          {/* Essay-style Biography */}
          <article className="prose prose-invert">
            <p className="drop-cap text-base md:text-lg text-white/80 leading-relaxed font-light mb-8">
              Ramatoulaye Diallo N'Diaye is a visionary African leader whose work blends diplomacy, cultural renaissance, climate action, and innovative finance into a uniquely powerful voice for transformation on the continent. Her journey reflects a lifelong commitment to dignity, heritage, ecological stewardship, and the belief that Africa's cultural and environmental wealth can serve as a foundation for a new era of prosperity.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light mb-8">
              As CEO of the Great Green Wall of Africa Foundation, she leads a continent-wide mission to restore landscapes, build climate resilience, and unlock new pathways for sustainable development. Her work focuses on mobilizing impact capital, forging strategic partnerships across global institutions, and ensuring that African communities remain at the center of the transformation of the Great Green Wall into one of the world's most ambitious ecological projects.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light mb-8">
              Ramatoulaye also serves as Chair of the Africa Impact Finance Subgroup of the Global Impact Disclosure Taskforce, a role through which she helps shape a more inclusive global financial architecture for small and medium enterprises. Her leadership emphasizes transparency, dignity, and the central role of African voices in defining new standards for sustainability and impact.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light mb-8">
              Before entering the world of climate action and finance, Ramatoulaye served as Minister of Culture, Handicrafts and Tourism of Mali. In this role, she championed the protection of cultural heritage, the creative economy, and the global visibility of African cultural assets. Her diplomatic and cultural leadership has touched global platforms including UNESCO, world expositions, multilateral initiatives, and high-level international forums.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light mb-8">
              Her signature frameworks, such as Culture as Capital, the Bridge of Dignity, and the Ubuntu Earth Fundarticulate a philosophy rooted in harmony between people, land, and identity. These concepts guide her work and inspire new models of development that honor Africa's traditions while embracing innovation, inclusion, and global collaboration.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light mb-8">
              Her contributions have earned her prestigious distinctions including Officer of the National Order of Mali, Commander of the National Order of Merit of France, the UNESCO 70th Anniversary Medal, and the UAE Government Decoration. She also serves on the boards of Human Capital Africa and the School of Politics, Policy and Governance.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light mb-8">
              Ramatoulaye holds a PhD from CEDS Dakar. Her research explores the Great Green Wall as a symbol of time, resilience, and generational responsibility. Today she stands among Africa's most influential and trusted voices working to advance climate justice, cultural sovereignty, peace, and human dignity across the continent and beyond.
            </p>
          </article>
          {/* Call to Action */}
          <div className="text-center mt-16 pt-12 border-t border-white/10">
            <p className="text-base md:text-lg text-white/60 mb-6 font-light">
              Learn more about her vision and work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about" className="inline-block px-8 py-4 border-2 border-white/50 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300">
                {" "}Full Profile →{" "}
              </Link>
              {" "}
              <Link to="/vision" className="inline-block px-8 py-4 border-2 border-white/50 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300">
                {" "}Vision{" "}
                &
                {" "}Frameworks →{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Spacer before closing */}
      <div className="h-16 bg-black"></div>
    </>
  )
}
