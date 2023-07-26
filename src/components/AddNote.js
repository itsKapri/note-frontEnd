import React, { useContext,useState } from 'react';
import noteContext from '../context/notes/noteContext';

function AddNote(props) {
    const notes = useContext(noteContext);
    const {addNote} = notes;
    const [note, setNote] = useState({title: "", description: ""})
    const handleClick = (e)=>{
        e.preventDefault();
        setNote({title: "", description: ""})
        addNote(note.title, note.description);

    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <form action="/" method="POST" className="position-relative">
    <div className="form-group mb-4 position-absolute" style={{ left: '1px', top: '1px', right: '1px' }}>
        <input type="text" className="form-control fw-bold border-0 fs-4" value={note.title} onChange={onChange} id="title" name="title" placeholder="Title" required />
    </div>
    <div className="form-group mb-4">
        <textarea required className="form-control pt-5 fs-4" id="desc" value={note.description} onChange={onChange}  name="description" placeholder="Take a note..." rows="12"></textarea>
    </div>
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-lg" onClick={handleClick}>+ Add Note</button>
    </div>
</form>
  )
}

export default AddNote