import React, { useContext, useEffect, useState, useRef } from 'react'
import AddNote from './addnote';
import Note from './note';
import NoteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom';

function Notes(props) {
    const co = useContext(NoteContext)
    const { notes, getNotes, editNote } = co;
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else { navigate("/login") }
        // eslint-disable-next-line
    }, [])
    const [note, setnote] = useState({ id: "", e_title: "", e_desc: "", e_tag: "" })
    const refB = useRef(); const refClose = useRef();
    const upNote = (c) => {
        refB.current.click();
        setnote({ id: c._id, e_title: c.title, e_desc: c.desc, e_tag: c.tag })
    }
    const upCl = (e) => {
        console.log("updating", note);
        editNote(note.id, note.e_title, note.e_desc, note.e_tag)
        refClose.current.click();
        props.showAlert("updated", "success")
    }
    const onCh = (e) => { setnote({ ...note, [e.target.name]: e.target.value }) }

    return (
        <><AddNote showAlert={props.showAlert} />
            <button type="button" ref={refB} className="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                B</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog"><div className="modal-content"><div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div className="modal-body">
                        <form><div className="form-group row mb-1">
                            <label htmlFor="id" className="col-sm-2 col-form-label">Id</label>
                            <div className="col-sm-10">
                                <input value={note.e_id} type="text" className="form-control form-control-sm" id="id" name='id'
                                    aria-describedby="emailHelp" onChange={onCh} />
                            </div></div>
                            <div className="form-group row mb-1">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input value={note.e_title} type="text" className="form-control form-control-sm" id="e_title" name='e_title'
                                        aria-describedby="emailHelp" onChange={onCh} minLength={5} required />
                                </div></div>
                            <div className="form-group row mb-1">
                                <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <input value={note.e_desc} type="text" className="form-control form-control-sm" id="e_desc" name='e_desc' onChange={onCh} minLength={5} required />
                                </div></div>
                            <div className="form-group row mb-1">
                                <label htmlFor="tag" className="col-sm-2 col-form-label">Tag</label>
                                <div className="col-sm-10">
                                    <input value={note.e_tag} type="text" className="form-control form-control-sm" id="e_tag" name='e_tag' onChange={onCh} />
                                </div></div></form></div>
                    <div className="modal-footer">
                        <button disabled={note.e_title.length < 5 || note.e_desc.length < 5} ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={upCl} type="button" className="btn btn-primary">Update Note</button>
                    </div></div></div></div>
            <div className="row my-3">
                <h3>Your Notes</h3>
                <div className="container">
                    {notes.length === 0 && 'no notes'}
                    {notes.map((note) => {
                        return <Note key={note._id} upNote={upNote} note={note} showAlert={props.showAlert} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes