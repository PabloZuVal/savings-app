const axios = require('axios');

const MICROSERVICE_URL = process.env.MICROSERVICE_URL;

exports.createDeposit = async (depositData) => {
  try {
    const response = await axios.post(`${MICROSERVICE_URL}/deposits`, depositData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating deposit in microservice');
  }
};

exports.getDepositsByGoal = async (goalId) => {
  try {
    const response = await axios.get(`${MICROSERVICE_URL}/deposits/${goalId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching deposits from microservice');
  }
};
