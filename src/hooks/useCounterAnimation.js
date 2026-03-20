import { useEffect, useRef, useState } from 'react'

/**
 * useCounterAnimation
 * Animates a number from 0 to `target` when `inView` becomes true.
 * @param {number} target  - Final number value
 * @param {number} duration - Animation duration in ms
 * @param {boolean} inView  - Trigger flag
 */
export function useCounterAnimation(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (!inView) return

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)

      setCount(Math.round(easedProgress * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startTimeRef.current = null
    }
  }, [inView, target, duration])

  return count
}
