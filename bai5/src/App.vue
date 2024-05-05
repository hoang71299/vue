<template>
  <h1>Hello Dom</h1>
  <base-nav/>
  <router-view/>
</template>
<script>
import BaseNav from './components/Nav.vue';
export default {
  name: "App",
  components: {
    BaseNav
  },
  // created() {
  //   console.log(document.querySelector("h1"));
  // },
  // mounted() {
  //   console.log(document.querySelector("h1"));
  // },
};
</script>
