<template>
    <div id="spanText">
        <div v-if="genres.length === 1">
            <span>{{genres[0]}}</span>
        </div>
        <div v-else v-for="(genre, i) in genres">
            <span class="whitespace" v-if="genres.length > i + 1">{{genre}},</span>
            <span v-else>{{genre}}</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Genres",
        props: ["genres"]
    }

</script>

<style scoped>



</style>