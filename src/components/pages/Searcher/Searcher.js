import { useContext, useState } from 'react';
import { ApiContext } from '../../../services/Api';
import './Searcher.css';

const Searcher = () => {

    //1. setSearch para cambiar el valor de la variable de estado search (l. 10 en Api.js)
    const { setSearch } = useContext(ApiContext);

    //2. variable para guardar el value del campo de entrada
    const [ searchTerm, setSearchTerm ] = useState('');

    //3. función que recoge el valor del input
    const handleInputChange = (ev) => {
        const inputValue = ev.target.value;
        setSearchTerm(inputValue);
    }

    //4. función manejadora del evento (del botón)
    //le envía a search (la variable de estado del context) los datos del input
    const handleClick = () => {
        setSearch(searchTerm);
    }

    return (
        <div className='searcher'>
            <h1>BUSCA TU ARTISTA PREFERIDO</h1>

            <input
                className='searcher-input'
                type='text'
                value={searchTerm}
                onChange={handleInputChange}
            />

            <button onClick={handleClick}>buscar</button>
        </div>
    );
};

export default Searcher;