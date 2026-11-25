import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { INITIAL_COUNT, gallerySections } from '../data/gallery'

const GalleryContext = createContext(null)

const imageSrc = (section, file) => `/gallery/${section.folder}/${file}`

// Every photo from every section, in data order. The lightbox steps through this list.
const ALL_IMAGES = Object.values(gallerySections).flatMap((section) =>
  section.images.map((file) => imageSrc(section, file))
)

export function GalleryProvider({ children }) {
  const [expanded, setExpanded] = useState({})
  const [current, setCurrent] = useState(null) // index into ALL_IMAGES, or null when closed

  const open = useCallback((src) => {
    const index = ALL_IMAGES.indexOf(src)
    setCurrent(index === -1 ? 0 : index)
  }, [])
  const close = useCallback(() => setCurrent(null), [])
  const prev = useCallback(() => setCurrent((i) => (i - 1 + ALL_IMAGES.length) % ALL_IMAGES.length), [])
  const next = useCallback(() => setCurrent((i) => (i + 1) % ALL_IMAGES.length), [])
  const expand = useCallback((key) => setExpanded((state) => ({ ...state, [key]: true })), [])

  const isOpen = current !== null

  // Lock page scroll and enable keyboard controls while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return undefined
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close, prev, next])

  const value = useMemo(
    () => ({ expanded, expand, open, close, prev, next, src: isOpen ? ALL_IMAGES[current] : undefined, isOpen }),
    [expanded, expand, open, close, prev, next, current, isOpen]
  )

  return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
}

function useGallery() {
  return useContext(GalleryContext)
}

export function GalleryGrid({ sectionKey, className }) {
  const { expanded, open } = useGallery()
  const section = gallerySections[sectionKey]
  if (!section) return <div className={className} data-grid={sectionKey}></div>

  const count = expanded[sectionKey] ? section.images.length : INITIAL_COUNT

  return (
    <div className={className} data-grid={sectionKey}>
      {section.images.slice(0, count).map((file) => {
        const src = imageSrc(section, file)
        return (
          <div key={src} className="gallery-item relative overflow-hidden" onClick={() => open(src)}>
            <img
              src={src}
              alt="Gallery image"
              loading="lazy"
              className="w-full h-full object-cover filter grayscale transition-all duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export function ViewMore({ sectionKey, className, buttonClassName, children }) {
  const { expanded, expand } = useGallery()
  const section = gallerySections[sectionKey]
  const allShown = !section || expanded[sectionKey] || section.images.length <= INITIAL_COUNT

  return (
    <div className={allShown ? `${className} hidden` : className}>
      <button type="button" className={buttonClassName} data-target={sectionKey} onClick={() => expand(sectionKey)}>
        {children}
      </button>
    </div>
  )
}

export function Lightbox() {
  const { isOpen, src, close, prev, next } = useGallery()

  return (
    <div
      id="lightbox"
      className={isOpen ? 'lightbox active' : 'lightbox'}
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
    >
      <span className="lightbox-close" onClick={close}>
        &times;
      </span>
      <span className="lightbox-nav lightbox-prev" onClick={prev}>
        &#10094;
      </span>
      <img id="lightbox-img" src={src} alt="Gallery image" />
      <span className="lightbox-nav lightbox-next" onClick={next}>
        &#10095;
      </span>
    </div>
  )
}
