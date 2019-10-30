import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSpotify } from '@fortawesome/free-solid-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpotify);

Vue.component('font-awesome-icon', FontAwesomeIcon);
