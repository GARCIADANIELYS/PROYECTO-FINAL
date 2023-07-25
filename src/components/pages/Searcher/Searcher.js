import { useContext, useState } from "react";
import { ApiContext } from "../../../services/Api";
import "./Searcher.css";
import { BsSearch } from 'react-icons/bs';

const Searcher = ({ type }) => { 

 
  const { setSearch, setType } = useContext(ApiContext);

 
  const [ searchTerm, setSearchTerm ] = useState("");

  const handleInputChange = (ev) => {
    const inputValue = ev.target.value;
    setSearchTerm(inputValue);
  };

  
  const handleClick = () => {
    setSearch(type);
    setSearch(searchTerm);
  }

  const handleKeyPress = (ev) => {
    if (ev.key === "Enter") {
      setSearch(type);
      setSearch(searchTerm);
    }
  }

  return (
    <div className="searcher">
      <input
        className="searcher-input"
        type="text"
        placeholder="SEARCH YOUR FAVORITE ARTISTS"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button 
      className="searcher-btn"
      onClick={handleClick}><BsSearch className="search-icon" /></button>
      
    </div>
  );
};

export default Searcher;
