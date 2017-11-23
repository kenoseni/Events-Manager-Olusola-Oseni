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
          return res.status(400).json({
            status: 'Fail',
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
            message: `Event with eventId: ${event.id} was successfully created by userId: ${event.userId}`,
          }))
          .catch(error => res.status(500).json({
            status: 'Error',
            message: error.message
          }));
      })
      .catch(error => res.status(500).send({ message: error.message }));
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
      .find({
        where: {
          id: req.params.eventId,
          userId: req.decoded.userid,
        }
      })
      .then((event) => {
        if (!event) {
          return res.status(400).json({ message: 'Event not found' });
        }
        event.destroy();
      })
      .then(() => res.status(200).json({
        status: 'Success',
        message: 'Event has been successfully deleted'
      }))
      .catch(error => res.status(500).json({
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
          return res.status(400).send({ message: 'not found' });
        }
        if (event.date === req.body.date && event.centerId === req.body.centerId) {
          return res.status(400).json({ message: 'Another event is already slated for this center,Please choose another date' });
        }
        event.updateAttributes({
          name: req.body.name || event.name,
          date: req.body.date || event.date,
          time: req.body.time || event.time,
          centerId: req.body.centerId || event.centerId,
        });
        return res.status(200).json({ message: 'Event successfully modified', event });
      })
      .catch(error => res.status(500).json({
        message: error.message
      }));
  }
}
export default eventController;
