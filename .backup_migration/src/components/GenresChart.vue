<template>
    <div class="container">
        <doughnut-chart v-if="loaded" :chart-data="chartData" :options="options"></doughnut-chart>
    </div>
</template>

<script>

    import doughnutChart from "./charts/Doughnut"

    export default {
        name: "GenresChart",
        components: {doughnutChart},
        props: ["loaded", "chartData"],
        data: () => ({
            options: {responsive: true, maintainAspectRatio: false}
        })
    }
</script>

<style scoped>

</style>