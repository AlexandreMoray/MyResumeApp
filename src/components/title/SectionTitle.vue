<template>
    <div class="section">
        <span>
            <FontAwesomeIcon v-if="this.icon" :icon="this.icon" />
            {{this.title}}
        </span>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

    export default {
        name: "SectionTitle",
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

    .section {
        width: 100%;
        font-size: 1.8em;
        margin-bottom: 10px;
        padding: 5px;
        color: $main-yellow;
        text-transform: capitalize;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid $main-darker;

        span {
            z-index: 1;
            opacity: 0.9;
        }
        svg {
            margin-right: 5px;
        }
    }
</style>
