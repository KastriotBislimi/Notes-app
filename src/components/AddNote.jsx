import { useState } from "react";
import "./note.css";
import { AiOutlinePlusSquare } from "react-icons/ai";
const AddNote = ({ handleAddNote, notes }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);

      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <input
        type="text"
        onChange={handleChange}
        value={noteText}
        placeholder="Add Note"
      />
      <button className="save" onClick={handleSaveClick}>
        <span>
          <AiOutlinePlusSquare />
        </span>
      </button>
    </div>
  );
};

export default AddNote;
