<template>
  <div :class="{ unmatched: unmatched }">
    <div id="parallax-container">
      <div id="banner-title" v-if="this.title">
        <h1>{{ title }}</h1>
      </div>
      <img id="banner-img" ref="parallaxImg" :src="this.image" />
    </div>
  </div>
</template>

<script>
  import SimpleParallax from "simple-parallax-js";

export default {
  name: 'ParallaxWrapper',
  components: {},
  props: {
    title: String,
    imageName: String,
  },
  data() {
    return {
      image: require('../../assets/' + this.imageName),
      parallax: null,
      unmatched: false
    }
  },
  mounted() {
    const image = this.$refs["parallaxImg"];
    this.parallax = new SimpleParallax(image, {
      orientation: 'up',
      scale: 2.5,
      delay: 0.1
    })
  },
  beforeDestroy() {
    if (this.parallax) {
      this.parallax.destroy()
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "src/style/constants";

  #parallax-container {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
  }

  #banner-img {
    width: 100vw;
    max-width: 100%;
    object-position: center;
    object-fit: cover;
    height: 250px;
  }

  #banner-title {
    position: absolute;
    z-index: 1;
    font-family: 'Pacifico';
    color: white;
    font-size: 2em;
  }
</style>
