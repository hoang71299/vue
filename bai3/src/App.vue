<template>
  <h1>Hello</h1>
  <base-header ref="header"></base-header>
  <base-modal @cancel="ontoggleModal" v-if="isShowModal" title="this is title" content="this is content" theme="sales">
    <template v-slot:header>
      <h2>This is header
        <head></head>
      </h2>
    </template>
    <label for="">name</label>
    <input type="text">
    <template v-slot:footer>
      <button @click="ontoggleModal">cancel</button>
    </template>
  </base-modal>
  <button @click="ontoggleModal">Toogle Modal</button>
</template>
<script>
import Header from './components/Header.vue';
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    BaseModal: Modal,
    BaseHeader: Header
  },
  data() {
    return {
      isShowModal: false,
      isFinite: 2
    }
  },
  methods: {
    onChange() {
      console.log("runing here");
      console.log(this.$refs.hello);
      console.log(this.$refs.header);
    },
    ontoggleModal() {
      this.isShowModal = !this.isShowModal
    }
  },

}
</script>
