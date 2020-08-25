<template>
    <NavContainer :title="this.$t('speakingLanguages')" :icon="this.flagIcon">
        <div class="language"
             v-for="lang in this.languages" :key="lang.name">
            <div class="top">
                <div>
                    <img :src="lang.logo" />
                    {{$t(lang.name)["name"]}}
                </div>
                <div class="score">{{$t(lang.name)["level"]}}</div>
            </div>
            <div class="progress">
                <span :style="`width: ${lang.score*10}%`"/>
            </div>
        </div>
    </NavContainer>
</template>

<script>
    import NavContainer from "./NavContainer";
    import {faFlag} from "@fortawesome/free-solid-svg-icons"
    import LANGUAGES from "../../data/languages";

    export default {
        name: "SpeakingLanguages",
        components: {NavContainer},
        data() {
            return({
                flagIcon: faFlag,
                languages: LANGUAGES
            })
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    .language {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        text-transform: capitalize;
        padding: 6px 0px;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            div {
                display: flex;
                align-items: center;
            }
            img {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
            }
            .score {
                align-self: flex-end;
            }
        }

        .progress {
            display: flex;
            align-items: center;
            border-radius: 7px;
            height: 7px;
            margin-top: 5px;
            width: 100%;
            background-color: rgba($main-dark, 0.8);

            span {
                background-color: $main-yellow;
                border-radius: 5px;
                height: 5px;
            }
        }
    }
</style>
