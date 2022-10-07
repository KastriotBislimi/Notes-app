import React from "react";

const Categorys = ({ id, category, handleFilter }) => {
  return (
    <select onClick={(event) => handleFilter(event.target.value)}>
      <option value="">All Notes</option>
      {/* {notes.map((note) => (
        <option key={note.id} value={note.category}>
          {note.category}
        </option>
      ))} */}
      <option value={category}>{category}</option>
    </select>
  );
};

export default Categorys;
