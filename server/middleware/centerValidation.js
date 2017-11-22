import helpers from '../helpers';

const {
  isEmpty,
} = helpers;

/**
 * Class representing user validations
 *
 * @class CenterValidation
 */
class CenterValidation {
  /**
   * Check for required center input fields
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {object} next - The next route handler function
   * @returns {any} Object representing error message or
   * calls the next function
   * @memberof CenterValidation
   */
  static centerInputs(req, res, next) {
    // Check if name is empty
    if (!req.body.name || isEmpty(req.body.name)) {
      return res.status(400).send({
        message: 'Center name required'
      });
    }
    // Check if description is empty
    if (!req.body.description || isEmpty(req.body.description)) {
      return res.status(400).send({
        message: 'Description field required'
      });
    }
    // Check if location is empty
    if (!req.body.location || isEmpty(req.body.location)) {
      return res.status(400).send({
        message: 'Location required'
      });
    }
    // Check if address is empty
    if (!req.body.address || isEmpty(req.body.address)) {
      return res.status(400).send({
        message: 'Center address required'
      });
    }
    // Check if capacity is empty
    if (!req.body.capacity || isEmpty(req.body.capacity)) {
      return res.status(400).send({
        message: 'Capacity required'
      });
    }
    return next();
  }
}

export default CenterValidation;
