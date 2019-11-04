<template>
    <div id="spanText">
        <div v-if="artists.length === 1">
            <span>{{artists[0].name}}</span>
        </div>
        <div v-else v-for="(artist, i) in artists">
            <span class="whitespace" v-if="artists.length > i + 1">{{artist.name}},</span>
            <span v-else>{{artist.name}}</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ArtistsList",
        props: ["artists"]
    }


</script>

<style scoped>



</style>