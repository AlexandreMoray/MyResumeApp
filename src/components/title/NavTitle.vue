<template>
    <div class="nav">
        <div class="title">
            <FontAwesomeIcon v-if="this.icon" :icon="this.icon" />
            {{this.title}}
        </div>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

    export default {
        name: "NavTitle",
        components: {
            FontAwesomeIcon
        },
        props: {
            title: String,
            icon: Object
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    .nav {
        margin-bottom: 10px;
        width: 100%;
        color: $main-light;
        //border-top: 4px solid rgba($main-dark, 0.7);
        display: flex;
        justify-content: start;
        //box-shadow: inset 0px 4px 5px -5px $main-darker;
    }

    .title {
        padding: 10px;
        border-radius:  0px 6px 6px 0;
        background-color: rgba($main-dark, 0.9);
        box-shadow: 2px 2px 4px -3px $main-darker;

    }

</style>
