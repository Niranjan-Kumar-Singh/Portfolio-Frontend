// src/utils/scrollManager.jsx

// Internal scroll target variable
let scrollTarget = 0;

/**
 * Set the scroll target value
 * @param {number} value - The new scroll target value
 */
export const setScrollTarget = (value) => {
  scrollTarget = value;
};

/**
 * Get the current scroll target value
 * @returns {number} The current scroll target
 */
export const getScrollTarget = () => scrollTarget;
