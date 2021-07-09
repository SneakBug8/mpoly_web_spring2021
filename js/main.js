new Vue({
    el: '#app',
    data() {
        return {
            todoList: [
                { "id": 0, "title": "Go to codepen and get inspired", "done": false },
                { "id": 1, "title": "Pick a project", "done": false },
                { "id": 4, "title": "Create a new pen", "done": true }
            ],
            new_todo: '',
            showComplete: false,
            darkTheme: false,
        };
    },
    computed: {},
    mounted() {
        if (localStorage.getItem('theme')) {
            this.darkTheme = true && localStorage.getItem('theme');
        }
    },
    watch: {
        darkTheme: {
            handler: function(u) {
                localStorage.setItem('theme', (u * 1) + "");
            },
        }
    },
    computed: {
    },
    methods: {
    },
});