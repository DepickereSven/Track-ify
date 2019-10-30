<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>

        </v-layout>
    </v-container>
</template>

<script>

    import handle from "../assets/js/Vue/confirm/handle"

    export default {
        created: function () {
            handle.init(this);
        },
        data: () => ({}),
        methods: {}
    }
</script>

<style scoped>

</style>
