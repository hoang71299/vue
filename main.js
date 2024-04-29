const app = Vue.createApp({
  template: `<h1> Hello from {{teamName}} and {{!isHello ? firstName + " "+ lastName : ""}}</h1>
          <button v-on:click="onChangeName">Change Name</button>
          <button @click="onChangeName">Change Name 2</button>
          <div class="model" v-if="isShowModal">
            <h1>Modal content</h1>
          </div>`,
  data() {
    return {
      teamName: "RHP Team",
      firstName: "Toan",
      lastName: "Tran",
      isHello: false,
      isShowModal: false,
    };
  },
  methods: {
    onChangeName() {
      this.firstName = "Sky";
      this.lastName = "Albert";
      this.isShowModal = !this.isShowModal;
    },
  },
});

app.mount("#contact");
