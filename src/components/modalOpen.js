import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

  Modal.setAppElement('#root');


export default function OpenModal({btnName,_TaskForm}) {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    // let subtitle;
    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    return(
        <>
        <button type="button" className="btn btn-success mx-5" onClick={openModal}>{btnName}</button>
        
        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        >
         <p className='text-center'>Task</p>
         {_TaskForm()}
         
        </Modal>
        </>

    );
   
}
