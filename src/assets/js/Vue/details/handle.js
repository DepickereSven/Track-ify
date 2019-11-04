/**
 Created by svend on 4/11/2019.
 **/

import spotify from "../../spotify"
import songData from "../../../images/detailsSongDetails"
import artistsData from "../../../images/detailArtists"
import album from "../../../images/detailsAlbum"
import allAlbumInfo from "../../../images/detailsAllAlbum"
import spotifyData from "../home/spotifyData";

export default (function () {

    const init = function (_self) {
        // _self.songDetails = songData;
        // _self.artists = artistsData;
        // _self.album = album;
        // _self.allAlbumInfo = allAlbumInfo;
        getAlbums(_self);
    };


    function getAlbums(_self) {
        spotify.configuration.spotifyApi.getAlbum(_self.songDetails.album.id)
            .then(function (result) {
                _self.album = result;
        }).then(function() {
            return spotify.configuration.spotifyApi.getArtistAlbums(_self.artists[0].id, {
                include_groups: "album,single,appears_on,compilation",
                limit: 50
            });
        }).then(function(allAlbumInfo) {
            _self.allAlbumInfo = allAlbumInfo;
        }).catch(function(error) {
            console.error(error);
        });
    }


    return {
        init
    }

})();
