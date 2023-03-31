import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'


function AddNote(props) {
    const co = useContext(NoteContext)
    const { addNote } = co;
    const [note, setnote] = useState({ title: "", desc: "", tag: "" })
    const addcl = (e) => { e.preventDefault(); addNote(note.title, note.desc, note.tag); 
    setnote({ title: "", desc: "", tag: "" });props.showAlert("added S","success")}
    const onCh = (e) => { setnote({ ...note, [e.target.name]: e.target.value }) }

    return (
        <div className="container my-3">
            <h3>Add Notes</h3>
            <form><div className="form-group row mb-1">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" value={note.title} className="form-control form-control-sm" id="title" name='title'
                            aria-describedby="emailHelp" onChange={onCh} minLength={5} required/>
                    </div></div>
                <div className="form-group row mb-1">
                    <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="text" value={note.desc} className="form-control form-control-sm" id="desc" name='desc' onChange={onCh} minLength={5} required/>
                    </div></div>
                <div className="form-group row mb-1">
                    <label htmlFor="tag" className="col-sm-2 col-form-label">Tag</label>
                    <div className="col-sm-10">
                        <input type="text" value={note.tag} className="form-control form-control-sm" id="tag" name='tag' onChange={onCh} minLength={5} required/>
                    </div></div>
                <button disabled={note.title.length<5 || note.desc.length<5} type="submit" className="btn btn-primary" onClick={addcl}>Submit</button>
            </form></div>
    )
}

export default AddNote