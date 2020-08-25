<template>
    <div :id="id" class="category">
        <span>
            <FontAwesomeIcon v-if="this.icon" :icon="this.icon" />
            {{this.title}}
        </span>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

    export default {
        name: "CategoryTitle",
        components: {
            FontAwesomeIcon
        },
        props: {
            title: String,
            icon: Object,
            id: String
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    .category {
        padding-top: 20px;
        font-size: 2em;
        opacity: 0.9;
        border-radius: 1px;
        color: $main-dark;
        text-transform: capitalize;
        border-bottom: 6px solid $main-yellow;
        display: flex;

        span {
            z-index: 1;
            padding: 5px 15px;
            background-color: $main-yellow;
            box-shadow: 0px 2px 1px $main-yellow;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            font-weight: bold;
        }
        svg {
            margin-right: 5px;
        }
    }
</style>
