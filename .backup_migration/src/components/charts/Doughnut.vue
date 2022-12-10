<script>

    import {Doughnut, mixins } from 'vue-chartjs'

    export default {
        name: "Doughnut",
        extends: Doughnut,
        mixins: [mixins.reactiveProp],
        props: {
            chartData: {
                type: Object,
                default: null
            },
            options: {
                type: Object,
                default: null
            }
        },
        mounted() {
            this.renderChart(this.chartData, this.options)
        },
        watch: {
            chartData () {
                this.$data._chart.update()
            }
        }
    }
</script>