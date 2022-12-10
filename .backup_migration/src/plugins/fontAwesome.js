import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faPlay);
library.add(faStop);
library.add(faArrowLeft);
library.add(faHeart);
library.add(faCircle);
library.add(faGlobe);
library.add(faChevronDown);
library.add(faChevronLeft);
library.add(faChevronRight);

library.add(faSpotify);
library.add(faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const CUSTOM_ICONS = {
    play: {
        component: FontAwesomeIcon,
        props: {
            icon: ['fas', 'play']
        }
    },
    stop: {
        component: FontAwesomeIcon,
        props: {
            icon: ['fas', 'stop']
        }
    },
    arrowLeft: {
        component: FontAwesomeIcon,
        props: {
            icon: ['fab', 'arrow-left']
        }
    },
    heart: {
        component: FontAwesomeIcon,
        props: {
            icon: ['fab', 'heart']
        }
    },
    circle: {
        component: FontAwesomeIcon,
        props: {
            icon: ['fab', 'circle']
        }
    },
    globe: {
        component: FontAwesomeIcon,
        props: {
            icon: ['fas', 'globe']
        }
    },
    spotify: {
        component: FontAwesomeIcon,
        props: {
            icon: ['fab', 'spotify']
        }
    },
    github: {
        component: FontAwesomeIcon,
        props: {
            icon: ['fab', 'github']
        }
    },
    expand: {
        component: FontAwesomeIcon,
        props: {
            icon: ["fas", "chevron-down"]
        }
    },
    prev: {
        component: FontAwesomeIcon,
        props: {
            icon: ["fas", "chevron-left"]
        }
    },
    next: {
        component: FontAwesomeIcon,
        props: {
            icon: ["fas", "chevron-right"]
        }
    }
};

export { CUSTOM_ICONS }
