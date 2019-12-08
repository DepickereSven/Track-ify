<template>
    <v-app id="inspire">
        <v-app-bar color="success accent-4" dark>

            <v-toolbar-title>Track-ify</v-toolbar-title>

            <v-spacer></v-spacer>
            <font-awesome-icon class="mouse-pointer" :icon="['fab', 'github']" size="2x" @click="openGithub"></font-awesome-icon>
        </v-app-bar>
        <v-content>
            <slot></slot>
        </v-content>
    </v-app>
</template>

<script>


    export default {
        methods: {
            openGithub() {
                window.open("https://github.com/DepickereSven/Track-ify" , '_blank')
            }
        }
    }
</script>

<style scoped>

    #inspire .v-toolbar {
        flex: 0 0;
    }

</style>
