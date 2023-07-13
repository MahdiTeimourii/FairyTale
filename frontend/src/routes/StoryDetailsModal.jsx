import React, { useState, useEffect } from 'react';
import '../styles/StoryDetailsModal.scss';

function BedtimeStoryModal({ story }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsPlaying(false);
    if (textToSpeech && typeof textToSpeech.cancel === 'function') {
      textToSpeech.cancel();
    }
  };

  const playStory = () => {
    setIsPlaying(true);
    const speech = new SpeechSynthesisUtterance(story);
    speech.onstart = () => {
      const voices = speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => voice.name === 'Microsoft Zira Desktop - English (United States)');
      speech.voice = femaleVoice;
      setTextToSpeech(speech);
    };
    speech.onend = () => {
      setIsPlaying(false);
    };
    speechSynthesis.speak(speech);
  };

  const stopStory = () => {
    setIsPlaying(false);
    if (typeof speechSynthesis.cancel === 'function') {
      speechSynthesis.cancel();
    }
  };
  

  useEffect(() => {
    if (textToSpeech) {
      textToSpeech.onend = () => {
        setIsPlaying(false);
      };
      return () => {
        textToSpeech.onend = null;
      };
    }
  }, [textToSpeech]);

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
