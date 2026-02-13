import React, { useState, useEffect } from 'react'
import Input from './Input'
import NoteCard from './NoteCard'

const App = () => {
    const [notes, setNotes] = useState([])
    const [editingNote, setEditingNote] = useState(null)

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || []
        setNotes(savedNotes)
    }, [])

    const handleAddNote = (title, description) => {
        const newNote = {
            id: crypto.randomUUID(),
            title: title,
            description: description,
            createdAt: new Date().toISOString()
        }
        const updatedNotes = [...notes, newNote]
        setNotes(updatedNotes)
        localStorage.setItem("notes", JSON.stringify(updatedNotes))
    }

    const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id)
        setNotes(updatedNotes)
        localStorage.setItem("notes", JSON.stringify(updatedNotes))
    }

    const handleUpdateNote = (id, title, description) => {
        const updatedNotes = notes.map(note =>
            note.id === id ? { ...note, title, description, updatedAt: new Date().toISOString() } : note
        )
        setNotes(updatedNotes)
        localStorage.setItem("notes", JSON.stringify(updatedNotes))
        setEditingNote(null)
    }

    const handleEditNote = (note) => {
        setEditingNote(note)
    }

    const handleCancelEdit = () => {
        setEditingNote(null)
    }

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>My Notes App</h1>

            <Input
                onAddNote={handleAddNote}
                onUpdateNote={handleUpdateNote}
                editingNote={editingNote}
                onCancelEdit={handleCancelEdit}
            />

            <p style={{ textAlign: 'center', margin: '20px 0' }}>Total Notes: {notes.length}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {notes.length === 0 ? (
                    <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>No notes yet. Add your first note!</p>
                ) : (
                    notes.map(note => (
                        <NoteCard
                            key={note.id}
                            note={note}
                            onDelete={handleDeleteNote}
                            onEdit={handleEditNote}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default App