import React from 'react'
import './Recommendations.css';
import { useContext } from 'react';
import { ApiContext } from '../../../services/Api';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const Recommendations = () => {
  const { recApiResponse } = useContext(ApiContext);
  const { seeds, tracks } = recApiResponse;

  if (!recApiResponse) {
    return <BeatLoader color="#36D7B7" loading={true} size={30} />;
  }

  if (recApiResponse && recApiResponse.tracks && recApiResponse.seeds) {

    return (
      <div>
        <h1 className='title'>
          Specially For You</h1>

        <h5 className='title-ps'>*based on your preferences</h5>
        <ul className='genres-ul'>
          {seeds.map((seed) => (
            <li key={seed.id}>{seed.id}</li>
          ))}
        </ul>
        <div className='tracks-container'>
          {tracks.map((track) => (
            <div className='track-card' key={track.id}>
              <h3>{track.name}</h3>
              <Link to={`/track/${track.id}`}>
                <img
                  className='track-card-image'
                  src={track?.album.images[ 0 ].url}
                  alt={track.name}
                />
              </Link>
              <h4>{track?.artists[ 0 ]?.name}</h4>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Recommendations;