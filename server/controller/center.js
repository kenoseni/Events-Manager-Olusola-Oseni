import Sequelize from 'sequelize';
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
        price: req.body.price,
        facilities: req.body.facilities,
        capacity: req.body.capacity,
        image: req.body.image
      })
      .then(center => res.status(201).json({
        status: 'Success',
        message: 'Center created successfully',
        data: {
          center
        }
      }))
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
  /**
  * Get the first set of centers based on their Id
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the center created or error message
  * @memberof centerController
  */
  static getCenters(req, res) {
    const { page } = req.query;
    const limit = 6;
    const offset = (page === undefined || page < 1) ?
      0 : (parseInt(page, 10) - 1) * limit;
    return db.Center
      .findAndCountAll({
        limit,
        order: [['id', 'DESC']],
        offset,
        attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] }
      })
      .then(centers => res.status(200).json({
        status: 'Success',
        message: 'These are the centers',
        data: {
          centers: centers.rows,
          count: centers.count,
          limit
        }
      }))
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }

  /**
  * Get all centers based on the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the center created or error message
  * @memberof centerController
  */
  static getAllCenters(req, res) {
    return db.Center
      .findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      })
      .then(((allCenters) => {
        if (!allCenters) {
          return res.status(400).json({
            status: 'Error',
            message: 'No centers found'
          });
        }
        return res.status(200).json({
          status: 'Success',
          message: 'List of all centers',
          data: {
            allCenters
          }
        });
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
            status: 'Error',
            message: 'No center found'
          });
        }
        res.status(200).json({
          status: 'Success',
          message: 'List of one center',
          data: {
            center
          }
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
            status: 'Error',
            message: 'No center found'
          });
        }
        if (req.decoded.userid !== center.userId) {
          return res.status(401).json({
            status: 'Error',
            message: 'User cannot modify this center'
          });
        }
        center
          .update({
            name: req.body.name || center.name,
            description: req.body.description || center.decription,
            location: req.body.location || center.location,
            price: req.body.price || center.price,
            facilities: req.body.facilities || center.facilities,
            capacity: req.body.capacity || center.capacity,
            avaliability: req.body.avaliability || center.avaliability,
            image: req.body.image || center.image
          })
          .then((value) => {
            if (!value) {
              return res.status(400).json({
                status: 'Error',
                message: 'Center not updated'
              });
            }
            res.status(200).json({
              status: 'Success',
              message: 'Center updated',
              data: {
                center
              }
            });
          })
          .catch(error => res.status(500).json({
            status: 'Error',
            message: error.message
          }));
      })
      .catch(error => res.status(500).json({ error: error.message }));
  }
  /**
  * Delete center from the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the event deleted or error message
  * @memberof centerController
  */
  static deleteCenter(req, res) {
    return db.Center
      .findById(req.params.centerId)
      .then((center) => {
        if (!center) {
          return res.status(404).json({
            status: 'Error',
            message: 'Center not found'
          });
        }
        if (req.decoded.userid !== center.userId) {
          return res.status(401).json({
            status: 'Error',
            message: 'User cannot delete this center'
          });
        }
        center
          .destroy()
          .then(() => res.status(200).json({
            status: 'Success',
            message: 'Center has been successfully deleted'
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
  * Create new center on the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the center created or error message
  * @memberof centerController
  */
  static searchForCenters(req, res) {
    const { Op } = Sequelize;
    const limit = 6;
    return db.Center
      .findAndCountAll({
        where: {
          [Op.or]: [{ name: req.body.name }, { location: req.body.location }]
        },
        limit,
        order: [['id', 'DESC']],
        attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] }
      })
      .then((center) => {
        if (center) {
          return res.status(200).json({
            status: 'Success',
            message: 'These are the results of your search',
            data: {
              count: center.count,
              searchedCenters: center.rows,
              limit
            }
          });
        }
      })
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
}
export default centerController;
