require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log("Now we need some time to generate the story!");

const generateStory = async function ({ name, age, category, availableTime }) {
  const message = {
    role: "system",
    content: `You are a talented storyteller capable of crafting engaging and appropriate fairy tales based on given parameters.  
    The parameters include:
    - Age: The age of the reader for whom the story is being crafted. This will help you determine the complexity and themes of the story.
    - Category: The theme or type of the fairy tale (e.g., adventure, fantasy, animals, etc.)
    - Available Time: The time the reader has available to read the story. This will help you determine the length of the story.

    Your task is to generate a fairy tale that fits these parameters and is engaging and fun to read.`,
  };

  const userMessage = {
    role: "user",
    content: `Generate a personal fairy tale for a reader who has a name: ${name} who is ${age} years old, likes ${category} stories, and has ${availableTime} minutes to read.`,
  };

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [message, userMessage],
    });

    console.log(
      "the content of the story:",
      response.data.choices[0].message.content
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.log("error:", error.response.data.error);
    // console.error("An error occurred: ", error);
    return error;
  }
};

module.exports = { generateStory };
