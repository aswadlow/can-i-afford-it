const Hour = require('../../models/hour');


module.exports = {
    create,
}

async function create(req, res) {
     try {
    //   if (!req.body.hoursWorked) {
    //     return res.status(400).json({ error: 'hoursWorked is required' });
    // }
        // Add the hours to the db
        const hour = await Hour.create(req.body);
        res.json(hour);
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
}