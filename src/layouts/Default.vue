<template>
    <v-app id="inspire">
        <v-app-bar color="success accent-4" dark>

            <v-toolbar-title>Spotify Analytics</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>
        <v-content>
            <slot></slot>
        </v-content>
    </v-app>
</template>


<style scoped>

    #inspire .v-toolbar {
        flex: 0 0;
    }

</style>