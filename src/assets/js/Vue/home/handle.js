/**
 Created by svend on 30/10/2019.
 **/

import spotify from "../../spotify"
import spotifyData from "./spotifyData"

export default (function () {

    const init = function (_self) {
        spotify.configuration.spotifyApi.getMyTopTracks({
            limit: 50,
            time_range: "short_term"
        }).then(function(data) {
            _self.data = data.items;
        }).then(function() {
            return spotify.configuration.spotifyApi.getArtists(getIDsArtists(_self));
        }).then(function(artistsInfo) {
            _self.artists = artistsInfo.artists;
            spotifyData.getGenresAndPrepareCharData(_self);
            _self.loaded = true;
            console.log("ready");
        }).catch(function(error) {
            console.error(error);
        });
    };

    const navigateToDetails = function (_self, arg) {
        _self.$router.push(
            {
                name: "details",
                params: {
                    songDetails: arg,
                    artists: findArtistsOfThatSong(_self, arg)
                }
            })
    };

    //**** HELP FUNCTIONS ****//

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

    function findArtistsOfThatSong(_self, arg) {
        let artists = arg.artists;
        let resultArtists =  artists.map(function (el) {
            let index = _self.artists.findIndex((element => element.id === el.id));
            if (index !== -1){
                return _self.artists[index];
            }
        });
        return resultArtists.filter(function (el) {
            return typeof el === "object"
        })
    }

    return {
        init,
        navigateToDetails
    }

})();
