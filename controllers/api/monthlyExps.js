const MonthlyExp = require('../../models/monthlyExp');

module.exports = {
    create,
    index,
    deleteExp
  };

  async function create(req, res) {
    console.log(req.body)
      try {
          // Add themonthlyExpa to the db
          const monthlyExp = await MonthlyExp.create(req.body);
          res.json(monthlyExp);
        } catch (err) {
          console.log(err)
          res.status(400).json(err);
        }
  }

    async function index(req, res){
        const monthlys = await MonthlyExp.find({})
        res.json(monthlys);
   }

   async function deleteExp(req, res){
    const monthlyExpId = req.param.id;
    const deletedMonthlyExp = await MonthlyExp.findByIdAndDelete(monthlyExpId);
    res.json({message: 'Job deleted', deletedMonthlyExp });
   }