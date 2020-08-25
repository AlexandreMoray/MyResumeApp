<template>
    <div class="experience-card">
        <div class="preview">
            <img :src="this.getImgUrl(this.logo)" />
            <span class="company">
                <FontAwesomeIcon :icon="this.companyIcon"/>
                {{this.company}}
            </span>
        </div>
        <div class="info">
            <div class="title">
                {{this.title}}
            </div>
            <div class="details">
                <span class="location">
                    <FontAwesomeIcon :icon="this.locationIcon"/>
                    {{this.location}}
                </span>
                <span class="date">
                    <FontAwesomeIcon :icon="this.dateIcon"/>
                    {{this.date}}
                </span>
            </div>
            <div class="description">
                <p v-if="typeof this.description === 'string'">
                    {{this.description}}
                </p>
                <p v-else v-for="description in this.description" :key="description">
                    {{description}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
    import {faMapMarkerAlt, faCalendarAlt, faBuilding} from "@fortawesome/free-solid-svg-icons"

    export default {
        name: "ExperienceCard",
        components: {FontAwesomeIcon},
        props: {
            title: String,
            company: String,
            date: String,
            location: String,
            description: [String, Array],
            logo: String,
        },
        data() {
            return({
                locationIcon : faMapMarkerAlt,
                dateIcon: faCalendarAlt,
                companyIcon: faBuilding
            })
        },
        methods: {
            getImgUrl(pic) {
                return require('../../assets/logos/'+pic);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/style/constants";

    span svg {
        margin-right: 5px;
    }

    .experience-card {
        display: flex;
        padding: 20px;
        margin: 20px 0px;
        border-radius: 8px;
        background-color: rgba($main-grey, 0.2);
        box-shadow: 1px 1px 4px $main-darker;

        .preview {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            margin-right: 20px;

            img {
                width: 100px;
                height: 100px;
            }
            .company {
                width: 100%;
                font-size: 0.9em;
                line-height: 1.1em;
                opacity: 0.7;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .info {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        .title {
            text-transform: uppercase;
            text-align: center;
            font-size: 1.5em;
            color: $main-font;
            opacity: 0.9;
        }
        .details {
            display: flex;
            justify-content: space-evenly;
            padding: 5px 10px;
            margin:  10px 0px ;
            font-size: 0.9em;
            opacity: 0.7;
            border-top: 1px solid $main-grey;
            border-bottom: 1px solid $main-grey;
        }
        .description {
            text-align: justify;
            color: $main-font;
        }
    }

    @media screen and (max-width: 760px) {
        .experience-card {
            flex-direction: column;
            .preview {
                margin-right: 0;
                margin-bottom: 10px;
                flex-direction: column-reverse;

                .company {
                    margin-bottom: 5px;
                }
            }
        }
    }
</style>
