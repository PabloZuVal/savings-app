const depositsService = require('../services/deposits.service');

exports.createDeposit = async (req, res, next) => {
  try {
    const deposit = await depositsService.createDeposit(req.body);
    res.status(201).json(deposit);
  } catch (error) {
    next(error);
  }
};

exports.getDepositsByGoal = async (req, res, next) => {
  try {
    const { goalId } = req.params;
    const deposits = await depositsService.getDepositsByGoal(goalId);
    res.json(deposits);
  } catch (error) {
    next(error);
  }
};
