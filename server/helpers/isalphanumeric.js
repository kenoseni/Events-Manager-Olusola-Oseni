/**
 * Check if input parameter is alphanumeric
 *
 * @param {string} name - The username field
 * @returns {boolean} True if alphanumeric or false if not
 */
const isAlphaNumeric = (name) => {
  const regexp = /^[A-Za-z0-9]+$/;
  return (regexp.test(name));
};

export default isAlphaNumeric;
