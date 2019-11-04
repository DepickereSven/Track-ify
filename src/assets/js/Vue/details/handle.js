/**
 Created by svend on 4/11/2019.
 **/

import songData from "../../../images/detailsSongDetails"
import artistsData from "../../../images/detailArtists"

export default (function () {

    const init = function (_self) {
        _self.songDetails = songData;
        _self.artists = artistsData;
    };


    return {
        init
    }

})();
