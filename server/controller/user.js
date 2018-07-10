import bcrypt from 'bcrypt';
import db from '../models';
import auth from '../middleware';

/**
* Class representing controller
*
* @class userController
*/
class userController {
  /**
  * Register a user on the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the user created or error message
  * @memberof userController
  */
  static signup(req, res) {
    return db.User
      .create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      })
      .then((user) => {
        const token = auth.tokenController.createToken(user);
        return res.status(201).json({
          status: 'Success',
          message: 'User successfully signed up',
          data: {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            role: user.role,
            token
          }
        });
      })
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
  /**
   * Signin a user on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} token or error message
   * @memberof userController
   */
  static login(req, res) {
    return db.User
      .findOne({
        where: {
          email: req.body.email,
        }
      })
      .then((user) => {
        const encrypted = user.password;
        const token = auth.tokenController.createToken(user);
        if (!user) {
          return res.status(401).json({
            status: 'Error',
            message: 'Email or password incorrect'
          });
        }
        bcrypt.compare(req.body.password, encrypted)
          .then((correct) => {
            if (!correct) {
              return res.status(401).json({
                status: 'Error',
                message: 'Email or password incorrect'
              });
            }
            return res.status(200).json({
              status: 'Success',
              message: 'User successfully logged in',
              data: {
                token
              }
            });
          })
          .catch(error => res.status(500).json({
            status: 'Error',
            message: error.message
          }));
      })
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
  /**
     * Create Admin
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} Object representing the user modified
     * @memberof userController
     */
  static createAdmin(req, res) {
    return db.User
      .findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        if (req.decoded.userrole !== 'superadmin') {
          return res.status(401).json({
            status: 'Fail',
            message: 'You are not authorised to modify this user'
          });
        }
        if (user.role === 'admin') {
          return res.status(401).json({
            status: 'Fail',
            message: 'User is already an admin'
          });
        }
        if (req.decoded.userid === Number(req.params.userId)) {
          return res.status(403).json({
            status: 'Fail',
            message: 'Super Admin cannot be modified'
          });
        }
        user
          .update({
            isAdmin: true,
            role: 'admin',
          })
          .then(() => res.status(200).json({
            status: 'Success',
            message: 'User successfully upgraded to admin',
            data: {
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              role: user.role,
              isAdmin: user.isAdmin
            }
          }))
          .catch(error => res.status(500).json({
            status: 'Error',
            message: error.message
          }));
      })
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
  /**
  * Get all Users from the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with all users
  * @memberof userController
  */
  static getAllUsers(req, res) {
    const { page } = req.query;
    const limit = 10;
    const offset = (page === undefined || page < 1) ?
      0 : (parseInt(page, 10) - 1) * limit;
    return db.User
      .findAndCountAll({
        limit,
        offset,
        attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
      })
      .then((users) => {
        if (!users) {
          return res.status(404).json({
            status: 'Error',
            message: 'users not found'
          });
        }
        if (!req.decoded.isadmin) {
          return res.status(401).json({
            status: 'Error',
            message: 'You are not authorised to view this information'
          });
        }
        return res.status(200).json({
          status: 'Success',
          message: 'These are all user details',
          data: {
            users: users.rows,
            count: users.count,
            limit
          }
        });
      })
      .catch(error => res.status(500).json({
        message: error.message
      }));
  }
  /**
  * Get all Users from the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Not found message
  * @memberof userController
  */
  static notFound(req, res) {
    return res.status(404).json({
      status: 'Error',
      message: 'Not Found'
    });
  }
}
export default userController;
