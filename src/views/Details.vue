<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center class="s-column">

            <div class="detailsWidth s-row">
                <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
                    <v-item v-for="(comp, n) in itemComponents" :key="n" v-slot:default="{ active, toggle }">
                        <div>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn :input-value="active" icon @click="toggle" v-on="on">
                                        <font-awesome-icon :icon="['fas', 'circle']" size="lg"></font-awesome-icon>
                                    </v-btn>
                                </template>
                                <span>{{comp.toolTip}}</span>
                            </v-tooltip>
                        </div>
                    </v-item>
                </v-item-group>

                <v-col>

                    <v-window v-model="window" reverse>

                        <v-window-item v-for="(comp, n) in itemComponents" :key="n">

                            <component :is="comp.name" v-bind="currentProperties(comp)" v-on="currentMethods(comp)"></component>

                        </v-window-item>

                    </v-window>
                </v-col>
            </div>

            <audio :src="currentSong.current" @timeupdate="currentSong.time = $event.target.currentTime" ref="audio" @ended="musicEnded" autoload preload="auto" autoplay></audio>
            <MusicPlayer :current-song="currentSong" :time="currentSong.time" @stop="stopMusic"></MusicPlayer>

        </v-layout>
    </v-container>
</template>

<script>

    import handle from "../assets/js/Vue/details/handle"
    import SongDetails from "../components/Details/SongDetails"
    import Albums from "../components/Details/Albums"
    import MusicPlayer from "../components/MusicPlayer"

    export default {
        created: function () {
            handle.init(this);
        },
        components: {
            SongDetails,
            Albums,
            MusicPlayer
        },
        props: ["songDetails", "artists"],
        data: () => ({
            itemComponents: [
                {
                    name: "SongDetails",
                    toolTip: "Song Details"
                },
                {
                    name: "Albums",
                    toolTip: "All Albums"
                }
            ],
            window: 0,

            otherArtists: [],
            otherArtistsDetails: [],
            album: {
                tracks: {},
                images: [{
                    url: ""
                }]
            },
            allAlbumInfo: {},
            currentSong: {
                isPlaying: false,
                title: null,
                artists: [],
                time: 0,
                current: null
            }
        }),
        methods: {
            play: function (arg) {
                if (this.currentSong.isPlaying) {
                    this.stopMusic();
                    this.startMusic(arg);
                } else {
                    this.startMusic(arg);
                }
            },
            startMusic: function (arg) {
                this.currentSong.isPlaying = true;
                this.currentSong.current = arg.preview_url;
                this.currentSong.title = arg.name;
                this.currentSong.artists = arg.artists;
            },
            stopMusic: function () {
                this.$refs.audio.pause();
                this.currentSong.current = null;
                this.musicEnded();
            },
            musicEnded: function () {
                this.currentSong.isPlaying = false;
            },
            showAlbum: function (id){
                handle.getDetailsAboutAnAlbum(this, id);
            },
            currentProperties: function (comp) {
                switch (comp.name) {
                    case "SongDetails":
                        return {
                            artists: this.$props.artists,
                            album: this.album,
                            songDetails: this.$props.songDetails,
                            otherArtists: this.otherArtistsDetails
                        };
                    case "Albums":
                        return {
                            allAlbumInfo: this.allAlbumInfo
                        };
                }
            },
            currentMethods: function (comp) {
                switch (comp.name) {
                    case "SongDetails":
                        return {play: this.play};
                    case "Albums":
                        return {showAlbum: this.showAlbum};
                }
            }
        }
    }
</script>

<style scoped>


    .detailsWidth {
        width: 70%;
    }
    .detailsWidth.s-row{
        align-items: center;
    }

</style>