import noteContext from './noteContext'
import React, { useState } from "react";

const Notestate = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/notes/allnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4OTc5ZGY3OTQ4YjViZTU3Yjk2MmFlIn0sImlhdCI6MTY4NjczMTMwN30.zrWerzTu3Awk96QWWwuRhVIpF9Xa1iGducWM5Im2UOk"

        "auth-token": localStorage.getItem("token")
        
      },

    });
    const json = await response.json()
    console.log(json);
    setNotes(json)
  }

  // addnote
  const addNote = async (title, description) => {
    // api call
    const response = await fetch(`${host}/notes/addNote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4OTc5ZGY3OTQ4YjViZTU3Yjk2MmFlIn0sImlhdCI6MTY4NjczMTMwN30.zrWerzTu3Awk96QWWwuRhVIpF9Xa1iGducWM5Im2UOk"
      },
      body: JSON.stringify({ title, description })
    });
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  //editnote
  const editNote = async (id, title, description) => {
    //api call
    const response = await fetch(`${host}/notes/updateNote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4OTc5ZGY3OTQ4YjViZTU3Yjk2MmFlIn0sImlhdCI6MTY4NjczMTMwN30.zrWerzTu3Awk96QWWwuRhVIpF9Xa1iGducWM5Im2UOk"
      },
      body: JSON.stringify({title, description})
    });
    const json = await response.json(); 
    console.log(json);
     let newNotes = JSON.parse(JSON.stringify(notes))

    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        break; 
      }
    }  
    setNotes(newNotes);

  }

  //deletenote
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/notes/deleteNote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4OTc5ZGY3OTQ4YjViZTU3Yjk2MmFlIn0sImlhdCI6MTY4NjczMTMwN30.zrWerzTu3Awk96QWWwuRhVIpF9Xa1iGducWM5Im2UOk"
      }
    });
    const json = await response.json()
    console.log(json);

    console.log("deleted with id " + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  console.log(notes);
  return (
    <noteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default Notestate;