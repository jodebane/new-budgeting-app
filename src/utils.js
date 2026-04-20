/**
 * Formats a number as a USD currency string.
 * @param {number} n
 * @returns {string}  e.g. "$1,234.56"
 */
export const fmt = (n) =>
  '$' + Math.abs(n).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
