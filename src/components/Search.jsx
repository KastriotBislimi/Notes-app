import { ImSearch } from "react-icons/im";
import "./search.css";
const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <ImSearch
        className="searchIcon"
        style={{ marginRight: "1rem", color: "#a8a8a8" }}
      />
      <input
        type="text"
        placeholder="Search by text..."
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default Search;
