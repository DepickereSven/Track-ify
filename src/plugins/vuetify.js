import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {CUSTOM_ICONS} from "./fontAwesome"

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'faSvg',
        values: CUSTOM_ICONS
    },
});
