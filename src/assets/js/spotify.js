/**
 Created by svend on 30/10/2019.
 **/

export default (function () {

    const configuration = {
        authEndpoint: "https://accounts.spotify.com/authorize",
        clientId: "a99753b000db451b9a40b2420e8cdfcb",
        redirectUri: "http://localhost:8081/confirm",
        scopes: [
            "user-top-read",
            // "user-read-email",
            // "user-read-private"
        ]
    };

    //******  HELPER FUNCTION ******//

    function getHash() {
        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});
        window.location.hash = '';
        return hash;
    }


    return {
        configuration,
        getHash
    }

})();
