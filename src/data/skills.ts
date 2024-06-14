import AlpineJsLogo from '@/assets/images/icons/alpinejs.svg'
import BootstrapLogo from '@/assets/images/icons/bootstrap.svg'
// import CLogo from '@/assets/images/icons/c.svg'
import DockerLogo from '@/assets/images/icons/docker.svg'
import GitLogo from '@/assets/images/icons/git.svg'
import GithubLogo from '@/assets/images/icons/github.svg'
import GraphQlLogo from '@/assets/images/icons/graphql.svg'
import HyperledgerLogo from '@/assets/images/icons/hyperledger.svg'
import JavascriptLogo from '@/assets/images/icons/javascript.svg'
import LaravelLogo from '@/assets/images/icons/laravel.svg'
import MaterialUiLogo from '@/assets/images/icons/materialui.svg'
import PHPLogo from '@/assets/images/icons/php.svg'
import PostgreSqlLogo from '@/assets/images/icons/postgresql.svg'
// import PythonLogo from '@/assets/images/icons/python.svg'
import ReactLogo from '@/assets/images/icons/react.svg'
import TypeScriptLogo from '@/assets/images/icons/typescript.svg'

export interface Skill {
    href?: string
    title: string
    logo: string
    level: 'beginner' | 'intermediate' | 'advanced'
}

const skills: Skill[] = [
    {
        title: 'Git',
        logo: GitLogo as string,
        level: 'beginner',
    },
    {
        title: 'GitHub',
        logo: GithubLogo as string,
        level: 'intermediate',
    },
    {
        title: 'PHP',
        logo: PHPLogo as string,
        level: 'advanced',
    },
    {
        title: 'Laravel',
        logo: LaravelLogo as string,
        level: 'advanced',
    },
    {
        title: 'React',
        logo: ReactLogo as string,
        level: 'intermediate',
    },
    {
        title: 'JavaScript',
        logo: JavascriptLogo as string,
        level: 'advanced',
    },
    {
        title: 'AlpineJS',
        logo: AlpineJsLogo as string,
        level: 'intermediate',
    },
    {
        title: 'Material UI',
        logo: MaterialUiLogo as string,
        level: 'intermediate',
    },
    {
        title: 'Bootstrap',
        logo: BootstrapLogo as string,
        level: 'intermediate',
    },
    {
        title: 'Hyperledger Fabric',
        logo: HyperledgerLogo as string,
        level: 'beginner',
    },
    {
        title: 'Docker',
        logo: DockerLogo as string,
        level: 'beginner',
    },
    // {
    //     title: 'Python',
    //     logo: PythonLogo as string,
    //     level: 'beginner',
    // },
    // {
    //     title: 'C / C++',
    //     logo: CLogo as string,
    //     level: 'beginner',
    // },
    {
        title: 'SQL',
        logo: PostgreSqlLogo as string,
        level: 'intermediate',
    },
    {
        title: 'GraphQL',
        logo: GraphQlLogo as string,
        level: 'beginner',
    },
    {
        title: 'TypeScript',
        logo: TypeScriptLogo as string,
        level: 'intermediate',
    },
]

export default skills
