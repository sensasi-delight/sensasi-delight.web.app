// vendors
import Tooltip from '@mui/material/Tooltip'
// icon images
import alpineJsLogoSrc from '@/assets/images/icons/alpinejs.svg'
import bootstrapLogoSrc from '@/assets/images/icons/bootstrap.svg'
import dockerLogoSrc from '@/assets/images/icons/docker.svg'
import laravelLogoSrc from '@/assets/images/icons/laravel.svg'
import heroUiLogoSrc from '@/assets/images/icons/hero-ui-32x32.png'
import hyperledgerLogoSrc from '@/assets/images/icons/hyperledger.svg'
import materialUiLogoSrc from '@/assets/images/icons/materialui.svg'
import nextJsLogoSrc from '@/assets/images/icons/nextjs-icon-dark-background.svg'
import phpLogoSrc from '@/assets/images/icons/php.svg'
import reactLogoSrc from '@/assets/images/icons/react.svg'
import remixLogoSrc from '@/assets/images/icons/remix-letter-glowing.svg'
import typescriptLogoSrc from '@/assets/images/icons/typescript.svg'
//
import type { Brand } from '@/types/brand'

export default function BrandIconImg({ brand }: { brand: Brand }) {
    const { alt, logoSrc } = getBrandData(brand)

    return (
        <Tooltip title={alt} placement="top" arrow>
            <img loading="lazy" src={logoSrc} alt={alt} height="20px" />
        </Tooltip>
    )
}

interface BrandData {
    alt: string
    logoSrc: string
}

function getBrandData(brand: Brand): BrandData {
    if (brand === 'alpinejs') {
        return {
            alt: 'AlpineJS',
            logoSrc: alpineJsLogoSrc,
        }
    }

    if (brand === 'bootstrap') {
        return {
            alt: 'Bootstrap',
            logoSrc: bootstrapLogoSrc,
        }
    }

    if (brand === 'docker') {
        return {
            alt: 'Docker',
            logoSrc: dockerLogoSrc,
        }
    }

    if (brand === 'hero-ui') {
        return {
            alt: 'Hero UI',
            logoSrc: heroUiLogoSrc,
        }
    }

    if (brand === 'hyperledger') {
        return {
            alt: 'Hyperledger',
            logoSrc: hyperledgerLogoSrc,
        }
    }

    if (brand === 'laravel') {
        return {
            alt: 'Laravel',
            logoSrc: laravelLogoSrc,
        }
    }

    if (brand === 'material-ui') {
        return {
            alt: 'Material UI',
            logoSrc: materialUiLogoSrc,
        }
    }

    if (brand === 'nextjs') {
        return {
            alt: 'NextJS',
            logoSrc: nextJsLogoSrc,
        }
    }

    if (brand === 'php') {
        return {
            alt: 'PHP',
            logoSrc: phpLogoSrc,
        }
    }

    if (brand === 'react') {
        return {
            alt: 'React',
            logoSrc: reactLogoSrc,
        }
    }

    if (brand === 'remix') {
        return {
            alt: 'Remix',
            logoSrc: remixLogoSrc,
        }
    }

    // INTENTIONAL
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (brand === 'typescript') {
        return {
            alt: 'TypeScript',
            logoSrc: typescriptLogoSrc,
        }
    }

    throw new Error(`Unknown brand`)
}
