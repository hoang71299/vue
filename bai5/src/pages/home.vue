<template>
  <h1>Overview page</h1>
  <input type="text" v-model="searchText">
  <ul>
    <li v-for="(customer, index) in customersFilled" :key="index">
      {{ customer }}
    </li>
  </ul>
  <!-- <p>{{ secondName }}</p>
  <p>{{ car }}</p> -->
  <!-- <button @click="onChangeSomeThing">Click me</button> -->
</template>
<script>
import { ref, reactive, computed,watch,watchEffect } from 'vue'
export default {

  setup() {
    const firstName = ref("sky on berth");
    const searchText = ref("")
    const secondName = ref({
      name: "Hu",
      something: "Ha"
    })
    // let car = reactive({
    //   price: 10000,
    //   name: "Mec"
    // })
    const customers = reactive(["Something", "Tran Toan", "Hula"])
    console.log(secondName);
    // console.log(car);
    // function onChangeSomeThing() {
    //   // console.log("running here....");
    //   // // firstName = "Tran Toan"
    //   // console.log(secondName);
    //   // console.log(car);
    //   // car.price = 200000;
    //   // // secondName.value.name = "Hihi"
    //   // firstName.value = "Tran Toan"
    //   secondName.value = {
    //     name: "Tran Toan",
    //     something: "Sharing"
    //   }
    //   car = {
    //     price: 20000,
    //     name: "SomeThing"
    //   }
    // }
    const customersFilled = computed(() => customers.map((customers) => {
      customers = customers.toLowerCase();
      console.log(customers);
      return customers
    }).filter(customer => customer.includes(searchText.value)))
    // console.log(customersFilled);

    watch(searchText,(newValue,oldValue)=>{
      console.log(newValue,oldValue);
    })

    watchEffect(()=>{
      if(searchText.value){
        console.log("runing again");
      }
    })

    return { searchText, customersFilled }
  }
}
</script>
