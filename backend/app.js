const { generateStory } = require("./lib/generateStory.js");

const parameters = {
  age: 10,
  category: "dragon",
  availableTime: 10,
};

generateStory(parameters).then((story) => console.log(story));
// .catch(error => console.error(error));
