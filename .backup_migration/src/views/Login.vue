<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <div class="my-2">
                <v-btn large color="success" @click="login">Login with
                    <font-awesome-icon :icon="['fab', 'spotify']" size="lg" pull="right"></font-awesome-icon>
                </v-btn>
            </div>
        </v-layout>
    </v-container>
</template>

<script>

    import handle from "../assets/js/Vue/login/handle"

    export default {
        data: () => ({}),
        methods: {
            login: function () {
                handle.login();
            }
        }
    }
</script>

<style scoped>

</style>