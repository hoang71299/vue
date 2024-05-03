<template>
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
};
</script>
