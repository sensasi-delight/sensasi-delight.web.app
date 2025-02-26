import type { SvgIconTypeMap } from '@mui/material/SvgIcon'
import type { OverridableComponent } from '@mui/material/OverridableComponent'
import type { Brand } from './brand'

export default interface Project {
    name: string
    year: number
    description: string
    stacks: Brand[]
    buttons: {
        text: string
        Icon?: OverridableComponent<SvgIconTypeMap<unknown>> & {
            muiName: string
        }
        url: string
    }[]
}
