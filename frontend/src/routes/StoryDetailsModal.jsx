import React, { useState } from 'react';
import '../styles/StoryDetailsModal.scss';

function BedtimeStoryModal({ story }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speech, setSpeech] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsPlaying(false);
    if (speech) {
      speech.cancel();
    }
  };

  const playStory = () => {
    setIsPlaying(true);
    const textToSpeech = new SpeechSynthesisUtterance(story);
    setSpeech(textToSpeech);
    speechSynthesis.speak(textToSpeech);
  };

  const stopStory = () => {
    setIsPlaying(false);
    if (speech) {
      speech.cancel();
    }
  };

  return (
    <div>
      <div className="modal-box" onClick={toggleModal}>
        Click to read the first story
      </div>
      <div className="modal-box" onClick={toggleModal}>
        Click to read the second story
      </div>
      <div className="modal-box" onClick={toggleModal}>
        Click to read the third story
      </div>
      <div className="modal-box" onClick={toggleModal}>
        Click to read the fourth story
      </div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            {isPlaying ? (
              <button className="play-button" onClick={stopStory}>Stop</button>
            ) : (
              <button className="play-button" onClick={playStory}>Play</button>
            )}
            <p>{story}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BedtimeStoryModal;
