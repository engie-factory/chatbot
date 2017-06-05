const express = require('express');
const router = express.Router();
const calendar = require('../helpers/google/calendar');

/* GET home page. */
router.get('/events', (req, res, next) => {
  calendar.getCalendarEvents(req.query.limit || 50)
    .then((events) => {
      res.json(events);
    })
    .catch(() => {
      next(err);
    });
});

module.exports = router;
