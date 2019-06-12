import React from 'react'
import ReactDOM from 'react-dom'
import { StyledModal } from './Modal.style'

function Modal(props) {
  const appRoot = document.getElementById('App')
  return ReactDOM.createPortal(<StyledModal modalActive={props.modalActive} >{props.children}</StyledModal>, appRoot)
}

export default Modal
