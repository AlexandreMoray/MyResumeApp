<template>
    <div :class="`skill-pin level${this.level}`">
        <img class="logo"
             v-if="this.logo"
             v-bind:class="{retractable: this.version}"
             :src="this.logo" />
        <span class="name">
            {{this.title}}
        </span>
        <span class="version" v-bind:class="{expandable: this.version}">
            {{this.version}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "SkillPin",
        props: {
            title: String,
            version: String,
            level: Number,
            logoName: String
        },
        data() {
            return({
                logo: this.logoName ? require("../../assets/logos/" + this.logoName) : null
            })
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    .skill-pin {
        height: 25px;
        min-width: 25px;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        background-color: rgba($main-grey, 0.5);
        box-shadow: 2px 2px 5px $main-darker;

        &.level1 {
            background-color: rgba($main-grey, 0.2);
        }
        &.level2 {
            background-color: rgba($main-grey, 0.5);
        }
        &.level3 {
            background-color: rgba($main-grey, 0.8);
            font-weight: bold;
        }

        .logo {
            width: 20px;
            height: 20px;
            margin-right: 5px;
            transition: linear 0.3s;
        }

        .name {
            font-size: 1.2em;
            text-transform: capitalize;
        }

        .version {
            width: 0px;
            margin: 0;
            opacity: 0;
            overflow: hidden;
            transition: linear 0.3s;
        }

        &:hover {
            cursor: pointer;

            .retractable {
                width: 0px;
                height: 0px;
                transform: rotate(180deg);
                margin: 0;
            }
            .expandable {
                width: 20px;
                opacity: 0.7;
                margin-left: 5px;
            }
        }
    }
</style>
