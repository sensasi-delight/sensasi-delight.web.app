// icon images
import AlpineJsLogo from '@/assets/images/icons/alpinejs.svg'
import BootstrapLogo from '@/assets/images/icons/bootstrap.svg'
import DockerLogo from '@/assets/images/icons/docker.svg'
import LaravelLogo from '@/assets/images/icons/laravel.svg'
import HyperledgerLogo from '@/assets/images/icons/hyperledger.svg'
import MaterialUiLogo from '@/assets/images/icons/materialui.svg'
import PhpLogo from '@/assets/images/icons/php.svg'
import ReactLogo from '@/assets/images/icons/react.svg'
import typescriptLogo from '@/assets/images/icons/typescript.svg'
// images
import sensasiLogisticPreview from '@/assets/images/projects/sensasi-logistic.png'
import simulasiGradingPreview from '@/assets/images/projects/simulasi-grading.png'
import chickenSlaughterhousePreview from '@/assets/images/projects/csbn.webp'
import materialBladePreview from '@/assets/images/projects/material-blade.png'
import navbarCrxPreview from '@/assets/images/projects/navbar-crx.gif'

export interface Project {
    name: string
    year: string
    imgPreview: string
    description: string
    stacks: {
        logoImg: string
        alt: string
    }[]
    buttons: {
        name: string
        link: string
    }[]
}

const projects: Project[] = [
    {
        name: 'Sensasi Logistic',
        year: '2023',
        imgPreview: sensasiLogisticPreview as string,
        description:
            'Sensasi Logistic is an application designed for stock management of raw materials and finished products in production processes. The application allows users to efficiently track inventory, optimize supply chains, and eliminate production delays.',
        stacks: [
            { logoImg: LaravelLogo as string, alt: 'Laravel' },
            { logoImg: AlpineJsLogo as string, alt: 'AlpineJs' },
            { logoImg: BootstrapLogo as string, alt: 'Bootstrap' },
        ],
        buttons: [
            {
                name: 'Source Code',
                link: 'https://github.com/sensasi-apps/sensasi-logistic',
            },
            {
                name: 'Demo',
                link: 'https://demo-senlog.cu.ma/',
            },
        ],
    },
    {
        name: 'Simulasi Grading Kelapa Sawit',
        year: '2022',
        imgPreview: simulasiGradingPreview as string,
        description:
            'Application that designed to help palm oil farmers in East Kalimantan estimate their potential income based on the regulations set by palm oil companies',
        stacks: [
            { logoImg: ReactLogo as string, alt: 'React' },
            { logoImg: MaterialUiLogo as string, alt: 'Material UI' },
        ],
        buttons: [
            {
                name: 'Source Code',
                link: 'https://github.com/sensasi-apps/simulasi-grading-kelapa-sawit',
            },
            {
                name: 'Visit',
                link: 'https://simulasi-grading-sawit.web.app/',
            },
        ],
    },
    {
        name: 'Chicken Slaughterhouse Blockchain Network',
        year: '2022',
        imgPreview: chickenSlaughterhousePreview as string,
        description:
            'This project is a part of my final project for my master degree. This project is built using Hyperledger Fabric and Docker.',
        stacks: [
            { logoImg: HyperledgerLogo as string, alt: 'Hyperledger Fabric' },
            { logoImg: DockerLogo as string, alt: 'Docker' },
        ],
        buttons: [
            {
                name: 'Source Code',
                link: 'https://github.com/sensasi-apps/sensasi-logistic',
            },
        ],
    },
    {
        name: 'Material Blade',
        year: '2022',
        imgPreview: materialBladePreview as string,
        description:
            'Material Blade is a simple package that provides the beautifulness of Google Material Design components as Laravel Blade components. Material Blade aims to make UI/UX development of your Laravel app faster, inspired by Material UI.',
        stacks: [
            { logoImg: LaravelLogo as string, alt: 'Laravel' },
            { logoImg: PhpLogo as string, alt: 'PHP' },
        ],
        buttons: [
            {
                name: 'Packagist',
                link: 'https://packagist.org/packages/sensasi-delight/material-blade',
            },
        ],
    },
    {
        name: 'Sensasi Navbar',
        year: '2023',
        imgPreview: navbarCrxPreview as string,
        description:
            'Sensasi Navbar is a Chrome extension designed to enhance navigation within the browser, particularly when Chrome is in full-screen mode (F11). It provides a navigation bar that assists in navigating through tabs, offering convenience and ease of use.',
        stacks: [
            { logoImg: ReactLogo as string, alt: 'React' },
            { logoImg: typescriptLogo as string, alt: 'TypeScript' },
        ],
        buttons: [
            {
                name: 'Source Code',
                link: 'https://github.com/sensasi-delight/sensasi-navbar-crx',
            },
        ],
    },
]

export default projects
