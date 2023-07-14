import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Global from "../../../Global/global";


const spotyUrl = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}&scope=${Global.scopes}`;

export default function Home() {

    const location = useLocation();
    let navigate = useNavigate();


    useEffect(() => {

        const urlParams = new URLSearchParams(location.search)
        const spotyCode = urlParams.get("code");
        if (spotyCode) {
            autenticateUser(spotyCode)
        }
    })

    const autenticateUser = (spotyCode) => {

        try {
            const searchParams = new URLSearchParams({
                code: spotyCode,
                grant_type: "authorization_code",
                redirect_uri: Global.redirect_uri,
                client_id: Global.client_id,
                client_secret: Global.client_secret,
            });

            axios.post("https://accounts.spotify.com/api/token", searchParams).then(res => {
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                navigate("/playlists");
            })
        } catch (error) {
            console.log(error);
        }


    }

    function login() {
        window.location.replace(spotyUrl);
    };


    return (
        <div className="general" >
            <div id="login">
                <h3 className="subtitle">
                    Visualiza toda la información de tu perfil de Spotify
                </h3>
                <button onClick={login} id="btnLogin" className="btnLogin">
                    INICIAR SESION
                </button>
            </div>
        </div>
    );
}
