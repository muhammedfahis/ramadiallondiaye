import { Link, useParams } from 'react-router-dom'
import { AUTHOR, articleNumber, articles, formatDate, getArticle } from '../data/insights'
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

const TEXT = 'text-base md:text-lg text-white/80 leading-relaxed font-light mb-8'

const LINK = 'text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors'

// Turns { text, links: { phrase: url } } into text with the first occurrence of each phrase linked.
function withLinks(text, links = {}) {
  let parts = [text]
  for (const [phrase, href] of Object.entries(links)) {
    parts = parts.flatMap((part) => {
      if (typeof part !== 'string' || !part.includes(phrase)) return [part]
      const at = part.indexOf(phrase)
      return [
        part.slice(0, at),
        <a key={phrase} href={href} target="_blank" rel="noopener noreferrer" className={LINK}>
          {phrase}
        </a>,
        part.slice(at + phrase.length),
      ]
    })
  }
  return parts
}

function Block({ block, first }) {
  if (typeof block === 'string') return <p className={`${first ? 'drop-cap ' : ''}${TEXT}`}>{block}</p>
  if (block.text) return <p className={`${first ? 'drop-cap ' : ''}${TEXT}`}>{withLinks(block.text, block.links)}</p>
  if (block.heading) {
    return <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-snug mt-14 mb-6">{block.heading}</h2>
  }
  if (block.list) {
    return (
      <ul className="mb-8 space-y-5 border-l border-white/20 pl-6">
        {block.list.map((item) => (
          <li key={item.lead} className="text-base md:text-lg text-white/80 leading-relaxed font-light">
            <strong className="font-normal text-white">{item.lead}</strong> {item.text}
          </li>
        ))}
      </ul>
    )
  }
  if (block.closing) {
    return <p className="font-serif text-xl md:text-2xl text-white leading-snug mt-12 mb-8">{block.closing}</p>
  }
  return null
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
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            By {AUTHOR}
            <span className="mx-3 text-white/30">·</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </p>
        </div>
      </section>

      {/* Article Photo: black and white like the rest of the site, colour on hover */}
      {article.image && (
        <section className="w-full pb-12 md:pb-16 bg-black">
          <div className="max-w-6xl mx-auto px-0 md:px-16">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full aspect-[3/2] lg:aspect-[16/9] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </section>
      )}

      {/* Article Body */}
      <section className="w-full pb-20 md:pb-28 bg-black">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <article className="border-t border-white/10 pt-12 md:pt-16">
            {article.body.map((block, i) => (
              <Block key={i} block={block} first={i === 0} />
            ))}
          </article>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="font-serif text-xl italic text-white">{AUTHOR}</p>
          </div>
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
