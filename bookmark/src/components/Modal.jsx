import { useContext, useRef } from 'react'
import { Context } from '../Context/mainContext'
import toggleModal from '../utils/modal'
import Form from './Form'

function Modal( props ) {
    const { temp } = useContext( Context )
    const buttonRef = useRef()
    temp.modal = buttonRef
    function refClick() { buttonRef.current.click() }

    return (
        <>
            <button style={ { display: 'none' } } ref={ buttonRef } data-target="modal-example" onClick={ ( e ) => toggleModal( e ) }> Launch demo modal </button>
            <button style={ { display: 'none' } } data-target="modal-example" onClick={ refClick }> Launch demo modal fun </button>

            <dialog id="modal-example" >
                <article>
                    <a href="#close" aria-label="Close" className="close" data-target="modal-example" onClick={ ( e ) => toggleModal( e ) }></a>
                    <hgroup>
                        <h3>Title</h3>
                        <p>Subtitle</p>
                    </hgroup>
                    <Form type='create' />
                </article>
            </dialog>
        </>
    )
}

export default Modal