require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chatCompletion = openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello world" }],
  })
  .then((chatCompletion) => console.log(chatCompletion.data.choices[0].message))
  .catch((error) => console.log(error.response.data));
// console.log(chatCompletion.data.choices[0].message);
