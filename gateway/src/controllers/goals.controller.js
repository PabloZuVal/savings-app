const goalsService = require('../services/goals.service');

exports.createGoal = async (req, res, next) => {
  try {
    const goal = await goalsService.createGoal(req.body);
    res.status(201).json(goal);
  } catch (error) {
    next(error);
  }
};

exports.getAllGoals = async (req, res, next) => {
  try {
    const goals = await goalsService.getAllGoals();
    res.json(goals);
  } catch (error) {
    next(error);
  }
};
