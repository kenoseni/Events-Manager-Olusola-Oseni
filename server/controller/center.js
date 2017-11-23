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
  * @return {object} Success message with the center created or error message
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
        message: `Center with centerId: ${center.id}
         was successfully created by ${center.userId}`,
      }))
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
  /**
  * Create new center on the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the center created or error message
  * @memberof centerController
  */
  static getCenters(req, res) {
    return db.Center
      .findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] }
      })
      .then(center => res.status(200).json({
        status: 'Success',
        message: 'List of all centers',
        center
      }))
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
  /**
  * Create get one center on the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the center created or error message
  * @memberof centerController
  */
  static getOne(req, res) {
    return db.Center
      .findOne({
        where: { id: req.params.centerId },
        include: [{
          model: db.Event,
          as: 'events',
        }]
      })
      .then((center) => {
        if (!center) {
          return res.status(400).send({ message: 'not found' });
        }
        res.status(200).json({
          status: 'Success',
          message: 'List of one center',
          center
        });
      })
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
}
export default centerController;
