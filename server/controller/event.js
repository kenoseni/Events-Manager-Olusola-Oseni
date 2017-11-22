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
  static addevent(req, res) {
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
            centerId: req.body.centerId
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
      .catch(error => res.status(200).send({ error: error.message }));
  }
}
export default eventController;
