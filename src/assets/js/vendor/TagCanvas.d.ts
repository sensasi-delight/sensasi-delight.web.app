interface TagCanvas {
    Start: (
        canvasId: string,
        taglistId: string,
        options: {
            activeAudio: boolean
            minSpeed: number
            freezeActive: boolean
            shuffleTags: boolean
            shape: string
            weight: boolean
            textColour: null
            weightFrom: string
            noTagsMessage?: boolean
            weightSize: number
            imageMode: string
            imagePadding: number
            pinchZoom: boolean
            wheelZoom: boolean
            clickToFront: number
            fadeIn: number
            initial: number[]
        },
    ) => void
    Reload: (canvasId: string) => void
    started: 1 | undefined
}
