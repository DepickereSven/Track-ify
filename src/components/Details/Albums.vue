<template>
    <v-sheet class="mx-auto" elevation="8">
        <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-item v-for="(albums, n) in allAlbumInfo" :key="n" v-slot:default="{ active, toggle }">
                <v-card class="ma-4" height="200" width="200" @click="toggle">
                    <v-row class="fill-height" align="center" justify="center">
                        <v-scale-transition>
                            <v-img :src="albums.images[0].url" contain></v-img>
                        </v-scale-transition>
                    </v-row>
                </v-card>
            </v-slide-item>
        </v-slide-group>

        <v-expand-transition>
            <v-sheet v-if="model != null" color="grey lighten-4" height="300" tile>
                <div class="fill-height" align="center" justify="center">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="overline">{{allAlbumInfo[model].album_type}} - {{allAlbumInfo[model].release_date}}</div>
                            <v-list-item-title class="title">{{allAlbumInfo[model].name}}</v-list-item-title>
                            <v-list-item-subtitle>Number of Songs: {{allAlbumInfo[model].total_tracks}}</v-list-item-subtitle>
                            <NationFlags :flags="allAlbumInfo[model].available_markets"></NationFlags>

                            <v-list-item-action class="see-album-details">
                                <v-btn :class="styleButton" x-large rounded @click="showAlbum">
                                    See songs of {{allAlbumInfo[model].name}} ~ {{allAlbumInfo[model].album_type}}
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-sheet>
        </v-expand-transition>
    </v-sheet>
</template>

<script>

    import NationFlags from "./NationFlags"

    export default {
        name: "Albums",
        props: ["allAlbumInfo"],
        created: function () {

        },
        components: {
            NationFlags
        },
        data: () => ({
            model: null,
        }),
        methods: {
            showAlbum: function () {
                this.$emit("showAlbum", this.$props.allAlbumInfo[this.model].id)
            }
        },
        computed: {
            styleButton: function () {
                if (this.$props.allAlbumInfo[this.model].name.length > 40){
                    return "small-text";
                } else {
                    return "text-button";
                }
            }
        }
    }
</script>

<style scoped>

    #inspire .v-responsive {
        position: inherit;
    }

    #inspire .mx-auto .fill-height {
        text-align: center;
    }

    #inspire .see-album-details {
        justify-content: center;
        margin-left: 0px !important;
        padding-top: 1%;
    }

    #inspire .small-text{
        font-size: 0.7rem;
    }

    @media only screen and (max-width: 800px) {

        #inspire .v-application--wrap .container .layout .mx-auto{
            width: 50%;
        }

        #inspire .small-text,
        #inspire .text-button{
            height: 30px;
            padding: 0 7px;
        }

        #inspire .small-text{
            font-size: 1.5vh;
        }

        #inspire .text-button{
            font-size: 1.5vh;
        }

        #inspire .v-list-item__content .title{
            font-size: 3vh !important;
        }

    }

</style>
