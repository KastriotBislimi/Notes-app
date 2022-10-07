import { Note, AddNote } from "./index";

const NoteList = ({
  notesList,
  notesFilter,
  handleAddNote,
  handleDelte,
  setActiveNote,
  activeNote,
  handleFilter,
}) => {
  const categorys = [];

  const uniqueCategorys = notesList.filter((note) => {
    const isDuplicate = categorys.includes(note.category);

    if (!isDuplicate) {
      categorys.push(note.category);
      return true;
    }
    return false;
  });

  return (
    <div className="notesList">
      {notesFilter.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          category={note.category}
          handleDelte={handleDelte}
          setActiveNote={setActiveNote}
          activeNote={activeNote}
        />
      ))}

      <select
        className="categorySelector"
        onChange={(event) => handleFilter(event.target.value)}
      >
        <option value="">All Notes</option>
        {uniqueCategorys.map((note) => (
          <option key={note.id} value={note.category}>
            {note.category}
          </option>
        ))}
      </select>

      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
