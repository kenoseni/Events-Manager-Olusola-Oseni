import helpers from '../helpers';

const {
  isEmpty,
  isAlphaNumeric,
  isNumeric,
  isDateFormat
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
      return res.status(400).json({
        status: 'Error',
        message: 'Event name required'
      });
    }
    // Check if date is empty
    if (!req.body.startDate || isEmpty(req.body.startDate)) {
      return res.status(400).json({
        status: 'Error',
        message: 'Date field required'
      });
    }
    // Check if time is empty
    if (!req.body.time || isEmpty(req.body.time)) {
      return res.status(400).json({
        status: 'Error',
        message: 'Time required'
      });
    }
    // Check if centerId is empty
    if (!req.body.centerId || isEmpty(req.body.centerId)) {
      return res.status(400).json({
        status: 'Error',
        message: 'CenterId required'
      });
    }
    // check if centerId is a number
    if (!isNumeric(req.body.centerId)) {
      return res.status(400).json({
        status: 'Error',
        message: 'CenterId must be an integer'
      });
    }
    // check if event name is alphanumeric
    if (!isAlphaNumeric(req.body.name)) {
      return res.status(400).json({
        status: 'Error',
        message: 'Event name is invalid'
      });
    }
    // check if event name is alphanumeric
    if (!isAlphaNumeric(req.body.time)) {
      return res.status(400).json({
        status: 'Error',
        message: 'Event time is invalid'
      });
    }
    // check if event date is alphanumeric
    if (!isDateFormat(req.body.startDate)) {
      return res.status(400).json({
        status: 'Error',
        message: 'Date format is invalid, use YYYY-MM-DD'
      });
    }
    if (!isDateFormat(req.body.endDate)) {
      return res.status(400).json({
        status: 'Error',
        message: 'Date format is invalid, use YYYY-MM-DD'
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
