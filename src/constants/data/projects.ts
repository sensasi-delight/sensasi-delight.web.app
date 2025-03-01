// icons
import GitHubIcon from '@mui/icons-material/GitHub'
import WebIcon from '@mui/icons-material/Language'
//
import type Project from '@/types/project'

const projects: Project[] = [
    {
        name: 'Sensasi Logistic',
        year: 2023,
        description:
            'Sensasi Logistic is an application designed for stock management of raw materials and finished products in production processes. The application allows users to efficiently track inventory, optimize supply chains, and eliminate production delays.',
        stacks: ['laravel', 'alpinejs', 'bootstrap'],
        buttons: [
            {
                text: 'Source Code',
                Icon: GitHubIcon,
                url: 'https://github.com/sensasi-apps/sensasi-logistic',
            },
            // {
            //     text: 'Demo',
            //     url: 'https://demo-senlog.cu.ma/',
            // },
        ],
    },
    {
        name: 'Simulasi Grading Kelapa Sawit',
        year: 2022,
        description:
            'Application that designed to help palm oil farmers in East Kalimantan estimate their potential income based on the regulations set by palm oil companies',
        stacks: ['react', 'material-ui'],
        buttons: [
            {
                text: 'Source Code',
                Icon: GitHubIcon,
                url: 'https://github.com/sensasi-apps/simulasi-grading-kelapa-sawit',
            },
            {
                text: 'Visit',
                Icon: WebIcon,
                url: 'https://simulasi-grading-sawit.web.app/',
            },
        ],
    },
    {
        name: 'Chicken Slaughterhouse Blockchain Network',
        year: 2022,
        description:
            'This project is a part of my final project for my master degree. This project is built using Hyperledger Fabric and Docker.',
        stacks: ['hyperledger', 'docker'],
        buttons: [
            {
                text: 'Source Code',
                Icon: GitHubIcon,
                url: 'https://github.com/sensasi-apps/sensasi-logistic',
            },
        ],
    },
    {
        name: 'Material Blade',
        year: 2022,
        description:
            'Material Blade is a simple package that provides the beautifulness of Google Material Design components as Laravel Blade components. Material Blade aims to make UI/UX development of your Laravel app faster, inspired by Material UI.',
        stacks: ['laravel'],
        buttons: [
            {
                text: 'Packagist',
                url: 'https://packagist.org/packages/sensasi-delight/material-blade',
            },
        ],
    },
    {
        name: 'Sensasi Navbar',
        year: 2023,
        description:
            'Sensasi Navbar is a Chrome extension designed to enhance navigation within the browser, particularly when Chrome is in full-screen mode (F11). It provides a navigation bar that assists in navigating through tabs, offering convenience and ease of use.',
        stacks: ['react', 'material-ui', 'typescript'],
        buttons: [
            {
                text: 'Source Code',
                Icon: GitHubIcon,
                url: 'https://github.com/sensasi-delight/sensasi-navbar-crx',
            },
        ],
    },

    {
        name: 'Sensasi POS',
        year: 2024,
        description:
            'A simple Point of Sale application designed to help record sales of goods at stalls / shops / UMKM / stands / outlets / supermarkets.',
        stacks: ['nextjs', 'hero-ui'],
        buttons: [
            {
                text: 'Source Code',
                Icon: GitHubIcon,
                url: 'https://github.com/sensasi-delight/sensasi-pos',
            },
        ],
    },

    {
        name: 'MUI DataTable Delight',
        year: 2025,
        description:
            'A responsive DataTable component built with MUI for React-based project.',
        stacks: ['react', 'material-ui'],
        buttons: [
            {
                text: 'Visit',
                Icon: WebIcon,
                url: 'https://mui-datatable-delight.vercel.app',
            },
        ],
    },

    {
        name: 'Reformat Delight',
        year: 2025,
        description:
            'Free and open source tool that is a web app that allows you to reformat/convert your file(s).',
        stacks: ['remix', 'material-ui'],
        buttons: [
            {
                text: 'Visit',
                Icon: WebIcon,
                url: 'https://reformat-delight.vercel.app',
            },
        ],
    },
]

export default projects.sort((a, b) => b.year - a.year)
