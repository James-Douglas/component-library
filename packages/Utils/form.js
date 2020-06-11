const getScreenReaderLabel = (screenReaderLabel, label) => {
  if (!screenReaderLabel || screenReaderLabel === '') {
    return `Click here for additional information${label && label.length && ` about ${label}`}`;
  }
  return screenReaderLabel;
};

/**
 * Determine whether a tooltip has been provided
 *
 * @param title {string} - (Optional)the tooltip title
 * @param body {string} - (Optional) the tooltip body
 * @returns {boolean} - true if a title or body exists
 */
const hasTooltipContent = ({ title, body }) => !!((body && body.length) || (title && title.length));

export {
  getScreenReaderLabel,
  hasTooltipContent,
};
