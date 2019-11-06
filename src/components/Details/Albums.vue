<template>
    <v-sheet class="mx-auto" elevation="8">
        <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-item v-for="(albums, n) in allAlbumInfo.items" :key="n" v-slot:default="{ active, toggle }">
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
                <v-row class="fill-height" align="center" justify="center">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="overline">{{allAlbumInfo.items[model].album_type}} - {{allAlbumInfo.items[model].release_date}}</div>
                            <v-list-item-title class="title">{{allAlbumInfo.items[model].name}}</v-list-item-title>
                            <v-list-item-subtitle>Number of Songs: {{allAlbumInfo.items[model].total_tracks}}</v-list-item-subtitle>
                            <NationFlags :flags="allAlbumInfo.items[model].available_markets"></NationFlags>

                            <v-list-item-action class="see-album-details">
                                <v-btn class="" x-large rounded @click="showAlbum">
                                    See songs of the {{allAlbumInfo.items[model].name}} ~ {{allAlbumInfo.items[model].album_type}}
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item-content>

                    </v-list-item>

                </v-row>
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
                this.$emit("showAlbum", this.$props.allAlbumInfo.items[this.model].id)
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

    #inspire .see-album-details{
        justify-content: center;
        margin-left: 0px !important;
        padding-top: 1%;
    }

</style>