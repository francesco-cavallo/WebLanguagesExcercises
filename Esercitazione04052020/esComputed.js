var app=new Vue({
    el: '#app',
    data: {
        name: 'Mario',
        surname: 'Rossi'
    },
    computed: {
        fullname: function(){
            return this.name + ' ' + this.surname;
        }
    }
});