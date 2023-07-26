import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
function NotesCard(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props
    return (
        <div className="col-sm-3 mb-4">
            <div className="card border-primary" style={{ minHeight: '210px' }}>
                <div className="card-body text-decoration-none">
                    <div className='d-flex justify-content-between fs-4 border-bottom'>
                        <h5 className="d-flex justify-content-center fs-3" style={{ fontWeight: '600', textAlign: "center", color: "#12296c" }}>{note.title}</h5>
                        <div>
                            <i className="far fa-trash-alt mx-3" onClick={() => { deleteNote(note._id) }}></i>
                            <i className="far fa-edit" onClick={() => { updateNote(note) }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description} </p>
                </div>
            </div>
        </div>
    )
}

export default NotesCard