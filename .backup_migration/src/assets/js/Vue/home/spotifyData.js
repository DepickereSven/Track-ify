/**
 Created by svend on 4/11/2019.
 **/

import utils from "../utils"

export default (function () {

    const getGenresAndPrepareCharData = function (_self) {
        getAllGenres(_self);
        getChartData(_self);
    };

    function getAllGenres(_self) {
        _self.genres = createNumberOfGenres(_self, _self.artists.map(function (el) {
            return el.genres;
        }));
    }

    function createNumberOfGenres(_self, genres) {
        let genreArray = [];
        genres.forEach(function (el, topIndex) {
            if (el.length !== 0) {
                el.forEach(function (element) {
                    let index = genreArray.findIndex((genre => genre.name === element));
                    if (index === undefined || index === -1) {
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
        return utils.sort(genreArray, "hits");
    }

    function getChartData(_self) {
        resetGenresChart(_self);
        let index = 0;
        while (index < 10) {
            _self.genresChart.labels.push(_self.genres[index].name);
            _self.genresChart.datasets[0].backgroundColor.push(utils.getRandomColor());
            _self.genresChart.datasets[0].data.push(_self.genres[index].hits);
            index++;
        }
    }

    function resetGenresChart(_self) {
        _self.genresChart = {
            labels: [],
            datasets: [{
                backgroundColor: [],
                borderWidth: 0,
                data: []
            }]
        };
    }

    return {
        getGenresAndPrepareCharData
    }

})();
