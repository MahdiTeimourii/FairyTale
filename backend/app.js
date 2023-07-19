const { generateStory } = require("./lib/generateStory.js");

const parameters = {
  name: "Bob",
  age: 10,
  category: "dragon",
  availableTime: 15,
};

generateStory(parameters).then((story) => console.log(story));
// .catch(error => console.error(error));
