import jwt from 'jsonwebtoken';

/**
 * Class representing controller
 *
 * @class tokenController
 */
class tokenController {
  /**
   * create a token
   *
   * @static
   * @param {object} user - The user object
   * @return {object} Create a token
   * @memberof tokenController
   */
  static createToken(user) {
    const token = jwt.sign({
      userid: user.id,
      isadmin: user.isAdmin,
      userrole: user.role
    }, process.env.SECRET, {
      expiresIn: 48 * 60 * 60
    });
    return token;
  }

  /**
   * confirm the token
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {object} next - The next object
   * @return {object} Create a token
   * @memberof tokenController
   */
  static confirmToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).json({
        status: 'Error',
        message: 'Access denied, no token provided'
      });
    } else if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            status: 'Error',
            message: 'Failed to authenticate'
          });
        }
        req.decoded = decoded;
        return next();
      });
    }
  }
}
export default tokenController;
