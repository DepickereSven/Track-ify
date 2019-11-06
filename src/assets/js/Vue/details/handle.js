/**
 Created by svend on 4/11/2019.
 **/

import spotify from "../../spotify"
import utils from "../utils"
import songData from "../../../images/detailsSongDetails"
import artistsData from "../../../images/detailArtists"
import album from "../../../images/detailsAlbum"
import allAlbumInfo from "../../../images/detailsAllAlbum"
import otherArtistsDetails from "../../../images/otherArtistsDetails"
import spotifyData from "../home/spotifyData";

export default (function () {

    const init = function (_self) {
        // _self.songDetails = songData;
        // _self.artists = artistsData;
        // _self.album = album;
        // _self.allAlbumInfo = allAlbumInfo;
        // _self.otherArtistsDetails = otherArtistsDetails.artists
        getAlbums(_self);
    };


    function getAlbums(_self) {
        spotify.configuration.spotifyApi.getAlbum(_self.$props.songDetails.album.id)
            .then(function (result) {
                _self.album = result;
                getOtherArtistsFromAlbums(_self);
            }).then(function () {
            return spotify.configuration.spotifyApi.getArtistAlbums(_self.$props.artists[0].id, {
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
        _self.album.tracks.items.map(function (el) {
            return el.artists.filter((ar => ar.id !== mainArtist));
        }).forEach(function (element) {
            if (element.length !== 0){
                if (element.length === 1){
                    _self.otherArtists.push(element[0])
                } else {
                    element.forEach(function (ele) {
                        _self.otherArtists.push(ele);
                    });
                }
            }
        });
        if (_self.otherArtists.length !== 0){
            _self.otherArtists = utils.makeUnique(_self.otherArtists, "id");
            getArtistsDetails(_self);
        }
    }


    function getDetailsAboutAnAlbum(_self, id) {
        spotify.configuration.spotifyApi.getAlbum(id)
            .then(function (result) {
                _self.album = result;
                _self.window = 0;
                resetVars(_self);
                getOtherArtistsFromAlbums(_self);
            }).catch(function (error) {
        });
    }

    //**** HELP FUNCTIONS ****//

    function getArtistsDetails(_self) {
        spotify.configuration.spotifyApi.getArtists(getIDsArtists(_self))
            .then(function(artistsInfo) {
                _self.otherArtistsDetails = artistsInfo.artists;
            }).catch(function(error) {
            console.error(error);
        })
    }

    const getIDsArtists = function (_self) {
        return makeString(_self.otherArtists.map(function (el) {
            return el.id
        }))
    };

    function makeString (array) {
        return array.map(function (el) {
            return el;
        });
    }

    function resetVars(_self) {
        _self.otherArtists = [];
    }

    return {
        init,
        getDetailsAboutAnAlbum
    }

})();
