<template>
    <div id="resume-content">

        <!-- About me section -->
        <div id="about" class="section-container">
            <SectionTitle :title="$t('about')" />
            <p v-for="(paragraph, i) in $t('presentation')" :key="`paragraph${i}`">
                {{paragraph}}
            </p>
        </div>

        <!-- Skills Information -->
        <CategoryTitle id="skills" :title="$t('skills')" :icon="this.skillsIcon"/>
        <div class="section-container" v-for="skillSection in skills" :key="skillSection.titleKey">
            <SectionTitle :title="$t('skillSections')[skillSection.titleKey]"/>
            <SkillPin
                    v-for="skill in skillSection.list" :key="skill.name"
                    :title="skill.name"
                    :version="skill.version"
                    :level="skill.level"
                    :logoName="skill.logo"
            />
        </div>

        <!-- Experience Information -->
        <CategoryTitle id="experience" :title="$t('experience')" :icon="this.experienceIcon"/>
        <ExperienceCard
                v-for="item in $t('experiences')" :key="item.name"
                :title="item.title"
                :company="item.company"
                :date="item.date"
                :location="item.location"
                :description="item.description"
                :logo="item.logo">
        </ExperienceCard>

        <!-- Education Information -->
        <CategoryTitle id="education" :title="$t('education')" :icon="this.educationIcon"/>
        <ExperienceCard
                v-for="item in $t('educations')" :key="item.name"
                :title="item.title"
                :company="item.company"
                :date="item.date"
                :location="item.location"
                :description="item.description"
                :logo="item.logo">
        </ExperienceCard>

        <!-- Certifications -->
        <CategoryTitle id="certifications" :title="$t('certifications')" :icon="this.experienceIcon"/>
        <ExperienceCard
                v-for="item in $t('certifs')" :key="item.name"
                :title="item.title"
                :company="item.company"
                :date="item.date"
                :location="item.location"
                :description="item.description"
                :logo="item.logo">
        </ExperienceCard>

        <!-- Soft Skills -->
        <div class="section-container">
            <SectionTitle :title="$t('soft')" />
            <SkillPin
                    v-for="skill in $t('softSkills')" :key="skill.name"
                    :title="skill.name"
            />
        </div>
    </div>
</template>

<script>
    import ExperienceCard from "../containers/ExperienceCard";
    import CategoryTitle from "../title/CategoryTitle";
    import SkillPin from "../containers/SkillPin";
    import SectionTitle from "../title/SectionTitle";
    import {faBriefcase, faGraduationCap, faCertificate } from "@fortawesome/free-solid-svg-icons";
    import SKILLS from "../../data/skills";

    export default {
        name: "ResumeContent",
        components: {
            SectionTitle,
            SkillPin,
            CategoryTitle,
            ExperienceCard,
        },
        data() {
            return {
                myName: "Alexandre Moray",
                skills: SKILLS,
                experienceIcon: faBriefcase,
                educationIcon: faGraduationCap,
                skillsIcon: faCertificate,
            };
        },
    }
</script>

<style scoped lang="scss">
    @import "../../style/constants";

    #resume-content {
        width: 70%;
        box-sizing: border-box;
        padding: 30px 30px 50px 50px;

        .section-container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            background-color: rgba($main-darker, 0.6);
            box-shadow: inset 2px 2px 5px $main-darker;
            border-radius: 20px;
            padding: 10px 20px;
            margin: 20px 0px;

            p {
                color: $main-font;
                text-align: justify;
            }
        }
    }

    @media screen and (max-width: 760px) {
        #resume-content {
            width: 100%;
            padding: 0px;
        }
    }
</style>
