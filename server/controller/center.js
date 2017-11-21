import db from '../models';

/**
* Class representing controller
*
* @class centerController
*/
class centerController {
  /**
  * Create new center on the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the user created or error message
  * @memberof centerController
  */
  static addCenter(req, res) {
    return db.Center
      .create({
        userId: req.decoded.userid,
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        address: req.body.address,
        capacity: req.body.capacity
      })
      .then(center => res.status(201).json({
        status: 'Success',
        message: `Center with centerId: ${center.id} was successfully created by ${center.userId}`,

      }))
      .catch((error) => {
        for (let i = 0; i < error.errors.length; i += 1) {
          const errorHandler = error.errors[i].message;
          switch (errorHandler) {
            case 'Center name cannot be empty':
              return res.status(406).json({ message: errorHandler });
            case 'Allows only alphanumeric characters':
              return res.status(406)
                .json({ message: 'Invalid character in center name field' });
            case 'Please provide a description for this center':
              return res.status(406).json({ message: errorHandler });
            case 'Please provide the location for this center':
              return res.status(406).json({ message: errorHandler });
            case 'Please provide the address for this center':
              return res.status(406).json({ message: errorHandler });
            case 'Please provide the capacity for this center':
              return res.status(406).json({ message: errorHandler });
            default:
              return res.send('Invalid entry');
          }
        }
      });
  }
}
export default centerController;
