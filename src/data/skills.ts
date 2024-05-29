import AlpineJsLogo from '../assets/images/icons/alpinejs.svg'
import BootstrapLogo from '../assets/images/icons/bootstrap.svg'
import CLogo from '../assets/images/icons/c.svg'
import DockerLogo from '../assets/images/icons/docker.svg'
import GitLogo from '../assets/images/icons/git.svg'
import GithubLogo from '../assets/images/icons/github.svg'
import GraphQlLogo from '../assets/images/icons/graphql.svg'
import HyperledgerLogo from '../assets/images/icons/hyperledger.svg'
import JavascriptLogo from '../assets/images/icons/javascript.svg'
import LaravelLogo from '../assets/images/icons/laravel.svg'
import MaterialUiLogo from '../assets/images/icons/materialui.svg'
import PHPLogo from '../assets/images/icons/php.svg'
import PostgreSqlLogo from '../assets/images/icons/postgresql.svg'
import PythonLogo from '../assets/images/icons/python.svg'
import ReactLogo from '../assets/images/icons/react.svg'
import TypeScriptLogo from '../assets/images/icons/typescript.svg'

export type Skill = {
    href?: string
    title: string
    logo: string
    level: 'beginner' | 'intermediate' | 'advanced'
}

const skills: Skill[] = [
    {
        title: 'Git',
        logo: GitLogo,
        level: 'beginner',
    },
    {
        title: 'GitHub',
        logo: GithubLogo,
        level: 'intermediate',
    },
    {
        title: 'PHP',
        logo: PHPLogo,
        level: 'advanced',
    },
    {
        title: 'Laravel',
        logo: LaravelLogo,
        level: 'advanced',
    },
    {
        title: 'React',
        logo: ReactLogo,
        level: 'intermediate',
    },
    {
        title: 'JavaScript',
        logo: JavascriptLogo,
        level: 'advanced',
    },
    {
        title: 'AlpineJS',
        logo: AlpineJsLogo,
        level: 'intermediate',
    },
    {
        title: 'Material UI',
        logo: MaterialUiLogo,
        level: 'intermediate',
    },
    {
        title: 'Bootstrap',
        logo: BootstrapLogo,
        level: 'intermediate',
    },
    {
        title: 'Hyperledger Fabric',
        logo: HyperledgerLogo,
        level: 'intermediate',
    },
    {
        title: 'Docker',
        logo: DockerLogo,
        level: 'beginner',
    },
    {
        title: 'Python',
        logo: PythonLogo,
        level: 'beginner',
    },
    {
        title: 'C / C++',
        logo: CLogo,
        level: 'beginner',
    },
    {
        title: 'SQL',
        logo: PostgreSqlLogo,
        level: 'intermediate',
    },
    {
        title: 'GraphQL',
        logo: GraphQlLogo,
        level: 'beginner',
    },
    {
        title: 'TypeScript',
        logo: TypeScriptLogo,
        level: 'advanced',
    },
]

export default skills
