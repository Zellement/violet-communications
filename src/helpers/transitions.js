export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] }
	}
}

export const xRoll = {
	initial: { opacity: 0, rotate: 15, scale: 1.5 },
  enter: { 
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    rotate: 5,
    scale: 1.5,
		transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
	}
}