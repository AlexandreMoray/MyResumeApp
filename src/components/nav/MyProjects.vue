<template>
    <NavContainer :title="$t('myProjects')" :icon="this.playIcon">
        <span class="projects">
            <a :href="this.projectsUrls.snake">
            <FontAwesomeIcon :icon="this.snakeIcon" />
                {{ $t('projects.snake')}}
            </a>
        </span>
    </NavContainer>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import {faGamepad, faPlay} from "@fortawesome/free-solid-svg-icons";
    import NavContainer from "./NavContainer";

    export default {
        name: "Contact",
        components: {
            NavContainer,
            FontAwesomeIcon
        },
        data() {
            return({
                playIcon: faPlay,
                snakeIcon: faGamepad,
                projectsUrls: {
                    "snake": process.env.VUE_APP_PROJECT_SNAKE_PATH
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    span {
        padding: 4px 0px;
    }
</style>
