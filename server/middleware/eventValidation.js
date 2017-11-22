import helpers from '../helpers';


const {
  isEmpty,
} = helpers;

/**
 * Class representing user validations
 *
 * @class CenterValidation
 */
class EventValidation {
  /**
   * Check for required event input fields
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {object} next - The next route handler function
   * @returns {any} Object representing error message or
   * calls the next function
   * @memberof EventValidation
   */
  static eventInputs(req, res, next) {
    // Check if name is empty
    if (!req.body.name || isEmpty(req.body.name)) {
      return res.status(400).send({
        message: 'Event name required'
      });
    }
    // Check if date is empty
    if (!req.body.date || isEmpty(req.body.date)) {
      return res.status(400).send({
        message: 'Date field required'
      });
    }
    // Check if time is empty
    if (!req.body.time || isEmpty(req.body.time)) {
      return res.status(400).send({
        message: 'Time required'
      });
    }
    return next();
  }
  /**
   * Check for required event input fields
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {object} next - The next route handler function
   * @returns {any} Object representing error message or
   * calls the next function
   * @memberof EventValidation
   */
}

export default EventValidation;
