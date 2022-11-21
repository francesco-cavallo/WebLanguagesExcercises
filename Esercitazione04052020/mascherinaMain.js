var app = new Vue({
    el: '#app',
    data: {
        product: 'Mascherina',
        description: 'Mascherina chirurgica',
        selectedVariant: 0,
        details:[
            { text: '95% cotone - 5% elastan' },
            { text: 'lavabile e riutilizzabile' },
            { text: 'utilizzo ad uso civile, non medicale' }
        ],
        variants:[
            { id: 2241, color: 'celeste', disp: 9, onSale: true,
            image: './assets/celeste.png', htmlColor: 'LightBlue' },
            { id: 2242, color: 'nera', disp: 11, onSale: false,
            image: './assets/nera.png', htmlColor: 'Black' },
            { id: 2243, color: 'bianca', disp: 12, onSale: true,
            image: './assets/bianca.png', htmlColor: 'White' }
        ],
        cart: 0
    },
    methods: {
        addToCart: function(){
            this.cart +=1;
            this.variants[this.selectedVariant].disp -=1;
        },
        updateProduct: function(i){
            this.selectedVariant = i;
        }
    },
    computed: {
        onSale: function(){
            return this.variants[this.selectedVariant].onSale;
        },
        disp: function(){
            return this.variants[this.selectedVariant].disp;
        },
        image: function(){
            return this.variants[this.selectedVariant].image;
        }
   }
});