import React from 'react';

/**
 * Props interface for HeroWithQuote component
 */
interface HeroWithQuoteProps {
    /** Path to the background image (relative to public folder) */
    imageSrc: string;
    /** Alt text for accessibility - describes the image */
    imageAlt: string;
    /** The quote text to display */
    quote: string;
    /** Attribution for the quote (e.g., "— Dr. Name") */
    attribution: string;
    /** Horizontal positioning of the quote: 'left', 'center', or 'right' */
    position?: 'left' | 'center' | 'right';
    /** Optional: Apply grayscale filter to background */
    grayscale?: boolean;
    /** Optional: Custom object-position for image focus (e.g., "center 25%") */
    objectPosition?: string;
}

/**
 * HeroWithQuote Component
 * 
 * A full-screen hero section with a background image, gradient overlay,
 * and overlaid quote text. Supports flexible positioning (left/center/right).
 * 
 * CRITICAL Z-INDEX LAYERING:
 * - Background image: z-0 (default)
 * - Gradient overlay: z-10
 * - Quote container: z-20
 * 
 * @example
 * <HeroWithQuote
 *   imageSrc="/images/hero.jpg"
 *   imageAlt="Dr. Ramatoulaye speaking at conference"
 *   quote="Culture is wealth. Culture is value."
 *   attribution="— Dr. Ramatoulaye Diallo N'Diaye"
 *   position="center"
 * />
 */
const HeroWithQuote: React.FC<HeroWithQuoteProps> = ({
    imageSrc,
    imageAlt,
    quote,
    attribution,
    position = 'center',
    grayscale = true,
    objectPosition = 'center 25%',
}) => {
    // Position-specific classes for quote container and text alignment
    const positionClasses = {
        left: {
            container: 'justify-start',
            text: 'text-left',
            wrapper: 'max-w-3xl', // Limit width for left-aligned
        },
        center: {
            container: 'justify-center',
            text: 'text-center',
            wrapper: 'max-w-4xl mx-auto', // Center with auto margins
        },
        right: {
            container: 'justify-end',
            text: 'text-right',
            wrapper: 'max-w-3xl ml-auto', // Push to right with ml-auto
        },
    };

    const { container, text, wrapper } = positionClasses[position];

    return (
        <section
            className="relative h-screen w-full overflow-hidden"
            aria-label={imageAlt}
        >
            {/* Background Image Layer - z-0 (implicit) */}
            <img
                src={imageSrc}
                alt={imageAlt}
                className={`absolute inset-0 w-full h-full object-cover ${grayscale ? 'filter grayscale' : ''
                    }`}
                style={{ objectPosition }}
                loading="lazy"
            />

            {/* Gradient Overlay Layer - z-10 (CRITICAL: Must be lower than quote) */}
            {/* Enhanced gradient for better text backdrop: 95% → 85% → 40% */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/40 z-10"
                aria-hidden="true"
            />

            {/* Quote Container Layer - z-30 (CRITICAL: Must be higher than overlay) */}
            <div
                className={`absolute bottom-0 left-0 right-0 z-30 pb-12 md:pb-16 lg:pb-20 px-6 md:px-16 lg:px-20 flex ${container}`}
            >
                <div className={wrapper}>
                    {/* Quote Text with text-shadow for enhanced readability */}
                    <blockquote
                        className={`text-white ${text} font-serif text-2xl md:text-4xl lg:text-5xl leading-relaxed font-light`}
                        style={{
                            textWrap: 'pretty',
                            textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)'
                        } as React.CSSProperties}
                    >
                        "{quote}"
                    </blockquote>

                    {/* Attribution with lighter text-shadow */}
                    <footer
                        className={`text-white/90 ${text} mt-6 md:mt-8 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wider`}
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' } as React.CSSProperties}
                    >
                        {attribution}
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default HeroWithQuote;
