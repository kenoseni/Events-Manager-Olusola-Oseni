/**
 * Check if input parameter is date
 *
 * @param {string} date - The date field
 * @returns {boolean} True if alphanumeric or false if not
 */
const isDateFormat = (date) => {
  const regexp = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
  return (regexp.test(date));
};
export default isDateFormat;
