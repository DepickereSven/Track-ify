<template>

    <v-list rounded class="s-column" v-if="otherArtists.length !== 0">
        <div class="overline">Associated with this album:</div>
        <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in otherArtists" :key="i">


                <v-list-item-avatar tile v-if="item.images.length !== 0">
                    <v-img :src="item.images[item.images.length -1].url"></v-img>
                </v-list-item-avatar>
                <v-list-item-avatar tile v-else>

                </v-list-item-avatar>


                <v-list-item-content >
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle>
                        <font-awesome-icon :icon="['fas', 'heart']" size="xs"></font-awesome-icon>
                        {{formatNumbers(item)}}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>

</template>

<script>
    export default {
        name: "OtherArtists",
        props: ["otherArtists"],
        methods: {
            formatNumbers: function (arg) {
                return arg.followers.total.toLocaleString(
                    undefined,
                    {minimumFractionDigits: 0}
                );
            },
        }
    }
</script>

<style scoped>

    #inspire .s-column .overline{
        margin-top: 8%;
        margin-bottom: 5%;
        font-size: 0.7rem !important;
    }

</style>