import React from 'react'
import MyButton from './MyButton'

const NoteCard = ({ note, onDelete, onEdit }) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            onDelete(note.id)
        }
    }

    const handleEdit = () => {
        onEdit(note)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
            <h3 style={{ marginBottom: '10px' }}>{note.title}</h3>

            <p style={{ marginBottom: '10px', color: '#666' }}>
                {note.description || 'No description'}
            </p>

            <div style={{ fontSize: '12px', color: '#999', marginBottom: '15px' }}>
                <div>Created: {formatDate(note.createdAt)}</div>
                {note.updatedAt && (
                    <div>Updated: {formatDate(note.updatedAt)}</div>
                )}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <MyButton
                    bg="orange"
                    text="Edit"
                    color="white"
                    onClick={handleEdit}
                />
                <MyButton
                    bg="red"
                    text="Delete"
                    color="white"
                    onClick={handleDelete}
                />
            </div>
        </div>
    )
}

export default NoteCard
