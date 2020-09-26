<template>
  <div class="resume">

    <!-- Resume Header -->
    <div id="header">
      <ParallaxWrapper id="parallax" image-name="coding-background.jpg"/>
      <div class="title">
        <img class="picture" src="../assets/squaredMe.jpg"/>
        <span class="name">{{myName}}</span>
      </div>
      <div id="mobile-toggle-container">
        <MobileToggle v-on:toggle="toggling" :toggled="this.mobileToggled"/>
      </div>
    </div>

    <div id="content" v-bind:class="{toggledInMobile: this.mobileToggled}">
      <!-- Side Bar Content -->
      <div id="side-bar">
        <span>
          <DownloadButton />
          <LanguageSelector />
        </span>
        <Contact />
        <SpeakingLanguages />
        <Navigate :toggling="toggling"/>
        <div class="more"></div>
      </div>
      <!-- Main Content -->
      <ResumeContent/>
    </div>

  </div>
</template>

<script>
  import ParallaxWrapper from "../components/wrapper/ParallaxWrapper";
  import Contact from "../components/nav/Contact";
  import SpeakingLanguages from "../components/nav/SpeakingLanguages";
  import LanguageSelector from "../components/nav/LanguageSelector";
  import Navigate from "../components/nav/Navigate";
  import ResumeContent from "../components/resume-content/ResumeContent";
  import MobileToggle from "../components/nav/MobileToggle";
  import DownloadButton from "../components/nav/DownloadButton";

  export default {
    name: 'Resume',
    components: {
      DownloadButton,
      MobileToggle,
      ResumeContent,
      Navigate,
      LanguageSelector,
      SpeakingLanguages,
      Contact,
      ParallaxWrapper,
    },
    data() {
      return {
        myName: "Alexandre Moray",
        mobileToggled: false,
      };
    },
    methods: {
      toggling(event) {
        console.log(event);
        this.mobileToggled = !this.mobileToggled;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/constants";

  $header-height: 250px;
  $picture-size: 150px;
  $header-offset: 15px;

  #header {
    height: $header-height;
    width: 100%;
    background-color: $main-grey;
    box-shadow: 0px 2px 6px $main-darker;

    .title {
      position: absolute;
      z-index: 100;
      color: $main-font;
      line-height: 2.5em;
      text-shadow: 2px 2px 2px $main-darker;
      top: $header-height - $picture-size;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;

      .picture {
        width: $picture-size;
        height: $picture-size;
        border-radius: 100%;
        box-sizing: border-box;
        border: ($header-offset+1)/2 solid $main-grey;
      }
      .name {
        font-size: 3em;
        color: $main-light;
        margin-bottom: $header-offset;
        padding: 10px;
      }
    }

    #parallax {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: $header-height - $header-offset;
      opacity: 0.75;
      z-index: 0;
    }

    #mobile-toggle-container {
      width: 30px;
      height: 30px;
      background-color: $main-grey;
      border: 1px solid $main-yellow;
      color: $main-yellow;
      border-radius: 100%;
      z-index: 5000;
      display: none;
      position: fixed;
      justify-content: center;
      align-items: center;
      top: 20px;
      right: 6%;
      padding: 5px;
    }
  }

  #content {
    width: 100%;
    height: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
    display: flex;
    justify-content: stretch;
    align-items: stretch;

    #side-bar {
      background-color: $main-grey;
      box-shadow: 6px 20px 6px -3px $main-darker;
      box-sizing: border-box;
      width: 30%;
      height: 100vh;
      padding: 20px 0px;
      color: $main-font;
      position: -webkit-sticky;
      position: sticky;
      top: 1px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      span {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }

  @media screen and (max-width: 1260px) {
    #content {
      padding: 0 5vw;
    }
  }
  @media screen and (max-width: 760px) {
    #content #side-bar{
      display: none;
    }
    #content.toggledInMobile {
      flex-direction: column;
      #side-bar {
        display: inherit;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        box-shadow: none;
        width: 100%;
      }
      #resume-content {
        display: none;
      }
    }
    #header #mobile-toggle-container {
      display: flex;
    }
  }
</style>
