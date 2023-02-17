import React, { useContext } from 'react'; import NoteContext from '../context/notes/noteContext'

export default function Note(props) {
    const co = useContext(NoteContext); const { deleteNote } = co; const { note, upNote, showAlert } = props;
    
    return (<div className='col-md-3'><div className="card my-3">
        <div className="card-body"> <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.desc}</p>
            <i className="fa-solid fa-trash-can m-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted", "success") }}></i>
            <i className="fa-solid fa-pen-to-square m-2" onClick={() => { upNote(note) }}></i>
        </div></div></div>)
}