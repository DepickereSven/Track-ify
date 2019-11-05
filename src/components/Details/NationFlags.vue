<template>
    <div>
        <v-list-item-subtitle class="">{{nationMessage}}</v-list-item-subtitle>
        <v-dialog v-model="dialog" persistent max-width="350">
            <template v-slot:activator="{ on }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on" @click="dialog = true">
                            <font-awesome-icon :icon="['fas', 'globe']" size="lg"></font-awesome-icon>
                        </v-btn>
                    </template>
                    <span>See which {{nationsOrNation}}</span>
                </v-tooltip>
            </template>
            <v-card>

                <!-- TODO add nation flags by globe chart -->
<!--                <div class="flags">-->
<!--                    <template v-for="flag in flags">-->
<!--                        <v-img height="120" width="160" :src="require('../../assets/images/flags/' + flag.toLowerCase() + '.svg')"></v-img>-->
<!--                    </template>-->
<!--                </div>-->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "Nations",
        props: ["flags"],
        data: () => ({
            dialog: false,
        }),
        computed: {
            nationMessage: function () {
                return `This album is available in ${this.$props.flags.length} ${this.nationsOrNation}.`
            },
            nationsOrNation: function () {
                return this.$props.flags.length === 1 ? "nation" : "nations"
            }
        }
    }
</script>

<style scoped>

    #inspire .flags{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

</style>