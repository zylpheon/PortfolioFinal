import { useEffect, useRef } from 'react'

/**
 * useElasticScroll
 * Rubber-band pull effect when over-scrolling past the bottom of the page.
 * Mimics Xiaomi HyperOS App Drawer behaviour.
 *
 * @param {React.RefObject} ref
 * @param {object} options
 * @param {number} options.maxPull   - Max pixel pull (default 60)
 * @param {number} options.strength  - Wheel-delta multiplier (default 0.10)
 * @param {number} options.damping   - Spring-back damping per frame 0–1 (default 0.88)
 * @param {number} options.releaseMs - ms after last wheel tick before spring-back (default 40)
 */
export function useElasticScroll(ref, options = {}) {
    const {
        maxPull = 60,
        strength = 0.10,
        damping = 0.88,
        releaseMs = 40,
    } = options

    const pullRef = useRef(0)
    const rafRef = useRef(null)
    const timerRef = useRef(null)

    useEffect(() => {
        const el = ref?.current
        if (!el) return

        const atBottom = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            return scrollTop + clientHeight >= scrollHeight - 4
        }

        /* Smooth spring-back using exponential decay per frame */
        const springBack = () => {
            pullRef.current *= damping

            if (Math.abs(pullRef.current) < 0.15) {
                pullRef.current = 0
                el.style.transition = 'transform 0.12s cubic-bezier(0.22,1,0.36,1)'
                el.style.transform = ''
                rafRef.current = null
                return
            }

            el.style.transition = ''
            el.style.transform = `translateY(${pullRef.current}px)`
            rafRef.current = requestAnimationFrame(springBack)
        }

        const startSpringBack = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            rafRef.current = requestAnimationFrame(springBack)
        }

        const onWheel = (e) => {
            if (timerRef.current) clearTimeout(timerRef.current)

            const scrollingDown = e.deltaY > 0

            if (atBottom() && scrollingDown) {
                e.preventDefault()

                /* Logarithmic resistance — feels more natural the further you pull */
                const resistance = 1 - Math.abs(pullRef.current) / (maxPull * 1.5)
                pullRef.current = Math.max(
                    pullRef.current - e.deltaY * strength * resistance,
                    -maxPull
                )

                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current)
                    rafRef.current = null
                }

                el.style.transition = ''
                el.style.transform = `translateY(${pullRef.current}px)`

                timerRef.current = setTimeout(startSpringBack, releaseMs)
            } else if (pullRef.current < 0 && !rafRef.current) {
                startSpringBack()
            }
        }

        /* ── Touch (mobile) ── */
        let touchStartY = 0

        const onTouchStart = (e) => {
            touchStartY = e.touches[0].clientY
        }

        const onTouchMove = (e) => {
            if (!atBottom()) return
            const deltaY = touchStartY - e.touches[0].clientY
            if (deltaY <= 0) return

            if (timerRef.current) clearTimeout(timerRef.current)
            if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }

            const resistance = 1 - Math.abs(pullRef.current) / (maxPull * 1.5)
            pullRef.current = Math.max(pullRef.current - deltaY * strength * 0.15 * resistance, -maxPull)
            touchStartY = e.touches[0].clientY

            el.style.transition = ''
            el.style.transform = `translateY(${pullRef.current}px)`
        }

        const onTouchEnd = () => {
            if (pullRef.current < 0) startSpringBack()
        }

        window.addEventListener('wheel', onWheel, { passive: false })
        window.addEventListener('touchstart', onTouchStart, { passive: true })
        window.addEventListener('touchmove', onTouchMove, { passive: true })
        window.addEventListener('touchend', onTouchEnd, { passive: true })

        return () => {
            window.removeEventListener('wheel', onWheel)
            window.removeEventListener('touchstart', onTouchStart)
            window.removeEventListener('touchmove', onTouchMove)
            window.removeEventListener('touchend', onTouchEnd)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [ref, maxPull, strength, damping, releaseMs])
}