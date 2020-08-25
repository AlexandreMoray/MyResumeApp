<template>
    <NavContainer :title="$t('navigate')" :icon="this.navigateIcon">
        <a class="anchor-link"
            v-for="anchor in this.anchors" :key="anchor.id"
            @click="toggling()"
            :href="`#${anchor.id}`">
            <FontAwesomeIcon :icon="linkIcon" />
            {{$t(anchor.id)}}
        </a>
    </NavContainer>
</template>

<script>
    import NavContainer from "./NavContainer";
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import {faEye, faLink} from "@fortawesome/free-solid-svg-icons";

    export default {
        name: "Navigate",
        props: {
            toggling: Function
        },
        components: {
            NavContainer,
            FontAwesomeIcon
        },
        data() {
            return({
                navigateIcon: faEye,
                linkIcon: faLink,
                anchors: [
                    {id: "about"},
                    {id: "skills"},
                    {id: "experience"},
                    {id: "education"}
                ]
            })
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    a {
        text-transform: capitalize;
        padding: 4px 0px;
    }
</style>
