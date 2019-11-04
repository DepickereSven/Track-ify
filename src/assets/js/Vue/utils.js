/**
 Created by svend on 4/11/2019.
 **/

export default (function () {

    function sort(list, sortItem) {
        return list.sort((a, b) => (a[sortItem] < b[sortItem]) ? 1 : -1)
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
        sort,
        getRandomColor
    }

})();
