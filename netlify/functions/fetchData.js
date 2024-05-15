const data = require("../data/questions.json"); // Adjust the path if needed

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
