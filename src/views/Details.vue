<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-card class="card-v">
<!--                <v-card-subtitle>-->
<!--                    <v-tooltip bottom>-->
<!--                        <template v-slot:activator="{ on }">-->
<!--                            <font-awesome-icon :icon="['fas', 'arrow-left']" size="lg" pull="left" v-on="on"></font-awesome-icon>-->
<!--                        </template>-->
<!--                        <span>Go to overview</span>-->
<!--                    </v-tooltip>-->
<!--                </v-card-subtitle>-->

                <div class="row">
                    <div class="column first">
                        <v-card-title class="display-2 font-weight-light">
                            {{artists[0].name}}
                        </v-card-title>
                        <v-card-subtitle class="">

                        </v-card-subtitle>


                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline mb-4">OVERLINE</div>
                                <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                            <v-btn text>Button</v-btn>
                            <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </div>
                    <div class="column second">
                        <v-img :src="artists[0].images[0].url"></v-img>
                    </div>
                </div>

            </v-card>
        </v-layout>
    </v-container>
</template>

<script>

    import handle from "../assets/js/Vue/details/handle"

    export default {
        created: function () {
            handle.init(this);
        },
        // props: ["songDetails", "artists"],
        data: () => ({
            songDetails: null,
            artists: null
        })
    }
</script>

<style scoped>

    .card-v{
        width: 70%;
    }

    .card-v .row .column.first{
        width: 65%;
        padding-right: 4%;
        padding-left: 2%;
    }

    .card-v .row .column.second{
        width: 35%;
    }

</style>