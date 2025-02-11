const express = require('express');
const router = express.Router();
const depositsController = require('../controllers/deposits.controller');

router.post('/', depositsController.createDeposit);
router.get('/:goalId', depositsController.getDepositsByGoal);

module.exports = router;
