import LaravelLogo from '../assets/images/icons/laravel.svg';
import AlpineJsLogo from '../assets/images/icons/alpinejs.svg';
import ReactLogo from '../assets/images/icons/react.svg';
import MaterialUiLogo from '../assets/images/icons/materialui.svg';
import HyperledgerLogo from '../assets/images/icons/hyperledger.svg';
import DockerLogo from '../assets/images/icons/docker.svg';
import BootstrapLogo from '../assets/images/icons/bootstrap.svg';
import PhpLogo from '../assets/images/icons/php.svg';

import sensasiLogisticPreview from '../assets/images/projects/sensasi-logistic.png';
import simulasiGradingPreview from '../assets/images/projects/simulasi-grading.png';
import chickenSlaughterhousePreview from '../assets/images/projects/csbn.webp';
import materialBladePreview from '../assets/images/projects/material-blade.png';

export default [
	{
		name: 'Sensasi Logistic',
		year: '2023',
		imgPreview: sensasiLogisticPreview,
		description: 'Sensasi Logistic is an application designed for stock management of raw materials and finished products in production processes. The application allows users to efficiently track inventory, optimize supply chains, and eliminate production delays.',
		stacks: [
			{ logoImg: LaravelLogo, alt: 'Laravel' },
			{ logoImg: AlpineJsLogo, alt: 'AlpineJs' },
			{ logoImg: BootstrapLogo, alt: 'Bootstrap' }
		],
		buttons: [
			{
				name: 'Source Code',
				link: 'https://github.com/sensasi-apps/sensasi-logistic',
			}, {
				name: 'Demo',
				link: 'https://demo-senlog.cu.ma/'
			}
		]
	}, {
		name: 'Simulasi Grading Kelapa Sawit',
		year: '2022',
		imgPreview: simulasiGradingPreview,
		description: 'Application that designed to help palm oil farmers in East Kalimantan estimate their potential income based on the regulations set by palm oil companies',
		stacks: [
			{ logoImg: ReactLogo, alt: 'React' },
			{ logoImg: MaterialUiLogo, alt: 'Material UI' }
		],
		buttons: [
			{
				name: 'Source Code',
				link: 'https://github.com/sensasi-apps/simulasi-grading-kelapa-sawit',
			}, {
				name: 'Visit',
				link: 'https://simulasi-grading-sawit.web.app/'
			}
		]
	}, {
		name: 'Chicken Slaughterhouse Blockchain Network',
		year: '2022',
		imgPreview: chickenSlaughterhousePreview,
		description: 'This project is a part of my final project for my master degree. This project is built using Hyperledger Fabric and Docker.',
		stacks: [
			{ logoImg: HyperledgerLogo, alt: 'Hyperledger Fabric' },
			{ logoImg: DockerLogo, alt: 'Docker' }
		],
		buttons: [
			{
				name: 'Source Code',
				link: 'https://github.com/sensasi-apps/sensasi-logistic',
			}
		]
	}, {
		name: 'Material Blade',
		year: '2022',
		imgPreview: materialBladePreview,
		description: 'Material Blade is a simple package that provides the beautifulness of Google Material Design components as Laravel Blade components. Material Blade aims to make UI/UX development of your Laravel app faster, inspired by Material UI.',
		stacks: [
			{ logoImg: LaravelLogo, alt: 'Laravel' },
			{ logoImg: PhpLogo, alt: 'PHP' },
		],
		buttons: [
			{
				name: 'Packagist',
				link: 'https://packagist.org/packages/sensasi-delight/material-blade'
			}
		]
	}
]