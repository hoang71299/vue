const app = Vue.createApp({

  data() {
    return {
      classTesting:"flex",
      urlTesting:"gg.com",
      products : [
        {
          thumb:"./assets/2.jfif",
          name:"Sản phẩm A",
          price : 100,
          isCart : false,
        },
        {
          thumb:"./assets/2.jfif",
          name:"Sản phẩm B",
          price : 150,
          isCart : false,
        },
        {
          thumb:"./assets/3.jfif",
          name:"Sản phẩm C",
          price : 200,
          isCart : false,
        },
        
      ]
    };
  },

  methods: {
    onLogEvent(event,newX,newY){
      console.log("runing event",event);
      this.x = newX;
      this.y = newY
    },
    onMouseMoveEvent(e){
      console.log("running mouse move event",e);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    onToggleCart(event,product){
      product.isCart = !product.isCart
    }
  },
  computed: {
    productsComputed(){
      return this.products.filter(product => product.price < 160)
    }
  },
});

app.mount("#contact");
