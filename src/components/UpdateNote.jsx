const UpdateNote = ({ activeNote, onUpdateNote }) => {
  const onEditField = (key, value) => {
    const date = new Date();
    onUpdateNote({
      ...activeNote,
      [key]: value,
      date: date.toLocaleDateString(),
    });
  };

  if (!activeNote) return <h1 className="updateNote">No note selected</h1>;
  return (
    <div className="updateNote">
      <h1>My Note</h1>
      <textarea
        value={activeNote.text}
        onChange={(e) => onEditField("text", e.target.value)}
        className="textArea"
      ></textarea>
    </div>
  );
};

export default UpdateNote;
