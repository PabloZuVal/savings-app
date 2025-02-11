const axios = require('axios');

const MICROSERVICE_URL = process.env.MICROSERVICE_URL;

exports.createGoal = async (goalData) => {
  try {
    const response = await axios.post(`${MICROSERVICE_URL}/goals`, goalData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating goal in microservice');
  }
};

exports.getAllGoals = async () => {
  try {
    const response = await axios.get(`${MICROSERVICE_URL}/goals`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching goals from microservice');
  }
};
