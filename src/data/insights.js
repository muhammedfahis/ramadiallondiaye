import data from './insights.json'

// Strategic Insights articles, in display order. To add one, append an entry to
// insights.json: { slug, title, description, originalUrl, signed, paragraphs[] }.
export const articles = data

export const AUTHOR = "Dr. Ramatoulaye Diallo N'Diaye"

export const getArticle = (slug) => articles.find((article) => article.slug === slug)

// 0 -> "01"
export const articleNumber = (index) => String(index + 1).padStart(2, '0')
