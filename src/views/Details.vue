<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-card class="card-v">

                <div class="s-row">
                    <div class="column first">
                        <v-card-title class="display-2 font-weight-light">
                            <div class="s-row">
                                {{artists[0].name}}
                                <v-chip class="ma-2" color="indigo" text-color="white">
                                    <v-avatar left>
                                        <font-awesome-icon :icon="['fas', 'heart']" size="3x"></font-awesome-icon>
                                    </v-avatar>
                                    {{formatNumbers}}
                                </v-chip>
                            </div>
                        </v-card-title>
                        <v-card-subtitle class="">
                            <Genres :genres="artists[0].genres"></Genres>
                        </v-card-subtitle>

                        <v-list-item class="album-details">

                            <v-list-item-avatar tile></v-list-item-avatar>

                            <v-list-item-content>
                                <div class="overline">{{album.album_type}} - {{album.release_date}}</div>
                                <v-list-item-title class="headline mb-1">{{album.name}}</v-list-item-title>
                                <v-list-item-subtitle>Number of Songs: {{album.total_tracks}}</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-avatar tile size="80">
                                <v-img :src="songDetails.album.images[0].url"></v-img>
                            </v-list-item-avatar>

                        </v-list-item>

                        <v-list rounded>
                            <v-list-item-group color="primary">
                                <v-list-item v-for="(song, i) in album.tracks.items" :key="i">

                                    <v-list-item-avatar tile>
                                        {{i + 1}}
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="song.name"></v-list-item-title>
                                        <v-list-item-subtitle>
                                            <ArtistsList class="artists" :artists="song.artists"></ArtistsList>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action @click="play(song)">
                                        <font-awesome-icon :icon="['fas', 'play']" size="lg" pull="right"></font-awesome-icon>
                                    </v-list-item-action>

                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </div>

                    <div class="column second">
                        <v-img :src="artists[0].images[0].url"></v-img>
                    </div>
                </div>
            </v-card>

            <audio :src="currentSong.current" @timeupdate="currentSong.time = $event.target.currentTime" ref="audio" @ended="musicEnded" autoload preload="auto" autoplay></audio>
            <MusicPlayer :current-song="currentSong" :time="currentSong.time" @stop="stopMusic"></MusicPlayer>

        </v-layout>
    </v-container>
</template>

<script>

    import handle from "../assets/js/Vue/details/handle"
    import Genres from "../components/Genres"
    import ArtistsList from "../components/ArtistsList"
    import MusicPlayer from "../components/MusicPlayer"

    export default {
        created: function () {
            handle.init(this);
        },
        components: {
            Genres,
            ArtistsList,
            MusicPlayer
        },
        props: ["songDetails", "artists"],
        data: () => ({
            album: null,
            allAlbumInfo: null,
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
            }
        },
        computed: {
            formatNumbers: function () {
                return this.$props.artists[0].followers.total.toLocaleString(
                    undefined,
                    {minimumFractionDigits: 0}
                );
            }
        }
    }
</script>

<style scoped>

    .card-v {
        width: 70%;
    }

    .card-v .s-row{
        justify-content: space-between;
    }

    .card-v .s-row .column.first {
        width: 65%;
        padding-right: 4%;
        padding-left: 2%;
    }

    .card-v .s-row .column.second {
        width: 35%;
        max-width: 350px;
    }

    .card-v .s-row .column.first .s-row {
        justify-content: space-between;
    }

    .card-v .s-row .column.first .s-row.album-details {
        padding-top: 5%;
        padding-left: 16px;
    }

</style>