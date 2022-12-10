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


    function makeUnique(arrayOfObjects, valueOfUnique) {
        return arrayOfObjects.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t[valueOfUnique] === thing[valueOfUnique]
            ))
        )
    }

    return {
        sort,
        getRandomColor,
        makeUnique
    }

})();
