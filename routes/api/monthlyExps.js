const express = require('express');
const router = express.Router();
const monthlyExpsCtrl = require('../../controllers/api/monthlyExps');

// POST /api/monthlys
router.post('/', monthlyExpsCtrl.create);
// GET /api/monthlys
router.get('/', monthlyExpsCtrl.index);
// DELETE api/monthlys/:id
router.delete('/:id', monthlyExpsCtrl.deleteExp);
// PUT /api/jobs/id/update
router.put('/:id/update', monthlyExpsCtrl.update)


module.exports = router;