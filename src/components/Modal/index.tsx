import React from 'react'
import './modal.css'
import { Button, buttonType } from '../Button'

export interface ModalProps {
  modalTitle: string,             // title for the modal
  modalContentText: string,       // presentation information
  confirmButtonText: string,      // main button text
  confirmButtonFunc(): void,    // main button function
  show: boolean,                  // show the modal?
  close: Function                 // close the modal
}

export const Modal: React.FC<ModalProps>= ({ 
  modalTitle,
  modalContentText,
  confirmButtonText, 
  confirmButtonFunc, 
  show,
  close
}) => {
  console.log('Show?', show)
  return (
    <div>
      { 
        show 
        ? <div onClick={() => close()} className='modalContainer'>
          <div className='modal'>
            <header className='modal_header'>
              <h2 className='modal_header-title'>{ modalTitle }</h2>
            </header>
            <main className='modal_contetnt'>
              { modalContentText }
            </main>
            <footer className='modal_footer'>
              <Button 
                type={buttonType.delete}
                buttonText={confirmButtonText} 
                buttonAction={() => confirmButtonFunc()}
              />
              <Button 
                type={buttonType.cancel} 
                buttonText={'Cancel'} 
                buttonAction={() => close()}
              />
            </footer>
          </div>
        </div>
      : null
      }
    </div>
  )
}
