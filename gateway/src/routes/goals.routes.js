const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goals.controller');

router.post('/', goalsController.createGoal);
router.get('/', goalsController.getAllGoals);

module.exports = router;
