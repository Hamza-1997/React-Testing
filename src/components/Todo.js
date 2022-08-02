const Note = ({ note, toggleImportance }) => {
    const label = note.important
      ? 'revive' : 'delete'
  
    return (
      <li className="note">
        {note.content}
        <button onClick={toggleImportance}>{label}</button>
      </li>
    )
  }
  
  export default Note