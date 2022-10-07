import { AiFillDelete } from "react-icons/ai";
import "./note.css";

const Note = ({
  id,
  text,
  date,
  category,
  handleDelte,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div
      className={`note ${id === activeNote && "active"}`}
      onClick={() => setActiveNote(id)}
    >
      <span>{text}</span>
      <div className="noteFooter">
        <div className="noteMeta">
          <small>{date}</small> <small>Category: {category}</small>
        </div>

        <AiFillDelete className="deleteIcon" onClick={() => handleDelte(id)} />
      </div>
    </div>
  );
};

export default Note;
