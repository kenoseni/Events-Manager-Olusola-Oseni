/**
 * Check if input parameter is alphanumeric
 *
 * @param {string} name - The name field
 * @returns {boolean} True if alphanumeric or false if not
 */
const isAlphaNumeric = (name) => {
  const regexp = /^[\w\s]+$/;
  // const regexp = /^[A-Za-z0-9-\s]+$/;
  return (regexp.test(name));
};

export default isAlphaNumeric;
