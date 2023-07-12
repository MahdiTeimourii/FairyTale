import React from 'react';
import TopNavBar from './components/TopNavBar';
import TextBox from './components/TextBox';
import BedtimeStoryModal from './routes/StoryDetailsModal'; // Import the BedtimeStoryModal component
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <TopNavBar />
      <div className="page-content">
        <h3>
          Introducing FairlyTale, the enchanting web app that weaves magical bedtime stories with just a click.
          Designed to spark imagination and bring joy to young minds, FairlyTale generates unique tales filled with
          adventure, whimsy, and valuable life lessons. Say goodnight to dull bedtime routines and embrace the
          enchantment of storytelling like never before..
        </h3>
        <p>This is the content of your page.</p>
        <TextBox />
        <BedtimeStoryModal story="Generated bedtime story goes here" /> {/* Pass the generated bedtime story */}
      </div>
    </div>
  );
};

export default App;
