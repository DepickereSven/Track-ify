/**
 Created by svend on 30/10/2019.
 **/

import spotify from "../../spotify"

export default (function () {


    const init = function (_self) {
        const hash = spotify.getHash();
        if (!hash.access_token) {
            _self.$router.push({name: "login"})
        } else {
            _self.$store.commit("updateLogin", {
                    token: hash.access_token,
                    user: true
                }
            );
            _self.$router.push({name: "home"})
        }
    };


    return {
        init
    }

})();
