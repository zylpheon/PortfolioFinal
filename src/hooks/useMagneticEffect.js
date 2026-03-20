import { useRef, useCallback } from 'react'

/**
 * useMagneticEffect
 * Applies a magnetic pull effect to an element on hover.
 * @param {number} strength - How strongly the element follows the cursor (0–1)
 */
export function useMagneticEffect(strength = 0.35) {
  const ref = useRef(null)

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength
      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`
      el.style.transition = 'transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)'
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)'
  }, [])

  return { ref, handleMouseMove, handleMouseLeave }
}
