import { Img } from "./ImageGalleryItem.styled";

import { useState } from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    zIndex: '1101',
  },
};

Modal.setAppElement('#root');

export const Image = ({ element: {webformatURL, tags, largeImageURL }}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => setIsModalOpen(true);
 const closeModal = () => setIsModalOpen(false);

  return (
      <>
        <Img src={webformatURL} alt={tags} onClick={openModal} />
                
          <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal">
              <img src={largeImageURL} alt={tags} />
          </Modal>
      </>     
   )
}