<template>
    <div class="nav-container">
        <NavTitle :title="this.title" :icon="this.icon" />
        <div class="nav-section">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import NavTitle from "../title/NavTitle";

    export default {
        name: "navContainer",
        props: {
            title: String,
            icon: Object
        },
        components: {
            NavTitle
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    .nav-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0px;
        font-family: 'Fira Code', monospace;
        overflow: hidden;

        .nav-section {
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

        }
    }
</style>
