import React, { useState } from "react";
import TopNavBar from "./components/TopNavBar";
import TextBox from "./components/TextBox";
import BedtimeStoryModal from "./routes/StoryDetailsModal";
import "./App.scss";
import BackGround from "./images/BackGround.png";

// import { generateStory } from "../../backend/lib/generateStory";

const App = () => {
  const [story, setStory] = useState("Click Generate to create a story");
  const modifyStory = (newStory) => {
    setStory(newStory);
    console.log("updated story : " + story);
  };

  return (
    <div className="app">
      <TopNavBar />
      <div className="page-content">
        <h3>
          Introducing FairlyTale, the enchanting web app that weaves magical
          bedtime stories with just a click. Designed to spark imagination and
          bring joy to young minds, FairlyTale generates unique tales filled
          with adventure, whimsy, and valuable life lessons. Say goodnight to
          dull bedtime routines and embrace the enchantment of storytelling like
          never before..
        </h3>

        <TextBox onStoryGenerated={modifyStory} />
        <BedtimeStoryModal genStory={story} />
        {/* Pass the generated bedtime story */}
        <img src={BackGround} alt="BackGround" />
      </div>
    </div>
  );
};

export default App;
