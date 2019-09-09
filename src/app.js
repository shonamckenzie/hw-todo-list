import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: ["Pay Credit Card", "Do Washing", "Buy Coffee"],
            newTodo: ""
        },
        methods: {
            saveNewTodo: function() {
                this.todos.push(this.newTodo);
                this.newTodo = "";
            }
        }
    });
});