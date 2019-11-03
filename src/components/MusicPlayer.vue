<template>
    <v-bottom-sheet inset v-model="currentSong.isPlaying" hide-overlay persistent>
        <v-card tile>
            <v-progress-linear :value="currentSong.time * 3.33" class="my-0" height="3"></v-progress-linear>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{currentSong.title}}</v-list-item-title>
                        <v-list-item-subtitle>
                            <ArtistsList class="artists" :artists="currentSong.artists"></ArtistsList>
                        </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-spacer></v-spacer>

                    <v-list-item-icon @click="stop">
                        <font-awesome-icon :icon="['fas', 'stop']" size="lg"></font-awesome-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </v-card>
    </v-bottom-sheet>
</template>

<script>

    import ArtistsList from "./ArtistsList"

    export default {
        name: "MusicPlayer",
        props: ['currentSong', 'time'],
        data: () => ({
            timeStamp: 0
        }),
        components: {
            ArtistsList
        },
        methods: {
            stop: function () {
                this.$emit('stop')
            }
        }
    }
</script>

<style scoped>

</style>