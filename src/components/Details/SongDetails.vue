<template>
    <v-card class="card-v">
        <div class="s-row">
            <div class="column first">

                <v-card-title class="display-2 font-weight-light">
                    <div class="s-row" id="spanText">
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
                        <v-img :src="album.images[0].url"></v-img>
                    </v-list-item-avatar>

                </v-list-item>

                <v-list rounded>
                    <v-list-item-group color="primary">
                        <v-list-item v-for="(song, i) in album.tracks.items" :key="i" @click="play(song)">

                            <v-list-item-avatar tile>
                                {{i + 1}}
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title v-text="song.name"></v-list-item-title>
                                <v-list-item-subtitle>
                                    <ArtistsList class="artists" :artists="song.artists"></ArtistsList>
                                </v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action v-if="song.preview_url !== null">
                                <font-awesome-icon :icon="['fas', 'play']" size="lg" pull="right"></font-awesome-icon>
                            </v-list-item-action>

                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                <OtherArtists v-if="needToShowSmallBreakpoints" :other-artists="otherArtists"></OtherArtists>
            </div>

            <div class="column second">
                <v-img :src="artists[0].images[0].url"></v-img>
                <OtherArtists v-if="!needToShowSmallBreakpoints" :other-artists="otherArtists"></OtherArtists>
            </div>
        </div>
    </v-card>
</template>

<script>

    import Genres from "../Genres"
    import ArtistsList from "../ArtistsList"
    import OtherArtists from "./OtherArtists"

    export default {
        name: "SongDetails",
        props: ["artists", "album", "songDetails", "otherArtists"],
        components: {
            Genres,
            ArtistsList,
            OtherArtists
        },
        methods: {
            play: function (arg) {
                if (arg.preview_url !== null) {
                    this.$emit("play", arg);
                }
            }
        },
        computed: {
            formatNumbers: function () {
                return this.$props.artists[0].followers.total.toLocaleString(
                    undefined,
                    {minimumFractionDigits: 0}
                );
            },
            needToShowSmallBreakpoints() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                    case 'sm':
                        return true;
                    case 'md':
                    case 'lg':
                    case 'xl':
                        return false;
                }
            }
        }
    }


</script>

<style scoped>


    .card-v .s-row {
        justify-content: space-between;
        width: 100%;
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

    @media only screen and (max-width: 800px){

        #inspire .detailsWidth .s-row{
            display: flex;
            flex-direction: column-reverse;
        }

        #inspire .card-v .s-row .column.second,
        .card-v .s-row .column.first{
            padding-right: 0;
            padding-left: 0;
            align-self: center;
            display: flex;
            flex-direction: column;
        }

        #inspire .card-v .s-row .column.second{
            width: 100%;
            margin-bottom: 35px;
            margin-top: 35px;
        }

        #inspire .card-v .s-row .column.second .v-image{
            width: 60%;
            align-self: center;
        }

        #inspire .card-v .s-row .column.first{
            width: 50%;
        }

        #inspire .card-v .s-row .column.first #spanText{
            display: flex;
            flex-direction: row;
        }
    }

</style>
