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
        message: 'Center created successfully',
        center
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
          return res.status(400).json({
            status: 'Fail',
            message: 'No center found'
          });
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
  /**
  * Create get one center on the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the center created or error message
  * @memberof centerController
  */
  static modifyCenter(req, res) {
    return db.Center
      .findById(req.params.centerId)
      .then((center) => {
        if (!center) {
          return res.status(404).json({
            status: 'Fail',
            message: 'No center found'
          });
        }
        if (req.decoded.userid !== center.userId) {
          return res.status(401).json({
            status: 'Fail',
            message: 'User cannot modify this center'
          });
        }
        center
          .update({
            name: req.body.name || center.name,
            description: req.body.description || center.decription,
            location: req.body.location || center.location,
            address: req.body.address || center.address,
            capacity: req.body.capacity || center.capacity,
            avaliability: req.body.avaliability || center.avaliability
          })
          .then((value) => {
            if (!value) {
              return res.statusCode(400).json({
                status: 'Fail',
                message: 'Center not updated'
              });
            }
            res.status(200).json({
              status: 'Success',
              message: 'Center updated',
              center
            });
          })
          .catch(error => res.status(500).json({ error: error.message }));
      })
      .catch(error => res.status(500).json({ error: error.message }));
  }
}
export default centerController;
