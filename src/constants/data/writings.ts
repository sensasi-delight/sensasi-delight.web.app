import type Writing from '@/types/writings'

const writings: Writing[] = [
    {
        lang: 'en',
        title: {
            en: 'Halal Blockchain Application for a Chicken Slaughtering Factory',
            jp: '食鳥処理場向けハラル認証ブロックチェーンアプリケーション',
        },
        type: 'paper',
        date: '2021-06-17',
        platform: 'Google Scholar',
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=N9MoW0EAAAAJ&citation_for_view=N9MoW0EAAAAJ:2P1L_qKh6hAC',
        previewText: {
            en: 'The vast majority of traded products in Indonesia must be halal certified. This means that Indonesian consumers rely heavily on certificates issued by the Indonesian halal authority. Halal certification validates individual products and after four years, a certificate expires and must be renewed.',
            jp: 'インドネシアで取引される製品の大半はハラル認証を取得する必要があります。これは、インドネシアの消費者がハラル認証機関の発行する証明書に大きく依存していることを意味します。ハラル認証は個々の製品を検証するもので、4年後に有効期限が切れるため更新が必要です。',
        },
    },

    {
        lang: 'id',
        title: {
            en: 'Belajar NoSql',
            jp: 'Belajar NoSql',
        },
        type: 'book',
        date: '2022-12-17',
        platform: 'Google Play Book',
        link: 'https://play.google.com/store/books/details?id=0pJUEAAAQBAJ',
        previewText: {
            id: 'NoSQL atau Not only SQL atau Non SQL Database adalah istilah yang digunakan untuk jenis database yang tidak berbentuk. Buku ini menjelaskan empat tipe database NoSQL (Key Value, Document, Column-Family dan Graph). Selain itu, buku ini juga menjelaskan studi kasus penggunaan database tersebut.',
            en: 'NoSQL (Not only SQL or Non-SQL Database) is a term used for non-relational databases. This book explains four types of NoSQL databases (Key-Value, Document, Column-Family, and Graph). Additionally, it includes case studies on the practical applications of these databases.',
            jp: 'NoSQL（Not only SQLまたはNon SQL Database）は、非リレーショナルデータベースを指す用語です。本書では、NoSQLデータベースの4種類（キーバリュー、ドキュメント、カラムファミリー、グラフ）を解説しています。さらに、実際の使用事例を通じてこれらのデータベースの活用方法を紹介しています。',
        },
    },

    {
        lang: 'id',
        title: {
            id: 'Mulailah Menata Alur Kerja di GitHub',
            en: 'Streamline Your Workflow on GitHub',
            jp: 'GitHubでのワークフロー整理を始めよう',
        },
        type: 'blog',
        date: '2024-08-05',
        platform: 'medium.com',
        link: 'https://medium.com/@sensasi-delight/mulailah-menata-alur-kerja-di-github-d7af4f7968cf',
        previewText: {
            id: 'Saya telah mengamati dan mendapati bahwa saat ini masih banyak programmer yang tidak menggunakan fitur-fitur yang tersedia gratis di GitHub. Hal tersebut mengingatkan saya pada diri saya sendiri ketika masih sangat awam dalam pengelolaan kode menggunakan Git ataupun GitHub.',
            en: 'I have observed and noticed that there are still many programmers who do not utilize the free features available on GitHub. This reminds me of myself when I was still very inexperienced in managing code using Git or GitHub.',
            jp: '私は観察し、気づいたことですが、現在でも多くのプログラマーがGitHubの無料機能を活用していません。これは、私自身がまだGitやGitHubを使ったコード管理に不慣れだった頃を思い出させます。',
        },
    },

    {
        lang: 'id',
        title: {
            en: 'Optimizing Laravel Hosting on 000webhost',
            id: 'Hosting Laravel secara Optimal di 000webhost',
            jp: 'Laravelを000webhostに最適化する',
        },
        type: 'blog',
        date: '2023-03-28',
        platform: 'medium.com',
        link: 'https://medium.com/@sensasi_delight/hosting-laravel-secara-optimal-di-000webhost-fc4c46ef4eca',
        previewText: {
            en: 'As a developer (Laravel) freelance or beginner, sometimes we may need free web hosting to “online” our application for portfolio or demo product application we build.',
            id: 'Sebagai developer (Laravel) freelance atau pemula, sering kali kita memerlukan web hosting yang gratis untuk meng-”online”-kan aplikasi yang telah dibangun untuk keperluan portofolio atau demonstrasi produk aplikasi kita.',
            jp: 'Laravelを無料でホスティングする必要性は、ポートフォリオやデモプロダクトアプリケーションを作成するために必要です。',
        },
    },
]

export default writings.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)
