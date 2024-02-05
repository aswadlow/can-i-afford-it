const MonthlyExp = require('../../models/monthlyExp');

module.exports = {
    create,
    index,
    deleteExp,
    update
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
        try{
            const monthlys = await MonthlyExp.find({})
            res.json(monthlys);
        }catch(err){
            console.log(err)
            res.status(400).json(err);
        }
   }

   async function deleteExp(req, res){
    try{
        const monthlyExpId = req.params.id;
        const deletedMonthlyExp = await MonthlyExp.findByIdAndDelete(monthlyExpId);
        res.json({message: 'Monthly Exp deleted', deletedMonthlyExp });
    } catch(err){
        console.log(err)
        res.status(400).json(err);
    }
   }

   async function update(req, res){
    try{
      const updatedExp = await MonthlyExp.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.json(updatedExp)
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
   }