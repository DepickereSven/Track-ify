/**
 Created by svend on 30/10/2019.
 **/

import spotify from "../../spotify"
import songData from "../../../images/test"
import artists from "../../../images/artists"

export default (function () {

    const init = function (_self) {
        _self.data = songData.items;
        _self.artists = artists.artists;
        getAllGenres(_self)
        // spotify.configuration.spotifyApi.getMyTopTracks({
        //     limit: 50,
        //     time_range: "short_term"
        // }).then(function(data) {
        //     _self.data = data.items;
        // }).then(function() {
        //     return spotify.configuration.spotifyApi.getArtists(getIDsArtists(_self));
        // }).then(function(artistsInfo) {
        //     _self.artists = artistsInfo;
        // }).catch(function(error) {
        //     console.error(error);
        // });

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

    function getAllGenres(_self) {
        _self.genres = createNumberOfGenres(_self.artists.map(function (el) {
            return el.genres;
        }));
    }

    function createNumberOfGenres(genres) {
        let genreArray = [];
        genres.forEach(function (el) {
            if (el.length !== 0){
                el.forEach(function (element) {
                    let index = genreArray.findIndex((genre => genre.name === element));
                    if (index === undefined || index === -1){
                        genreArray.push({
                            name: element,
                            hits: 1
                        })
                    } else {
                        genreArray[index].hits++;
                    }
                })
            }
        });
        return sort(genreArray);
    }

    function sort(list) {
        return list.sort((a, b) => (a.hits < b.hits) ? 1 : -1)
    }


    return {
        init
    }

})();
