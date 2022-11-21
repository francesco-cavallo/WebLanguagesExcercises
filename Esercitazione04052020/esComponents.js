Vue.component('visualize', {
    props: {
        list: {
            type: Array,
            required:true
        },
        value: {
            type: Number,
            required:true
        }
    },
    template: `
        <div> 
            <div v-for="x in list">
                <h1> {{ x.text }} </h1>
            </div>
            <h2> {{ value }} </h2>
        </div> `
});

var app = new Vue({
    el: '#app',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ],
        a: 10
    }
})