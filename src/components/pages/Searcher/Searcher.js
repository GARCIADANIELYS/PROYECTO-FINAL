import { useContext, useState } from "react";
import { ApiContext } from "../../../services/Api";
import "./Searcher.css";
import { BsSearch } from 'react-icons/bs';

const Searcher = ({ type }) => { //props define la buscaqueda, puede ser artist o track

  //1. setSearch para cambiar el valor de la variable de estado search (l. 10 en Api.js)
  const { setSearch, setType } = useContext(ApiContext);

  //2. variable para guardar el value del campo de entrada
  const [ searchTerm, setSearchTerm ] = useState("");

  //3. función que recoge el valor del input
  const handleInputChange = (ev) => {
    const inputValue = ev.target.value;
    setSearchTerm(inputValue);
  };

  //4. función manejadora del evento botón de buscar
  const handleClick = () => {
    setSearch(type);
    setSearch(searchTerm);
  }

  //5. función manejadora del evento con ENTER en lugar de un botón
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
