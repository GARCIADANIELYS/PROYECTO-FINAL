import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Header from "./components/core/Header/Header";
import { TokenContext } from "./context/tokenContext";
import { RefreshTokenContext } from "./context/refreshTokenContext";
import Artists from "./components/pages/Artists/Artists";
import Footer from "./components/core/Footer/Footer";
import Details from "./components/pages/ArtistDetails/Details";
import TrackDetail from "./components/pages/TrackDetail/TrackDetail";
import SavedTracks from "./components/pages/SavedTracks/SavedTracks";
import Playlists from "./components/pages/Playlist/Playlists";
import GeneralSearch from "./components/pages/Searcher/GeneralSearch";
import AlbumsDetails from "./components/pages/AlbumDetails/AlbumsDetails";

function App() {
  const [token, setToken] = useState(
    window.localStorage.access_token ? window.localStorage.access_token : null
  );
  const [refresh, setRefresh] = useState(
    window.localStorage.refresh_token ? window.localStorage.refresh_token : null
  );


  return (
    <>
      <RefreshTokenContext.Provider value={{ refresh, setRefresh }}>
        <TokenContext.Provider value={{ token, setToken }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/track/:trackId" element={<TrackDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/artists/:id" element={<Details />} />
              <Route path="/album/:albumId" element={<AlbumsDetails />} />
              <Route path="/savedtracks" element={<SavedTracks />} />
              <Route path="/search" element={<GeneralSearch />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </TokenContext.Provider>
      </RefreshTokenContext.Provider>
    </>
  );
}

export default App;
