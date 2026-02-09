/* =======================================================
 *
 * Created by anele on 09/02/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Head as InertiaHead } from '@inertiajs/react'

interface HeadProps {
    title?: string
    description?: string
    image?: string
    url?: string
}

const Head = ({
                  title = 'Laravel App',
                  description = 'Your app description here',
                  image = '/images/og-image.jpg',
                  url
}: HeadProps) => {
    const fullTitle = title ? `${title} - Laravel App` : 'Laravel App'
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

    return (
        <InertiaHead>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </InertiaHead>
    )
}

export default Head
