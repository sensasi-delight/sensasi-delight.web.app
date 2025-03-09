import type { SvgIconTypeMap } from '@mui/material/SvgIcon'
import type { OverridableComponent } from '@mui/material/OverridableComponent'
import type { Brand } from './brand'
import type { Locale } from '@/app/[[...lang]]/@types/locale'

export default interface Project {
    name: string
    year: number
    description: Record<Locale, string>
    stacks: Brand[]
    buttons: {
        text: Record<Locale, string>
        Icon?: OverridableComponent<SvgIconTypeMap<unknown>> & {
            muiName: string
        }
        url: string
    }[]
}
