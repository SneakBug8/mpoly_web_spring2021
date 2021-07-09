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
    computed: {
        today: function() {
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            today = {
                day: weekday[today.getDay()],
                date: mm + '-' + dd + '-' + yyyy,
            }

            return (today);
        }
    },
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