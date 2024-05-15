const fs = require("fs").promises;
const path = require("path");

exports.handler = async (event, context) => {
  try {
    const dataPath = path.resolve(__dirname, "./questions.json");
    const data = await fs.readFile(dataPath, "utf-8");
    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to read data" }),
    };
  }
};
