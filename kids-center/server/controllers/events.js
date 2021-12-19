const Events = require("../models/event");

module.exports = {
  create_One: async (req, res, next) => {
    const { eventBy, location, city, contact, date, event_img, likes } =
      req.body;
    try {
      const event = await Events.create({
        eventBy,
        location,
        city,
        contact,
        date,
        event_img,
        likes,
      });

      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  },
  find_All: async (req, res, next) => {
    try {
      const events = await Events.find({});

      res.status(200).json(events);
    } catch (error) {
      next(error);
    }
  },
  find_One: async (req, res, next) => {
    try {
      const eventsFound = await Events.find(req.params.state);

      res.status(200).json(eventsFound);
    } catch (error) {
      next(error);
    }
  },
  update_One: async (req, res, next) => {
    console.log("request",req.body)
    try {
      const event = await Events.findByIdAndUpdate(
        {_id:req.body._id},
        {"$push":{comments:req.body.comment}},
        { new: true }
      );

      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  },
  remove_One: async (req, res, next) => {
    try {
      const removedEvent = await Events.findByIdAndRemove(req.params.EventId);

      res.status(200).json(removedEvent);
    } catch (error) {
      next(error);
    }
  },
};
