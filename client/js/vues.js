var app = new Vue({
  el: '#app',
  data: {
    foodName: '',
    foodPrice: 0
  },
  methods: {
    postToDatabase: function(){
      let self = this;
      axios.post('http://localhost:3000/api/food/')
      .then((result)=>{
        
      })
    }
  }
})
