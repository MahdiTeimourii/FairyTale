const { generateStory } = require("./lib/generateStory.js");

const parameters = {
  age: 7,
  category: "adventure",
  availableTime: 15,
};

generateStory(parameters).then((story) => console.log(story));
// .catch(error => console.error(error));
