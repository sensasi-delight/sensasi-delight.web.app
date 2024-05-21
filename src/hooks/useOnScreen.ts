import { MutableRefObject, useEffect, useState } from 'react'

export default function useOnScreen(ref: MutableRefObject<null>) {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting)
            },
            { rootMargin: '-50% 0px' },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref])

    return isIntersecting
}
