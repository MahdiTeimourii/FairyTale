import React, { useState } from "react";
import "../styles/StoryDetailsModal.scss";

function BedtimeStoryModal({ genStory }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
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
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p>{genStory}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BedtimeStoryModal;
