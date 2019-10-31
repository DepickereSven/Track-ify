/**
 Created by svend on 30/10/2019.
 **/

const SpotifyWebApi = require('spotify-web-api-js');

export default (function () {

    const configuration = {
        authEndpoint: "https://accounts.spotify.com/authorize",
        clientId: "a99753b000db451b9a40b2420e8cdfcb",
        // redirectUri: "https://depickeresven.github.io/spotify-analytics/confirm",
        redirectUri: "http://localhost:8081/confirm",
        scopes: [
            "user-top-read",
            // "user-read-email",
            // "user-read-private"
        ],
        spotifyApi: null
    };

    //******  HELPER FUNCTION ******//

    function getHash() {
        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});
        window.location.hash = '';
        return hash;
    }

    function setUpSpotifyAPI(_self) {
        configuration.spotifyApi = new SpotifyWebApi();
        configuration.spotifyApi.setAccessToken(_self.$store.state.login.token);
    }


    return {
        configuration,
        getHash,
        setUpSpotifyAPI
    }

})();
