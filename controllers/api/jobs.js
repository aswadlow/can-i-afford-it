const Job = require('../../models/job');

module.exports = {
    create,
    index,
    deleteJob,
    edit
  };

async function create(req, res) {
    try {
        // Add the job to the db
        const job = await Job.create(req.body);
        res.json(job);
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
}

async function index(req, res){
  try{
    const jobs = await Job.find({})
    res.json(jobs);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function deleteJob(req, res){
  try{
    const jobId = req.params.id;
    const deletedJob = await Job.findByIdAndDelete(jobId);
    res.json({message: 'Job deleted', deletedJob });
} catch (err) {
  console.log(err)
  res.status(400).json(err);
}
 }
 
 async function edit(req, res){
  try{
    console.log(req.body)
    res.json('ok')
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
 }
