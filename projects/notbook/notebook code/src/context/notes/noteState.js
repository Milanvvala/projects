import { useState } from "react";; import NoteContext from "./noteContext";

const NoteState = (props) => {const host = "http://localhost:1234"; const notesI = []
    const [notes, setnotes] = useState(notesI)
    //get notes
    const getNotes = async () => {
// const note = {"_id": id , "user": "630", "title": title,"desc": desc, "tag": tag,"date": "2022-12-20T11:29:47.136Z", "__v": 0};
        //api call
        const url = `${host}/api/notes/getnotes`;
        const response = await fetch(url, {
            method: 'Get', headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem("token") },
        });
        const json = await response.json(); console.log(json); setnotes(json) //logic
    }
    //add note
    const addNote = async (title, desc, tag) => {
        //api call
        const url = `${host}/api/notes/addnote`;
        const response = await fetch(url, {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem("token")},
            body: JSON.stringify({ title, desc, tag }) });
        //logic
        console.log("adding note"); const note = await response.json(); setnotes(notes.concat(note))
        // const note = { "_id": "_id_text", "user": "_usrt_text", "title": title, "desc": desc, "tag": tag,
        //"date": "2022-12-20T11:29:47.136Z", "__v": 0}; console.log(json);
    }
    //delete note
    const deleteNote = async (id) => {
        //api call console.log(id)
        const url = `${host}/api/notes/deletenote/${id}`;
        const response = await fetch(url, {method: 'DELETE', 
        headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem("token") }, });
        const json = response.json(); console.log(json)
        //logic
        console.log(" deletenote " + id); const newN = notes.filter((note) => { return note._id !== id }); setnotes(newN)
    }
    // Update a note
    const editNote = async (id, title, desc, tag) => {
        //api call
        const url = `${host}/api/notes/updatenote/${id}`;
        const response = await fetch(url, { method: 'PUT',body: JSON.stringify({ title, desc, tag }),
            headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem("token") }, });
        const json = await response.json(); console.log(json); let newNotes = JSON.parse(JSON.stringify(notes))
        //logicto edit  in client
        for (let i = 0; i < newNotes.length; i++) { const el = newNotes[i];
            if (el._id === id) { newNotes[i].title = title; newNotes[i].tag = tag; newNotes[i].desc = desc; break; }
        }
        console.log(id, notes, newNotes); setnotes(newNotes); // setnotes(notes.push(note))
    }
    return ( <NoteContext.Provider value={{ notes, setnotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children} </NoteContext.Provider> )
}
export default NoteState;
// const s1 = {"name" :"milan","age" :"25" } const [state, setstate] = useState(s1)
// const update = () =>{ setTimeout(()=>{ setstate({"name":"mahatv","age":"n"}) },1000) }