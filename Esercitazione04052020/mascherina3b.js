var app = new Vue ({
    el : "#app" ,
    data: {
    cart: 0
    },
    methods: {
        addToCart: function(){
            this.cart = this.cart+1;
        }
    }
});