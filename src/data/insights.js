import data from './insights.json'

// Strategic Insights articles, in display order. To add one, append an entry to
// insights.json: { slug, title, date (YYYY-MM-DD), description, body[] }.
// Each body block is one of:
//   "text"                                  a paragraph
//   { "text": "...", "links": { "phrase": "https://..." } }   a paragraph where
//                                           the first occurrence of each phrase is a link
//   { "heading": "..." }                    a section heading
//   { "list": [{ "lead": "...", "text": "..." }] }   a list; lead is shown in bold
//   { "closing": "..." }                    the closing line, shown in bold
export const articles = data

export const AUTHOR = "Dr. Ramatoulaye Diallo N'Diaye"

export const getArticle = (slug) => articles.find((article) => article.slug === slug)

// 0 -> "01"
export const articleNumber = (index) => String(index + 1).padStart(2, '0')

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// "2026-11-03" -> "3 November 2026". Parsed by hand so the server render and the
// browser always agree, whatever the time zone.
export function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number)
  return `${day} ${MONTHS[month - 1]} ${year}`
}
