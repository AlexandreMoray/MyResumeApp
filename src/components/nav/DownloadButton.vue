<template>
    <a id="dl-button" href="/resume-v1.pdf" download="AlexandreMorayResume">
        <FontAwesomeIcon :icon="downlaodIcon"/>
        {{$t('download')}}
    </a>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
    import {faDownload} from "@fortawesome/free-solid-svg-icons"
    export default {
        name: "DownloadButton",
        components: {
            FontAwesomeIcon
        },
        data() {
            return {
                downlaodIcon: faDownload
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/constants";

    #dl-button {
        height: 20px;
        color: $main-yellow;
        border: 1px solid $main-yellow;
        border-radius: 6px;
        padding: 6px;
    }
</style>
