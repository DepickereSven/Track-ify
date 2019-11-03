<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center column>
            <v-expansion-panels class="list">
                <v-expansion-panel>
                    <v-expansion-panel-header @click="redrawChart">Top 10 Genres</v-expansion-panel-header>
                    <v-expansion-panel-content v-show="chartDraw">
                        <Genres :loaded="loaded" :chart-data="genresChart"></Genres>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-list rounded class="list">
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item v-for="(item, i) in data" :key="i">
                        <v-list-item-avatar tile>
                            <img :src="item.album.images[item.album.images.length -1].url" :alt="item.album.images[item.album.images.length -1].value"/>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.name"></v-list-item-title>
                            <v-list-item-subtitle>
                                <ArtistsList class="artists" :artists="item.artists"></ArtistsList>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action @click="play(item)">
                            <font-awesome-icon :icon="['fas', 'play']" size="lg" pull="right"></font-awesome-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-layout>
    </v-container>
</template>

<script>


    import handle from "../assets/js/Vue/home/handle"
    import ArtistsList from "../components/ArtistsList"
    import Genres from "../components/Genres"


    export default {
        created: function () {
            handle.init(this);
        },
        components: {
            ArtistsList,
            Genres
        },
        data: () => ({
            item: 1,
            audio: null,
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
            }
        }),
        methods: {
            play: function (arg){
                if (this.audio !== null){
                    this.audio.pause();
                }
                this.audio = new Audio(arg.preview_url);
                this.audio.play();
            },
            redrawChart: function () {
                console.log(this.chartDraw, "before");
                this.chartDraw = !this.chartDraw;
                console.log(this.chartDraw, "after");
            }
        }

    }
</script>

<style scoped>

    #inspire .list{
        max-width: 50%;
    }

    #inspire .artists{
        display: flex;
    }

</style>
