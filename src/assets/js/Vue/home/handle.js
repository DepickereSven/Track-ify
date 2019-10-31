/**
 Created by svend on 30/10/2019.
 **/

import spotify from "../../spotify"
import testFile from "../../../images/test"

export default (function () {

    const init = function (_self) {
        // _self.data = testFile.items;
        spotify.configuration.spotifyApi.getMyTopTracks({
            limit: 50,
            time_range: "short_term"
        }).then(function(data) {
            _self.data = data.items;
        }).then(function() {
            return spotify.configuration.spotifyApi.getArtists(getIDsArtists(_self));
        }).then(function(artistsInfo) {
            _self.artists = artistsInfo;
        }).catch(function(error) {
            console.error(error);
        });

    };

    const getIDsArtists = function (_self) {
        return makeString(_self.data.map(function (el) {
            return el.artists.map(function (elementje) {
                return elementje.id;
            });
        }))
    };

    function makeString (array) {
        return array.map(function (el) {
            return el[0];
        });
    }


    return {
        init
    }

})();
