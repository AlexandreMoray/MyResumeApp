<template>
    <div id="mobile-toggle" @click="toggle()">
        <FontAwesomeIcon :icon="toggled? toggleIconOn : toggleIconOff"/>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";

    export default {
        name: "MobileToggle",
        props: {
            toggled: Boolean
        },
        components: {
            FontAwesomeIcon
        },
        data() {
            return {
                toggleIconOn: faTimes,
                toggleIconOff: faPlus
            }
        },
        methods: {
            toggle() {
                this.$emit("toggle", this.toggled);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    #mobile-toggle {
        cursor: pointer;
        font-size: 2em;

        svg {
            border-radius: 100%;
        }
    }
</style>
