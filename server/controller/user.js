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
          data: {
            status: 'Success',
            message: 'User successfully signed up',
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
        if (!user) {
          return res.status(400).json({
            data: {
              status: 'Fail',
              message: 'Email not found'
            }
          });
        }
        const encrypted = user.password;
        bcrypt.compare(req.body.password, encrypted)
          .then((correct) => {
            if (!correct) {
              res.status(401).json({
                data: {
                  status: 'Fail',
                  message: 'Email or password incorrect'
                }
              });
            }
            const token = auth.tokenController.createToken(user);
            return res.status(200).json({
              data: {
                status: 'Success',
                message: 'User successfully logged in',
                token
              }
            });
          });
      })
      .catch(error => res.status(500).json({
        data: {
          status: 'Error',
          message: error.message
        }
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
            data: {
              status: 'Fail',
              message: 'You are not authorised to modify this user'
            }
          });
        }
        if (req.decoded.userid === Number(req.params.userId)) {
          return res.status(403).json({
            data: {
              status: 'Fail',
              message: 'Super Admin cannot be modified'
            }
          });
        }
        user
          .update({
            isAdmin: true,
            role: 'admin'
          })
          .then(() => res.status(200).json({
            data: {
              status: 'Success',
              message: 'User successfully upgraded to admin'
            }
          }))
          .catch(error => res.status(500).json({
            data: {
              status: 'Error',
              message: error.message
            }
          }));
      })
      .catch(error => res.status(500).json({
        data: {
          status: 'Error',
          message: error.message
        }
      }));
  }
}
export default userController;
