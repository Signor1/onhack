export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 1 },
  },
};

export const textAnimateDown = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      delay: 1,
    },
  },
};

export const textAnimateUp = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      delay: 2.5,
    },
  },
};

export const textAnimateLeft = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      delay: 1.5,
    },
  },
};

export const textAnimateRight = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      delay: 2,
    },
  },
};

export const blueshapeAnime = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: [20, -20],
    transition: {
      delay: 3,
      repeat: Infinity,
      repeatType: "mirror",
      duration: 5,
    },
  },
};
