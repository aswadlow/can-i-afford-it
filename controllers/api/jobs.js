const Job = require('../../models/job');

module.exports = {
    create,
    index,
    deleteJob,
    update
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
 
 async function update(req, res){
  try{
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updatedJob)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
 }
