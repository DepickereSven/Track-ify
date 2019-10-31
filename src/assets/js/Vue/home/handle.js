/**
 Created by svend on 30/10/2019.
 **/

import spotify from "../../spotify"
import songData from "../../../images/test"
import artists from "../../../images/artists"

export default (function () {

    const init = function (_self) {
        // _self.data = songData.items;
        // _self.artists = artists.artists;
        // getAllGenres(_self);
        _self.loaded = true;
        spotify.configuration.spotifyApi.getMyTopTracks({
            limit: 50,
            time_range: "short_term"
        }).then(function(data) {
            _self.data = data.items;
        }).then(function() {
            return spotify.configuration.spotifyApi.getArtists(getIDsArtists(_self));
        }).then(function(artistsInfo) {
            _self.artists = artistsInfo.artists;
            getAllGenres(_self);
            _self.loaded = true;
            console.log("ready");
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

    function getAllGenres(_self) {
        _self.genres = createNumberOfGenres(_self, _self.artists.map(function (el) {
            return el.genres;
        }));
        getChartData(_self);
    }

    function createNumberOfGenres(_self, genres) {
        let genreArray = [];
        genres.forEach(function (el, topIndex) {
            if (el.length !== 0){
                el.forEach(function (element) {
                    let index = genreArray.findIndex((genre => genre.name === element));
                    if (index === undefined || index === -1){
                        genreArray.push({
                            name: element,
                            hits: 1,
                            // pictures: _self.artists[topIndex].images[0].url
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

    function getChartData(_self) {
        let index = 0;
        while (index < 10){
            _self.genresChart.labels.push(_self.genres[index].name);
            _self.genresChart.datasets[0].backgroundColor.push(getRandomColor());
            _self.genresChart.datasets[0].data.push(_self.genres[index].hits);
            index++;
        }
        // _self.genres.forEach((function (el) {
        //     _self.genresChart.labels.push(el.name);
        //     _self.genresChart.datasets[0].backgroundColor.push(getRandomColor());
        //     _self.genresChart.datasets[0].data.push(el.hits);
        // }))
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return {
        init
    }

})();
