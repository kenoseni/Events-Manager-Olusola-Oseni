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
        password: req.body.password,
      })
      .then(user => res.status(201).json({
        status: 'success',
        message: `User with userId: ${user.id} was successfully signed up`,

      }))
      .catch((error) => {
        for (let i = 0; i < error.errors.length; i += 1) {
          const errorHandler = error.errors[i].message;
          switch (errorHandler) {
            case 'Firstname field cannot be empty':
              return res.status(406).json({ message: errorHandler });
            case 'Lastname field cannot be empty':
              return res.status(406).json({ message: errorHandler });
            case 'Allows only alphanumeric characters':
              return res.status(406)
                .json({ message: 'Invalid character in name field' });
            case 'Email field cannot be empty':
              return res.status(406).json({ message: errorHandler });
            case 'Please supply the right email format':
              return res.status(406).json({ message: errorHandler });
            case 'Password field cannot be empty':
              return res.status(406).json({ message: errorHandler });
            case 'Password must contain a minimum of 8 characters':
              return res.status(406).json({ message: errorHandler });
            case 'email must be unique':
              return res.status(406).json({ message: 'Email already exist' });
            default:
              return res.send('Invalid entry');
          }
        }
      });
  }
  /**
   * Signin a user on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message with the user created or error message
   * @memberof userController
   */
  static signin(req, res) {
    return db.User
      .findOne({
        where: {
          email: req.body.email,
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            status: 'fail',
            message: 'user not found'
          });
        }
        const encrypted = user.password;
        bcrypt.compare(req.body.password, encrypted)
          .then((correct) => {
            if (!correct) {
              res.status(401).send({
                status: 'fail',
                message: 'Incorrect password'
              });
            }
            const token = auth.tokenController.createToken(user);
            return res.status(200).json({ token });
          });
      })
      .catch(error => res.status(500).send(error));
  }
}
export default userController;
