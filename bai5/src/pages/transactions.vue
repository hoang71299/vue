<template>
  <h1>Transactions is here</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id" >
    <router-link :to="{name : 'transaction-details-route',params:{id:transaction.id}}">{{ transaction.name }}</router-link>
    <div class="price">
      price {{ transaction.price }}
    </div>
  </div>
  <!-- <template>
    <div class="item"  v-for="transaction in transactions" :key="transaction.id" >
    <router-link :to="/trasactions/${transaction.id}">{{transaction.name}}</router-link>
  </div>
  </template>
-->
</template>

<script>
export default {
  

  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "đi siêu thị 17/5",
          price: 1000000
        },
        {
          id: 2,
          name: "Thanh toán tiền nhà",
          price: 3000000
        },
        {
          id: 3,
          name: "Thanh toán momo tiền điện nước",
          price: 1000000
        }
      ]
    }
  },
}
</script>
