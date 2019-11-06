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
        _self.songDetails = songData;
        _self.artists = artistsData;
        _self.album = album;
        _self.allAlbumInfo = allAlbumInfo;
        getOtherArtistsFromAlbums(_self);
        // getAlbums(_self);
    };


    function getAlbums(_self) {
        spotify.configuration.spotifyApi.getAlbum(_self.songDetails.album.id)
            .then(function (result) {
                _self.album = result;
                getOtherArtistsFromAlbums(_self);
            }).then(function () {
            return spotify.configuration.spotifyApi.getArtistAlbums(_self.artists[0].id, {
                include_groups: "album,single",
                limit: 50
            });
        }).then(function (allAlbumInfo) {
            _self.allAlbumInfo = allAlbumInfo;
        }).catch(function (error) {
            console.error(error);
        });
    }

    // TODO
    function filterAllAlbumsBasedOnNation() {

    }

    function getOtherArtistsFromAlbums(_self) {
        let mainArtist = _self.album.artists[0].id;
        _self.otherArtists = _self.album.tracks.items.map(function (el) {
            return el.artists.filter((ar => ar.id !== mainArtist));
        });
    }


    function getDetailsAboutAnAlbum(_self, id) {
        spotify.configuration.spotifyApi.getAlbum(id)
            .then(function (result) {
                _self.album = result;
                _self.window = 0;
            }).catch(function (error) {
            console.error(error);
        });
    }

    return {
        init,
        getDetailsAboutAnAlbum
    }

})();
