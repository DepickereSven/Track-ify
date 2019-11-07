<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>

            <v-progress-circular :size="200" :width="10" color="success accent-4" indeterminate></v-progress-circular>

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