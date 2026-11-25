import { Link } from 'react-router-dom'
import { AUTHOR, articleNumber, articles } from '../data/insights'

export default function Insights() {
  const [lead, ...rest] = articles

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] w-full overflow-hidden bg-black">
        <div className="absolute inset-y-0 right-0 w-full md:w-[65%]">
          <img
            src="/assets/rama-portrait-2.webp"
            alt={`${AUTHOR} reading in a library`}
            className="w-full h-full object-cover object-[35%_30%] filter grayscale"
          />
          {/* Fade the photo's left edge into the black background. z-[2] because
              index.css gives every `section img` z-index 1. */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black via-black/60 md:via-black/20 to-transparent"></div>
        </div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black via-black/30 to-transparent"></div>

        <div className="relative z-10 min-h-[75vh] flex flex-col justify-end px-6 md:px-16 lg:px-20 pb-16 md:pb-24">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Thought Leadership</p>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] font-light"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
          >
            Strategic Insights
          </h1>
          <div className="w-24 h-px bg-white/60 mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl font-light tracking-wide">
            Africa&apos;s strategic role in global supply chains, critical minerals, and the economic corridors shaping
            the future of sustainable development.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full pt-20 md:pt-28 pb-12 bg-black">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <p className="md:col-span-2 text-xs uppercase tracking-[0.3em] text-white/50 pt-2">The Series</p>
            <div className="md:col-span-10">
              <h2 className="font-serif text-2xl md:text-3xl text-white leading-snug font-light mb-4">
                Sovereign resource development, strategic corridors, and global supply chains
              </h2>
              <p className="text-base md:text-lg text-white/60 font-light">Policy-style analysis by {AUTHOR}.</p>
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
                <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">Featured Insight</p>
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
                  <h2 className="font-serif text-2xl md:text-3xl text-white leading-snug mb-4 font-light">
                    {article.title}
                  </h2>
                  <p className="text-base text-white/60 leading-relaxed font-light">{article.description}</p>
                </div>
                <div className="md:col-span-3 md:text-right md:pt-2">
                  <span className="inline-block text-sm uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                    Read →
                  </span>
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
