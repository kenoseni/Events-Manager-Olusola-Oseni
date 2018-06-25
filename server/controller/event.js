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
      date,
      centerId
    } = req.body;
    return Event
      .find({
        where: {
          date: new Date(date).toISOString(),
          centerId,
        }
      })
      .then((result) => {
        if (result) {
          return res.status(401).json({
            status: 'Error',
            message: 'Date already taken,please choose another date'
          });
        }
        Event
          .create({
            userId: req.decoded.userid,
            name: req.body.name,
            date: req.body.date,
            time: req.body.time,
            centerId: req.body.centerId,
          })
          .then(event => res.status(201).json({
            status: 'Success',
            message: 'Event was successfully created',
            data: {
              event
            }
          }))
          .catch(error => res.status(500).json({
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
    return Event
      .findById(req.params.eventId)
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
          .then(() => res.status(200).json({
            status: 'Success',
            message: 'Event has been successfully deleted'
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
  * Modify event on the platform
  *
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} Success message with the event modified or error message
  * @memberof eventController
  */
  static modifyEvent(req, res) {
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
        event.updateAttributes({
          name: req.body.name || event.name,
          date: req.body.date || event.date,
          time: req.body.time || event.time,
          centerId: req.body.centerId || event.centerId,
        });
        return res.status(200).json({
          status: 'Success',
          message: 'Event was successfully modified',
          data: {
            event
          }
        });
      })
      .catch(error => res.status(500).json({
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
    return Event
      .findOne({
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
      .catch(error => res.status(500).json({
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
    const offset = (page === undefined || page < 1) ?
      0 : (parseInt(page, 10) - 1) * limit;
    return Event
      .findAndCountAll({
        where: {
          userId: req.decoded.userid,
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
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
}
export default eventController;
