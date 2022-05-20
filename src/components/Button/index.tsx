import React, { CSSProperties } from 'react'
import './button.css'

export enum buttonType {
  delete,
  deny,
  confirm,
  cancel,
}

export interface ButtonProps {
  buttonText: string;
  buttonAction?(): void;
  type: buttonType;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, buttonAction, type }) => {
  //console.log(type)
  let buttonStyle: CSSProperties

  switch(type) {
    case buttonType.delete: {
      buttonStyle = {backgroundColor: '#cf134b'}
      break
    }
    case buttonType.deny: {
      buttonStyle = {backgroundColor: '#cf13a0'}
      break
    }
    case buttonType.confirm: {
      buttonStyle = {backgroundColor: '#25ba8d'}
      break
    }
    case buttonType.cancel: {
      buttonStyle = {backgroundColor: '#22b5bf'}
      break
    }
    default: {
      buttonStyle = {backgroundColor: 'yellow'}
      break
    }
  }

  //buttonAction()
  return (
    <button className='button' style={ buttonStyle } onClick={buttonAction}>
      {buttonText}
    </button>
  )
}

