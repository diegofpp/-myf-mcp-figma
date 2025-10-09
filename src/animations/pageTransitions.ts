export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

export const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh"
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 1
  }
}

// Animaciones para MenuNav
export const menuNavOverlay = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

export const menuNavContent = {
  initial: {
    scale: 0.8,
    opacity: 0,
    y: 20
  },
  enter: {
    scale: 1,
    opacity: 1,
    y: 0
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    y: 20
  }
}

export const menuNavItems = {
  initial: {
    opacity: 0,
    y: 30
  },
  enter: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 30
  }
}

export const menuNavItem = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 20
  }
}
