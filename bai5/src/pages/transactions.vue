<template>
  <h1>Transactions is here</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link :to="{ name: 'transaction-details-route', params: { id: transaction.id } }">{{ transaction.name
      }}</router-link>
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

      ]
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((respone) => respone.json())
      .then((data) => (this.transactions = data))

  },
}
</script>
