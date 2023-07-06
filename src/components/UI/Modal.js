import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'
import { Fragment } from 'react'


const ModalOverlay = (props) => {
    return(
        <div className={classes.modal}> 
            <div className={classes.content}>{props.children }</div>
        </div>
    )
}
const BackDrop = (props) => {
    return <div className={classes.backdrop} />
}
const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <Fragment>
           {ReactDOM.createPortal(<BackDrop />, portalElement)}
           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal