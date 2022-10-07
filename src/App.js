import { useState, useEffect } from "react";
import { NoteList, Search, UpdateNote } from "./components";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is a template Note you can either edit it or delete it",
      date: "9/20/2022",
      category: "Info",
    },
  ]);

  const [searchNote, setSearchNote] = useState("");
  const [activeNote, setActiveNote] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filtered, setFiltred] = useState(notes);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    let category = prompt("Please write a category");
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      category: category ? category : "None",
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updateNote) => {
    const updateNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote;
      }
      return note;
    });
    setNotes(updateNotesArray);
  };

  const notesFilter = notes.filter(
    (note) =>
      note.text.toLowerCase().includes(searchNote) &&
      note.category.includes(selectedCategory)
  );

  return (
    <div className="container">
      <div className="sideBar">
        <Search handleSearchNote={setSearchNote} />
        <div className="notesWrapper">
          <NoteList
            notesList={notes}
            notesFilter={notesFilter}
            setActiveNote={setActiveNote}
            activeNote={activeNote}
            filtered={filtered}
            handleAddNote={addNote}
            handleDelte={deleteNote}
            handleFilter={setSelectedCategory}
            setFiltred={setFiltred}
            searchNote={searchNote}
          />
        </div>
      </div>

      <UpdateNote activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
