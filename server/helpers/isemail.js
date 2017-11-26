/**
 * Check for valid email
 *
 * @param {string} email - The email address to be validated
 * @returns {boolean} True if valid email format and false if not
 */
const isEmail = (email) => {
  const regexp = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
  return (regexp.test(email));
};

export default isEmail;
