import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                {name: "Pay Credit Card", priority: "high"},
                {name: "Do Washing", priority: "low"},
                {name: "Buy Coffee", priority: "low"}
            ],
            newTodo: ""
        },
        methods: {
            saveNewTodo: function() {
                this.todos.push({
                    name: this.newTodo,
                    priority: "low"});
                this.newTodo = "";
            }
           
        }
    });
});