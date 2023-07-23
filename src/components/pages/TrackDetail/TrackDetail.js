import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './TrackDetail.css';
import '../../../App.css';
import { TbPlayerTrackNext } from 'react-icons/tb';
import { AiOutlineFire } from 'react-icons/ai';
import { Si1001Tracklists } from 'react-icons/si';
import { BsMusicNote } from 'react-icons/bs';

const TrackDetail = () => {
    //con useParams me traigo los datos del Id del track
    const { trackId } = useParams();
    const [ trackDetails, setTrackDetails ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + window.localStorage.access_token,
                    },
                });
                const data = await response.json();

                setTrackDetails(data);
                console.log("respuesta fetch trackId", data);
            } catch (error) {
                console.log("Error al obtener los detalles del track:", error);
            }
        }

        fetchData();
    }, [ trackId ]);

    if (!trackDetails) return null;


    return (
        <div className='track-details'>
            <img
                src={trackDetails.album.images[ 0 ].url}
                alt={trackDetails.album.name}
                className='track-details-image'
            />

            <div className='track-details-names-container'>
                <h1 className='details-trackname'>{trackDetails.name} <TbPlayerTrackNext /></h1>
                <h3 className='details-artistname'>Artist: {trackDetails.artists[ 0 ].name}</h3>
                <div className='details-info-container'>
                    <div className='each-div-detail'>
                        <p>Popularity Track Ranking</p>
                        <p>{trackDetails.popularity}</p>
                    </div>
                    <div>
                        <p>Popularity Track Ranking</p>
                        <p>{trackDetails.popularity}</p>
                    </div>
                    <div>
                        <p>Popularity Track Ranking</p>
                        <p>{trackDetails.popularity}</p>
                    </div>
                    <div>
                        <p>Popularity Track Ranking</p>
                        <p>{trackDetails.popularity}</p>
                    </div>

                    {/* 
                    <ul className='details-list'>
                        <li><p>Popularity ranking: {trackDetails.popularity} <AiOutlineFire /></p></li>
                        <li><p>{trackDetails.album.album_type} {trackDetails.type} <Si1001Tracklists /></p></li>
                        <li><p>Álbum: "{trackDetails.album.name}"</p></li>
                        <li><p><BsMusicNote /> {trackDetails.duration_ms} milisegundos</p></li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default TrackDetail;