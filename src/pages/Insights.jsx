import { Link } from 'react-router-dom'
import { AUTHOR, articleNumber, articles, formatDate } from '../data/insights'

export default function Insights() {
  const [lead, ...rest] = articles

  return (
    <>
      {/* Hero */}
      <section className="relative md:min-h-[75vh] w-full overflow-hidden bg-black">
        {/* Phones: the photo sits on top and the text follows straight after it.
            Desktop: the photo fills the right 60% behind the text. */}
        <div className="relative h-[60vh] overflow-hidden md:absolute md:top-0 md:right-0 md:h-full md:w-[60%]">
          {/* On phones the photo is drawn taller than its box, so the bottom (the
              lettering on her shirt) is cropped off */}
          <img
            src="/assets/rama-portrait-2.webp"
            alt={`${AUTHOR} reading in a library`}
            className="w-full h-[130%] md:h-full object-cover object-[35%_top] md:object-[35%_30%] filter grayscale"
          />
          {/* Fade the photo's left edge into the black background. */}
          <div className="absolute inset-0 z-[2] hidden md:block bg-gradient-to-r from-black via-black/20 to-transparent"></div>
          {/* Phones: short fade at the bottom into the text */}
          <div className="absolute inset-0 z-[2] md:hidden bg-[linear-gradient(to_top,black_0%,transparent_30%)]"></div>
        </div>
        <div className="absolute inset-0 z-[2] hidden md:block bg-gradient-to-t from-black via-black/30 to-transparent"></div>

        <div className="relative z-10 -mt-10 md:mt-0 md:min-h-[75vh] flex flex-col justify-end px-6 md:px-16 lg:px-20 pb-16 md:pb-24 md:max-w-[45%]">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Thought Leadership</p>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] font-light"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
          >
            Strategic Insights
          </h1>
          <div className="w-24 h-px bg-white/60 mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl font-light tracking-wide">
            Food sovereignty, continental integration, culture and opportunity: how Africa turns its agreements into
            daily life.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full pt-20 md:pt-28 pb-12 bg-black">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10">
            <p className="lg:col-span-2 text-xs uppercase tracking-[0.3em] text-white/50 lg:pt-2 whitespace-nowrap">The Series</p>
            <div className="lg:col-span-10">
              <h2 className="font-serif text-2xl md:text-3xl text-white leading-snug font-light mb-4">
                Restored land, open borders, living heritage, and the young people who will carry them forward
              </h2>
              <p className="text-base md:text-lg text-white/60 font-light">Essays by {AUTHOR}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="w-full pb-20 md:pb-32 bg-black">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <Link to={`/insights/${lead.slug}`} className="group block border-t border-white/20 pt-10 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              <div className="md:col-span-2">
                <span className="font-serif text-5xl md:text-6xl text-white/30 group-hover:text-white transition-colors">
                  {articleNumber(0)}
                </span>
              </div>
              <div className="md:col-span-10">
                <div className="overflow-hidden mb-10">
                  <img
                    src={lead.image}
                    alt={lead.imageAlt}
                    className="w-full aspect-[3/2] lg:aspect-[16/9] object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
                  Featured Insight<span className="mx-3 text-white/30">·</span>
                  <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 font-light">
                  {lead.title}
                </h2>
                <p className="text-base md:text-lg text-white/70 leading-relaxed font-light max-w-3xl mb-8">
                  {lead.description}
                </p>
                <span className="inline-block text-sm uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  Read the full article →
                </span>
              </div>
            </div>
          </Link>

          {rest.map((article, i) => (
            <Link
              key={article.slug}
              to={`/insights/${article.slug}`}
              className="group block border-t border-white/10 py-10 hover:bg-white/[0.03] transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start">
                <div className="md:col-span-2">
                  <span className="font-serif text-3xl text-white/30 group-hover:text-white transition-colors">
                    {articleNumber(i + 1)}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl text-white leading-snug mb-4 font-light">
                    {article.title}
                  </h2>
                  <p className="text-base text-white/60 leading-relaxed font-light mb-4">{article.description}</p>
                  <span className="inline-block text-sm uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                    Read →
                  </span>
                </div>
                <div className="md:col-span-3 order-first md:order-none overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    className="w-full aspect-[3/2] object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                  />
                </div>
              </div>
            </Link>
          ))}
          <div className="border-t border-white/10"></div>
        </div>
      </section>
    </>
  )
}
