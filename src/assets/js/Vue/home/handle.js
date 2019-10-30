/**
 Created by svend on 30/10/2019.
 **/

import spotify from "../../spotify"

export default (function () {

    const init = function (_self) {
        spotify.configuration.spotifyApi.getMyTopTracks({
            limit: 50,
            time_range: "short_term"
        }).then(function(data) {
            _self.data = data.items;
            console.log(_self.data);
        }, function(err) {
            console.error(err);
        });
    };


    return {
        init
    }

})();
