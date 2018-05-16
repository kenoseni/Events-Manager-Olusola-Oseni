/**
 * Check if input parameter is numeric
 *
 * @param {number} value - The value field
 * @returns {boolean} True if numeric or false if not
 */
const isNumeric = (value) => {
  const regexp = /^\d+$/;
  return (regexp.test(value));
};

export default isNumeric;

