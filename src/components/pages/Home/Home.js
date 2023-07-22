import './Home.css';
import '../../../App.css';
import React, { useState } from 'react';
import { useContext } from 'react';
import { ApiContext } from '../../../services/Api';
import { Link } from 'react-router-dom';
import SavedTracks from '../SavedTracks/SavedTracks';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import Recommendations from '../Recommendations/Recommendations';

const Home = () => {
  const { trackApiResponse } = useContext(ApiContext);
  const [ visibleTracks, setVisibleTracks ] = useState(5);

  // si recibo respuesta de la API entonces renderízame esto
  if (trackApiResponse && trackApiResponse.tracks && trackApiResponse.tracks.items) {
    const allTracks = trackApiResponse.tracks.items;

    const handleShowMore = () => {
      setVisibleTracks(allTracks.length);
    };

    const handleShowLess = () => {
      setVisibleTracks(5);
    };

    return (
      <div className='home'>
        <h1 className='title'>Top Tracks</h1>

        <div className='btn-div'>
          {visibleTracks < allTracks.length && (
            <button onClick={handleShowMore}>See more <IoMdArrowDropdown className='icon' /></button>
          )}

          {visibleTracks > 5 && (
            <button onClick={handleShowLess}>See less <IoMdArrowDropup className='icon' /></button>
          )}
        </div>

        <div className='tracks-container'>

          {allTracks.slice(0, visibleTracks).map((track) => (
            <div className='track-card' key={track.id}>

              {track.name && <h3>{track.name}</h3>}


              {track.album && track.album.images && track.album.images.length > 0 && (
                <Link to={`/track/${track.id}`}>
                  <img
                    className='track-card-image'
                    src={track.album.images[ 0 ].url}
                    alt={track.album.name}
                  />
                </Link>
              )}

              {track.artists && track.artists.length > 0 && (
                <h4>{track.artists[ 0 ].name}</h4>
              )}

            </div>
          ))}
        </div>
        <SavedTracks />
        <Recommendations />
      </div>
    );
  }

  return null;
}

export default Home;