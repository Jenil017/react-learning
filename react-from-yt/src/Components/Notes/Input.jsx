import React, { useState, useEffect } from 'react'
import MyButton from './MyButton'

const Input = ({ onAddNote, onUpdateNote, editingNote, onCancelEdit }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (editingNote) {
            setTitle(editingNote.title)
            setDescription(editingNote.description)
        }
    }, [editingNote])

    const handleSubmit = () => {
        if (!title.trim()) {
            alert("Please enter a title!")
            return
        }

        if (editingNote) {
            onUpdateNote(editingNote.id, title, description)
        } else {
            onAddNote(title, description)
        }

        setTitle("")
        setDescription("")
    }

    const handleCancel = () => {
        setTitle("")
        setDescription("")
        onCancelEdit()
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
            <h2 style={{ marginBottom: '15px' }}>{editingNote ? 'Edit Note' : 'Add New Note'}</h2>

            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                <input
                    type="text"
                    placeholder='Enter note title'
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
                <textarea
                    placeholder='Enter note description'
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', height: '100px', resize: 'vertical' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <MyButton
                    bg={editingNote ? "orange" : "green"}
                    text={editingNote ? "Update" : "Add Note"}
                    color="white"
                    onClick={handleSubmit}
                />

                {editingNote && (
                    <MyButton
                        bg="gray"
                        text="Cancel"
                        color="white"
                        onClick={handleCancel}
                    />
                )}
            </div>
        </div>
    )
}

export default Input
