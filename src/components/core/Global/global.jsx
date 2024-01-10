var Global = {
	playlistLimit: 50,
	songLimit: 100,
	access_token: "",
	refresh_token: "",
	redirect_uri : process.env.REACT_APP_REDIRECT_URI,
	client_id : process.env.REACT_APP_CLIENT_ID,
	client_secret : process.env.REACT_APP_CLIENT_SECRET,
	scopes : "user-read-private user-read-email playlist-read-private playlist-modify-public playlist-modify-private user-library-read"
}

export default Global;