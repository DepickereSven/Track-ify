/**
 Created by svend on 30/10/2019.
 **/

import spotify from "../../spotify"

export default (function () {

    const init = function (_self) {

        const hash = spotify.getHash();

        let _token = hash.access_token;

        const authEndpoint = spotify.configuration.authEndpoint;
        const clientId = spotify.configuration.clientId;
        const redirectUri = spotify.configuration.redirectUri;
        const scopes = spotify.configuration.scopes;


        console.log(_token, "before");

        if (!_token) {
            window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
        }

        console.log(_token, window.location);
    };



    return {
        init
    }

})();
