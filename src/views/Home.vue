<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center column>

            <v-list rounded class="list">

                    <v-tabs v-model="tabModel">
                        <v-tab v-for="(item, i) in period" :key="i" @click="refreshDetails(item)">{{item.name}}</v-tab>
                    </v-tabs>

                <v-expansion-panels class="main-list">
                    <v-expansion-panel>
                        <v-expansion-panel-header @click="redrawChart">Top 10 Genres</v-expansion-panel-header>
                        <v-expansion-panel-content v-if="chartDraw">
                            <GenresChart :loaded="loaded" :chart-data="genresChart"></GenresChart>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-list-item-group color="primary" class="main-list">
                    <v-list-item v-for="(item, i) in data" :key="i">
                        <v-list-item-avatar tile @click="details(item)">
                            <img :src="item.album.images[item.album.images.length -1].url" :alt="item.album.images[item.album.images.length -1].value"/>
                        </v-list-item-avatar>
                        <v-list-item-content @click="details(item)">
                            <v-list-item-title v-text="item.name"></v-list-item-title>
                            <v-list-item-subtitle>
                                <ArtistsList class="artists" :artists="item.artists"></ArtistsList>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action @click="play(item)" v-if="item.preview_url">
                            <font-awesome-icon :icon="['fas', 'play']" size="lg" pull="right"></font-awesome-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <audio :src="currentSong.current" @timeupdate="currentSong.time = $event.target.currentTime" ref="audio" @ended="musicEnded" autoload preload="auto" autoplay></audio>
            <MusicPlayer :current-song="currentSong" :time="currentSong.time" @stop="stopMusic"></MusicPlayer>

        </v-layout>
    </v-container>
</template>

<script>


    import handle from "../assets/js/Vue/home/handle"
    import ArtistsList from "../components/ArtistsList"
    import GenresChart from "../components/GenresChart"
    import MusicPlayer from "../components/MusicPlayer"

    export default {
        created: function () {
            handle.init(this);
        },
        components: {
            ArtistsList,
            GenresChart,
            MusicPlayer
        },
        data: () => ({
            tabModel: 2,
            period: [
                {
                    name: 'All Time',
                    time_range: "long_term"
                },
                {
                    name: 'Last 6 months',
                    time_range: "medium_term"
                },
                {
                    name: 'Last 4 weeks',
                    time_range: "short_term"
                }
            ],

            data: [],
            artists: [],
            genres: [],
            loaded: false,
            chartDraw: false,
            genresChart: {
                labels: [],
                datasets: [{
                    backgroundColor: [],
                    borderWidth: 0,
                    data: []
                }]
            },
            currentSong: {
                isPlaying: false,
                title: null,
                artists: [],
                time: 0,
                current: null
            }
        }),
        methods: {
            details: function (arg) {
                handle.navigateToDetails(this, arg);
            },
            refreshDetails: function (arg){
                handle.init(this, arg.time_range);
            },
            play: function (arg) {
                if (arg.preview_url !== null){
                    if (this.currentSong.isPlaying) {
                        this.stopMusic();
                        this.startMusic(arg);
                    } else {
                        this.startMusic(arg);
                    }
                }
            },
            startMusic: function (arg) {
                this.currentSong.isPlaying = true;
                this.currentSong.current = arg.preview_url;
                this.currentSong.title = arg.name;
                this.currentSong.artists = arg.artists;
                console.log((this.currentSong.current));
            },
            stopMusic: function () {
                this.$refs.audio.pause();
                this.currentSong.current = null;
                this.musicEnded();
            },
            musicEnded: function () {
                this.currentSong.isPlaying = false;
            },
            redrawChart: function () {
                this.chartDraw = !this.chartDraw;
            },

        },
        watch: {
            time(time) {
                if (Math.abs(time - this.$refs.audio.currentTime) > 0.5) {
                    this.$refs.audio.currentTime = time;
                }
            }
        },

    }
</script>

<style scoped>

    #inspire .list {
        max-width: 50%;
        min-width: 380px;
    }

    #inspire .main-list{
        margin-top: 4%;
    }

</style>
