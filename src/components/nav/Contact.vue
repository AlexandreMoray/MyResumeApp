<template>
    <NavContainer :title="$t('contact')" :icon="this.bookIcon">
        <span class="mail" style="font-size: 0.9em">
            <FontAwesomeIcon :icon="this.mailIcon" />
            {{this.contact.email}}
        </span>
        <span class="phone">
            <FontAwesomeIcon :icon="this.phoneIcon" />
            {{this.contact.phone}}
        </span>
        <span class="linkedin">
            <a :href="this.contact.linkedin" target="_blank">
            <FontAwesomeIcon :icon="this.linkedinIcon" />
                Linkedin
            </a>
        </span>
        <span class="github">
            <a :href="this.contact.github" target="_blank">
            <FontAwesomeIcon :icon="this.githubIcon" />
                Github
            </a>
        </span>
    </NavContainer>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import {faGithub, faLinkedin} from "@fortawesome/fontawesome-free-brands";
    import {faPhone, faEnvelope, faAddressBook} from "@fortawesome/free-solid-svg-icons";
    import CONTACT from "../../data/contact";
    import NavContainer from "./NavContainer";

    export default {
        name: "Contact",
        components: {
            NavContainer,
            FontAwesomeIcon
        },
        data() {
            return({
                contact: CONTACT,
                bookIcon: faAddressBook,
                mailIcon: faEnvelope,
                phoneIcon: faPhone,
                githubIcon: faGithub,
                linkedinIcon: faLinkedin
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
