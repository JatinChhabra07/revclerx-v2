import type { Variants } from 'framer-motion'

// Easing constants. Use these instead of inline arrays.
// Skill: animated-frontend-design, motion-system.md
export const ease = [0.22, 1, 0.36, 1] as const
export const easeSnap = [0.16, 1, 0.3, 1] as const
export const easeDropdown = [0.25, 0.46, 0.45, 0.94] as const

// Primary reveal: tight fade-up. 95% of section-level reveals.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

// Stronger slide reveal for big section content blocks.
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
}

export const blurReveal: Variants = {
  hidden: { opacity: 0, y: -12, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease },
  },
}

export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.8, ease },
  },
}

// Stagger container: place around a group of revealable children.
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const tightStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
}

// Dropdown / popover.
export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: easeDropdown,
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: 4,
    scale: 0.98,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

// Spring tuned for physical-feeling hover/tap on buttons and icons.
export const buttonSpring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 25,
}

// Spring for magnetic effects.
export const magneticSpring = {
  type: 'spring' as const,
  stiffness: 150,
  damping: 15,
  mass: 0.1,
}

// Spring for floaty UI like the floating cards in the hero.
export const floatySpring = {
  type: 'spring' as const,
  stiffness: 220,
  damping: 30,
  mass: 1,
}
