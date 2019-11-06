<template>

    <v-list rounded class="s-column" v-if="otherArtists.length !== 0">
        <div class="overline">Other singers from the album</div>
        <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in otherArtists" :key="i">
                <v-list-item-avatar tile>
                    <v-img :src="item.images[item.images.length -1].url"></v-img>
                </v-list-item-avatar>
                <v-list-item-content >
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle>
                        <font-awesome-icon :icon="['fas', 'heart']" size="xs"></font-awesome-icon>
                        {{item.followers.total}}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>

</template>

<script>
    export default {
        name: "OtherArtists",
        props: ["otherArtists"]
    }
</script>

<style scoped>

    #inspire .s-column .overline{
        margin-top: 8%;
        margin-bottom: 5%;
        font-size: 0.7rem !important;
    }

</style>