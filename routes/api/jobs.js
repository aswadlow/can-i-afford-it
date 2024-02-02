const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');

// POST /api/jobs
router.post('/', jobsCtrl.create);
// GET /api/jobs
router.get('/', jobsCtrl.index);
// DELETE /api/jobs/id
router.delete('/:id', jobsCtrl.deleteJob)
// GET /api/jobs/id/edit
router.get('/:id/edit', jobsCtrl.edit)


module.exports = router;