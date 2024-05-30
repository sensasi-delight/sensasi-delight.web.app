import { RefObject, useEffect, useState } from 'react'

export default function useOnScreen(ref: RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting)
            },
            { rootMargin: '-50% 0px' },
        )

        const refCurrent = ref.current

        if (refCurrent) {
            observer.observe(refCurrent)
        }

        return () => {
            if (refCurrent) {
                observer.unobserve(refCurrent)
            }
        }
    })

    return isIntersecting
}
