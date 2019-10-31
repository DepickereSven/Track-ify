<template>
    <div class="container">
        <doughnut-chart v-if="loaded" :chartdata="chartData" :options="options"></doughnut-chart>
    </div>
</template>

<script>

    import doughnutChart from "./charts/Doughnut"

    export default {
        name: "Genres",
        components: {doughnutChart},
        props: ["loaded", "chartData"],
        data: () => ({
            options: {responsive: true, maintainAspectRatio: false}
        })
    }
</script>

<style scoped>

</style>