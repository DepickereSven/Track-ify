<template>
    <div id="app">
        <v-app id="inspire">
            <div>
                <v-app-bar color="success accent-4" dark>

                    <v-toolbar-title>Spotify Analytics</v-toolbar-title>

                    <v-spacer></v-spacer>
                </v-app-bar>
                <slot></slot>
            </div>
        </v-app>
    </div>
</template>
