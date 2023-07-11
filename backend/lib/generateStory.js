require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateStory = async function ({ age, category, availableTime }) {
  const message = {
    role: "system",
    content: `You are a talented storyteller capable of crafting engaging and appropriate fairy tales based on given parameters. 
    The parameters include:
    - Age: The age of the reader for whom the story is being crafted. This will help you determine the complexity and themes of the story.
    - Category: The theme or type of the fairy tale (e.g., adventure, fantasy, animals, etc.)
    - Available Time: The time the reader has available to read the story. This will help you determine the length of the story.

    Your task is to generate a story that fits these parameters and is engaging and fun to read. Remember, the reader's enjoyment is paramount.`,
  };

  const userMessage = {
    role: "user",
    content: `Generate a fairy tale for a reader who is ${age} years old, likes ${category} stories, and has ${availableTime} minutes to read.`,
  };

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [message, userMessage],
  });

  console.log("content", response.data.choices[0].message.content);
  return JSON.parse(response.data.choices[0].message.content);
};

module.exports = { generateStory };
