/**
 Created by svend on 4/11/2019.
 **/

import spotify from "../../spotify"
import songData from "../../../images/detailsSongDetails"
import artistsData from "../../../images/detailArtists"
import album from "../../../images/detailsAlbum"

export default (function () {

    const init = function (_self) {
        _self.songDetails = songData;
        _self.artists = artistsData;
        _self.album = album;
        // getAlbums(_self);
    };


    function getAlbums(_self) {
        spotify.configuration.spotifyApi.getAlbum(_self.songDetails.album.id)
            .then(function (result) {
                _self.album = result;
        })
    }


    return {
        init
    }

})();
