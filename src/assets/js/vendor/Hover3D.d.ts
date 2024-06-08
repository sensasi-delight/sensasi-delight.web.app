declare class Hover3D {
    constructor(
        selector: string,
        options?: {
            xOffset: number
            yOffset: number
            attack: number
            release: number
            perspective: number
        },
    )
    xOffset: number
    yOffset: number
    attack: number
    release: number
    perspective: number
    create: () => void
}

export default Hover3D
