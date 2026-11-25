import { Link, useParams } from 'react-router-dom'
import { AUTHOR, articleNumber, articles, getArticle } from '../data/insights'
import NotFound from './NotFound'

function Pager({ article, index, direction }) {
  if (!article) return <div></div>
  const isNext = direction === 'next'
  return (
    <Link to={`/insights/${article.slug}`} className={`group block ${isNext ? 'md:text-right' : ''}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
        {isNext ? 'Next' : 'Previous'} · {articleNumber(index)}
      </p>
      <p className="font-serif text-xl md:text-2xl text-white/80 group-hover:text-white transition-colors leading-snug font-light">
        {article.title}
      </p>
    </Link>
  )
}

export default function InsightArticle() {
  const { slug } = useParams()
  const article = getArticle(slug)
  if (!article) return <NotFound />

  const index = articles.indexOf(article)
  const prev = articles[index - 1]
  const next = articles[index + 1]

  return (
    <>
      {/* Article Header */}
      <section className="w-full pt-36 md:pt-44 pb-12 md:pb-16 bg-black">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <Link
            to="/insights"
            className="inline-block text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors mb-10"
          >
            ← Strategic Insights
          </Link>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">
            Strategic Insight · No. {articleNumber(index)}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-light mb-8">
            {article.title}
          </h1>
          <div className="w-24 h-px bg-white/60 mb-8"></div>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8">{article.description}</p>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">By {AUTHOR}</p>
        </div>
      </section>

      {/* Article Body */}
      <section className="w-full pb-20 md:pb-28 bg-black">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <article className="border-t border-white/10 pt-12 md:pt-16">
            {article.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`${i === 0 ? 'drop-cap ' : ''}text-base md:text-lg text-white/80 leading-relaxed font-light mb-8`}
              >
                {paragraph}
              </p>
            ))}
          </article>

          {article.signed && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-serif text-xl italic text-white">{AUTHOR}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50 mt-2">CEO, Starcom International</p>
            </div>
          )}

          <p className="mt-10 text-sm text-white/40 font-light">
            Originally published by{' '}
            <a
              href={article.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 underline underline-offset-4 hover:text-white transition-colors"
            >
              Starcom International
            </a>
            .
          </p>
        </div>
      </section>

      {/* Previous / Next */}
      <section className="w-full pb-20 md:pb-28 bg-black">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/10 pt-12">
            <Pager article={prev} index={index - 1} direction="prev" />
            <Pager article={next} index={index + 1} direction="next" />
          </div>
          <div className="text-center mt-16">
            <Link
              to="/insights"
              className="inline-block px-8 py-4 border-2 border-white/50 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              All Strategic Insights →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
