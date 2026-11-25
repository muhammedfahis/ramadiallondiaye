import { GalleryProvider, GalleryGrid, Lightbox, ViewMore } from '../components/gallery'

export default function Gallery() {
  return (
    <GalleryProvider>
      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden">
        <img src="/rama/vision-background.webp" alt="Gallery" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-end p-8 pb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">
            Visual Archive
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] font-light" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
            Gallery
          </h1>
          <div className="w-24 h-px bg-white/60"></div>
        </div>
      </header>
      {/* Gallery Introduction */}
      <section className="px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
            Moments from diplomatic engagements, climate summits, cultural celebrations, and community initiatives across Africa and the world.
          </p>
        </div>
      </section>
      {/* SECTION: 2024 COP16 EVENTS */}
      <section className="gallery-section section-padding bg-black" data-section="cop16-2024">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2024
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              COP16 Events
            </h2>
          </div>
          <GalleryGrid sectionKey="cop16-2024" />
          <ViewMore sectionKey="cop16-2024" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION: SUMMIT of the future 2024 */}
      <section className="gallery-section section-padding bg-black" data-section="summit-future-2024">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2024
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              Summit of the Future
            </h2>
          </div>
          <GalleryGrid sectionKey="summit-future-2024" />
          <ViewMore sectionKey="summit-future-2024" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION: NDC SUMMIT 2024 */}
      <section className="gallery-section section-padding bg-black" data-section="ndc-summit-2024">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2024
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              NDC Summit
            </h2>
          </div>
          <GalleryGrid sectionKey="ndc-summit-2024" />
          <ViewMore sectionKey="ndc-summit-2024" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION: UAE-AFRICA ECONOMIC CORRIDOR SUMMIT 2024 */}
      <section className="gallery-section section-padding bg-black" data-section="uae-africa-2024">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2024
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              UAE-Africa Economic Corridor Summit
            </h2>
          </div>
          <GalleryGrid sectionKey="uae-africa-2024" />
          <ViewMore sectionKey="uae-africa-2024" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION: Climate Action Africa Forum 2024 (CAAF24) */}
      <section className="gallery-section section-padding bg-black" data-section="caaf24">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2024
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              Climate Action Africa Forum
              <br />
              {" "}
              <span className="text-white/50">
                CAAF24
              </span>
            </h2>
          </div>
          <GalleryGrid sectionKey="caaf24" />
          <ViewMore sectionKey="caaf24" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION: African Diaspora Investment Symposium 2024 (ADIS24) */}
      <section className="gallery-section section-padding bg-black" data-section="adis24">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2024
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              African Diaspora Investment Symposium
              <br />
              {" "}
              <span className="text-white/50">
                ADIS24
              </span>
            </h2>
          </div>
          <GalleryGrid sectionKey="adis24" />
          <ViewMore sectionKey="adis24" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION: 2023 GGWOA-LG NOVA */}
      <section className="gallery-section section-padding bg-black" data-section="ggwoa">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2023
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              GGWOA-LG NOVA Capital and Climate Investment Event
              <br />
              {" "}
              <span className="text-white/50">
                @ UNGA 78th Session
              </span>
            </h2>
          </div>
          <GalleryGrid sectionKey="ggwoa" />
          <ViewMore sectionKey="ggwoa" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION 2: 2023 AFRICAN WOMEN */}
      <section className="gallery-section section-padding bg-black" data-section="african-women">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2023
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              African Women and Children in Climate Action Conference
              <br />
              {" "}
              <span className="text-white/50">
                Accra, Ghana
              </span>
            </h2>
          </div>
          <GalleryGrid sectionKey="african-women" />
          <ViewMore sectionKey="african-women" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION 3: 2023 PRIVATE SECTOR */}
      <section className="gallery-section section-padding bg-black" data-section="private-sector">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2023
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              Private Sector Engagement for Great Green Wall Event
              <br />
              {" "}
              <span className="text-white/50">
                Niamey, Niger
              </span>
            </h2>
          </div>
          <GalleryGrid sectionKey="private-sector" />
          <ViewMore sectionKey="private-sector" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION 4: 2022 OSAA-AFRICA */}
      <section className="gallery-section section-padding bg-black" data-section="osaa">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2022
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              OSAA-Africa Investor Climate Finance Conference
              <br />
              {" "}
              <span className="text-white/50">
                New York, US
              </span>
            </h2>
          </div>
          <GalleryGrid sectionKey="osaa" />
          <ViewMore sectionKey="osaa" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION 5: 2022 US-AFRICA LEADERS */}
      <section className="gallery-section section-padding bg-black" data-section="us-africa">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2022
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              US-Africa Leaders' Summit
              <br />
              {" "}
              <span className="text-white/50">
                Washington DC, US
              </span>
            </h2>
          </div>
          <GalleryGrid sectionKey="us-africa" />
          <ViewMore sectionKey="us-africa" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION 6: 2022 HUMAN CAPITAL */}
      <section className="gallery-section section-padding bg-black" data-section="human-capital">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              2022
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              Human Capital Africa Summit
              <br />
              {" "}
              <span className="text-white/50">
                New York, US
              </span>
            </h2>
          </div>
          <GalleryGrid sectionKey="human-capital" />
          <ViewMore sectionKey="human-capital" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* SECTION 7: IN-GOVERNMENT OFFICE - MALI */}
      <section className="gallery-section section-padding bg-black" data-section="mali-office">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              In Office
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-tight">
              In-Government Office
              <br />
              {" "}
              <span className="text-white/50">
                Mali
              </span>
            </h2>
          </div>
          <GalleryGrid sectionKey="mali-office" />
          <ViewMore sectionKey="mali-office" className="mt-10 text-center" buttonClassName="view-more-btn group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all duration-300">
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
            {" "}
            <span>
              View All Photos
            </span>
            {" "}
            <span className="relative">
              <span className="block w-12 h-px bg-white/30 group-hover:w-16 transition-all duration-300"></span>
            </span>
          </ViewMore>
        </div>
      </section>
      {/* VIDEO SECTION */}
      <section className="gallery-section section-padding bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              Media
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light">
              Videos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 - Vimeo */}
            <div className="video-card">
              <div className="video-container rounded-sm overflow-hidden">
                <iframe src="https://player.vimeo.com/video/839384564?h=73cde7eeb7&autoplay=0&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            {/* Video 2 - YouTube */}
            <div className="video-card">
              <div className="video-container rounded-sm overflow-hidden">
                <iframe src="https://www.youtube.com/embed/vkNDbf6okvg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            {/* Video 3 - YouTube */}
            <div className="video-card">
              <div className="video-container rounded-sm overflow-hidden">
                <iframe src="https://www.youtube.com/embed/tgCGm66rsPo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            {/* Video 4 - Vimeo */}
            <div className="video-card">
              <div className="video-container rounded-sm overflow-hidden">
                <iframe src="https://player.vimeo.com/video/736629296?h=4fe308db03&autoplay=0&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lightbox */}
      <Lightbox />
      {/* Spacer */}
      <div className="h-16 bg-black"></div>
    </GalleryProvider>
  )
}
