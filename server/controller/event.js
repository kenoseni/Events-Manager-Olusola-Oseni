import Sequelize from 'sequelize';
import db from '../models';

const { Event } = db;

/**
 * Class representing controller
 *
 * @class eventController
 */
class eventController {
  /**
   * Create new event on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message with the event created or error message
   * @memberof eventController
   */
  static addEvent(req, res) {
    const {
      name, startDate, endDate, time, centerId
    } = req.body;

    if (startDate < new Date().toISOString()) {
      return res.status(422).json({
        status: 'Fail',
        message: 'Invalid date entered, enter a date from the current date'
      });
    }
    const { Op } = Sequelize;
    return Event.find({
      where: {
        centerId,
        [Op.or]: [
          {
            startDate: {
              [Op.between]: [startDate, endDate]
            },
            endDate: {
              [Op.between]: [startDate, endDate]
            }
          },
          {
            startDate: {
              [Op.lte]: startDate
            },
            endDate: {
              [Op.gte]: endDate
            }
          }
        ]
      }
    })
      .then((result) => {
        if (result) {
          return res.status(401).json({
            status: 'Error',
            message: 'Date already taken,please choose another date'
          });
        }
        return Event.create({
          userId: req.decoded.userid,
          name,
          startDate,
          endDate,
          time,
          centerId
        })
          .then(event =>
            res.status(201).json({
              status: 'Success',
              message: 'Event was successfully created',
              data: {
                event
              }
            }))
          .catch(error =>
            res.status(500).json({
              status: 'Error',
              message: error.message
            }));
      })
      .catch(error => res.status(500).json({ message: error.message }));
  }
  /**
   * Delete event from the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message with the event deleted or error message
   * @memberof eventController
   */
  static deleteEvent(req, res) {
    return Event.findById(req.params.eventId)
      .then((event) => {
        if (!event) {
          return res.status(404).json({
            status: 'Error',
            message: 'Event not Found'
          });
        }
        if (req.decoded.userid !== event.userId) {
          return res.status(401).json({
            status: 'Error',
            message: 'User cannot delete this event'
          });
        }
        event
          .destroy()
          .then(() =>
            res.status(200).json({
              status: 'Success',
              message: 'Event has been successfully deleted'
            }))
          .catch(error =>
            res.status(500).json({
              status: 'Error',
              message: error.message
            }));
      })
      .catch(error =>
        res.status(500).json({
          status: 'Error',
          message: error.message
        }));
  }
  /**
   * Modify event on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message with the event modified or error message
   * @memberof eventController
   */
  static modifyEvent(req, res) {
    const { startDate, endDate } = req.body;
    Event.findById(req.params.eventId)
      .then((event) => {
        if (!event) {
          return res.status(404).json({ message: 'not found' });
        }
        if (req.decoded.userid !== event.userId) {
          return res.status(401).json({
            status: 'Fail',
            message: 'User cannot modify this event'
          });
        }
        if (startDate < new Date().toISOString()) {
          return res.status(422).json({
            status: 'Fail',
            message: 'Invalid date entered, enter a date from the current date'
          });
        }
        if (endDate < startDate) {
          return res.status(422).json({
            status: 'Fail',
            message:
              'Invalid date entered, end date cannot come before start date'
          });
        }
        if (startDate && endDate) {
          const { Op } = Sequelize;
          Event.find({
            where: {
              centerId: event.centerId,
              [Op.or]: [
                {
                  startDate: {
                    [Op.between]: [req.body.startDate, req.body.endDate]
                  },
                  endDate: {
                    [Op.between]: [req.body.startDate, req.body.endDate]
                  }
                },
                {
                  startDate: {
                    [Op.lte]: req.body.startDate
                  },
                  endDate: {
                    [Op.gte]: req.body.endDate
                  }
                }
              ]
            }
          });
          return event
            .updateAttributes({
              name: req.body.name || event.name,
              startDate: req.body.startDate || event.startDate,
              endDate: req.body.endDate || event.endDate,
              time: req.body.time || event.time,
              centerId: req.body.centerId || event.centerId
            })
            .then(() =>
              res.status(200).json({
                status: 'Success',
                message: 'Event was successfully modified',
                data: {
                  event
                }
              }))
            .catch(error =>
              res.status(500).json({
                status: 'Error',
                message: error.message
              }));
        }
      })
      .catch(error =>
        res.status(500).json({
          status: 'Error',
          message: error.message
        }));
  }

  /**
   * Get one event on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message with the event  or error message
   * @memberof eventController
   */
  static getOneEvent(req, res) {
    return Event.findOne({
      where: {
        id: req.params.eventId,
        userId: req.decoded.userid
      }
    })
      .then((event) => {
        if (!event) {
          return res.status(404).json({
            status: 'Error',
            message: 'No such event available'
          });
        }
        return res.status(200).json({
          status: 'Success',
          message: 'Event available',
          data: {
            event
          }
        });
      })
      .catch(error =>
        res.status(500).json({
          status: 'Error',
          message: error.message
        }));
  }
  /**
   * Get all User Events from the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message with the event deleted or error message
   * @memberof eventController
   */
  static userEvents(req, res) {
    const { page } = req.query;
    const limit = 6;
    const offset =
      page === undefined || page < 1 ? 0 : (parseInt(page, 10) - 1) * limit;
    return Event.findAndCountAll({
      where: {
        userId: req.decoded.userid
      },
      limit,
      order: ['id'],
      offset,
      attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] }
    })
      .then((events) => {
        if (!events) {
          return res.status(404).json({
            status: 'Error',
            message: 'Events not found'
          });
        }
        res.status(200).json({
          status: 'Success',
          message: 'These are your events',
          data: {
            events: events.rows,
            count: events.count,
            limit
          }
        });
      })
      .catch(error =>
        res.status(500).json({
          status: 'Error',
          message: error.message
        }));
  }
}
export default eventController;
