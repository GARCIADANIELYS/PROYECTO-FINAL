import React, { useState, useContext, useEffect } from "react";
import { ApiContext } from "../../../services/Api";
import axios from "axios";
import "./Playlist.css";

function PlaylistCreator({ onPlaylistCreated }) {
  const [inputValue, setInputValue] = useState("");
  const [createdPlaylist, setCreatedPlaylist] = useState(null);
  const { apiResponse, setEndpoint, profile_URL, access_token } =  useContext(ApiContext);
  const user_id = apiResponse.id;
  

  useEffect(() => {
    setEndpoint(profile_URL); //se puede atualizar que endpoint llamar
  }, [profile_URL]);

  //1.Guarda los dados del input para pasar a la funcioncion createPlaylisr
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

 

//2. llamada a api para crear un nueva playlist
  const createPlaylist = async () => {
    const url = `https://api.spotify.com/v1/users/${user_id}/playlists`;
    const requestBody = {
      "name": inputValue,
      "description": "New playlist description",
      "public": false
    };

    try {
      const response = await axios.post(url, requestBody, {
        headers: {
          Authorization: "Bearer " + access_token,
          "Content-Type": "application/json",
        },
        
      });
      setCreatedPlaylist(response.data); //crea la playlist
      setInputValue("");                 //deja el input in black despues del submit 
      onPlaylistCreated(createdPlaylist);  //actuliza la lista de playlist del compoente Playlist
     
     
    } catch (error) {
      console.error("Erro ao criar a playlist:", error);
    }
  };

  

  return (
    <>
      <form className="playlist-creator-form">
        <label className="title">New Playlist</label>
        <input
          type="text"
          placeholder="Playlist name"
          required
          onChange={handleInputChange}
        />
        <button type="submit" onClick={createPlaylist} >
          Create
        </button>
      </form>

     
     
    </>
  );
}

export default PlaylistCreator;
