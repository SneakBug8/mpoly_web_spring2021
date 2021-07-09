new Vue({
    el: '#app',
    data() {
        return {
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