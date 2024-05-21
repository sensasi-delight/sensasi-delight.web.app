// assets
import hostingLaravelImg from '../assets/images/writings/hosting-laravel.jpg'
import janganMasukkanSkripImg from '../assets/images/writings/import-dinamins.webp'
import belajarNoSqlImg from '../assets/images/writings/belajar-no-sql.jpg'
import halalBlockchainImg from '../assets/images/writings/halal-paper.png'

export type Writing = {
    title: string
    type: string
    date: string
    tooltip: string
    link: string
    previewImg: string
    previewText: string
}

const writings: Writing[] = [
    {
        title: 'Hosting Laravel secara Optimal di 000webhost',
        type: 'Blog',
        date: '2023-03-28',
        tooltip: 'medium.com',
        link: 'https://medium.com/@sensasi_delight/hosting-laravel-secara-optimal-di-000webhost-fc4c46ef4eca',
        previewImg: hostingLaravelImg,
        previewText:
            'Sebagai developer (Laravel) freelance atau pemula, seringkali kita memerlukan web hosting yang gratis untuk meng-”online”-kan aplikasi yang telah dibangun untuk keperluan portofolio atau demonstrasi produk aplikasi kita.',
    },
    {
        title: 'Jangan Masukkan Skrip yang Tidak Diperlukan oleh Halaman!',
        type: 'Blog',
        date: '2023-03-28',
        tooltip: 'medium.com',
        link: 'https://medium.com/@sensasi_delight/jangan-masukkan-skrip-yang-tidak-diperlukan-oleh-halaman-569a05c26744',
        previewImg: janganMasukkanSkripImg,
        previewText:
            'Ketika membangun aplikasi web yang menggunakan JavaScript, tentu saja kita sangat terbantu oleh komunitas JavaScript di seluruh dunia yang membuat pustaka (library) yang bersifat open-source dan dapat kita gunakan secara cuma-cuma, seperti JQuery, Moment.js, AOS, dan lain-lain.',
    },
    {
        title: 'Halal Blockchain Application for a Chicken Slaughtering Factory',
        type: 'Paper',
        date: '2021-06-17',
        tooltip: 'Google Scholar',
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=N9MoW0EAAAAJ&citation_for_view=N9MoW0EAAAAJ:2P1L_qKh6hAC',
        previewImg: halalBlockchainImg,
        previewText:
            'The vast majority of traded products in Indonesia must be halal certified. This means that Indonesian consumers rely heavily on certificates issued by the Indonesian halal authority. Halal certification validates individual products and after four years, a certificate expires and must be renewed.',
    },
    {
        title: 'Belajar NoSql',
        type: 'Book',
        date: '2022-12-17',
        tooltip: 'Google Play Book',
        link: 'https://play.google.com/store/books/details?id=0pJUEAAAQBAJ',
        previewImg: belajarNoSqlImg,
        previewText:
            'NoSQL atau Not only SQL atau Non SQL Database adalah istilahyang digunakan untuk jenis database yang tidak berbentuk. Buku ini menjelaskan empat tipe database NoSQL (Key Value, Document, Column-Family dan Graph). Selain itu, buku ini juga menjelaskan studi kasus penggunaan database tersebut.',
    },
]

export default writings
