new Vue({
    el: '#app',
    data()
    {
        return {
            todoList: [
                { "id": 0, "title": "Go to codepen and get inspired", "done": false, importance: 3 },
                { "id": 1, "title": "Pick a project", "done": false, importance: 2 },
                { "id": 2, "title": "Small-width item", "done": false, importance: 1 },
                { "id": 4, "title": "Create a new pen", "done": true, importance: 1 }
            ],
            new_todo: '',
            showComplete: false,
            darkTheme: false,
            modalOpened: false,
            animated: false,
            picked: 3,
        };
    },
    computed: {
        pending: function ()
        {
            return this.todoList.filter(function (item)
            {
                return !item.done;
            })
        },
        completed: function ()
        {
            return this.todoList.filter(function (item)
            {
                return item.done;
            });
        },
        completedPercentage: function ()
        {
            return (Math.floor((this.completed.length / this.todoList.length) * 100)) + "%";
        },
    },
    mounted()
    {
        if (localStorage.getItem('theme')) {
            this.darkTheme = true && localStorage.getItem('theme');
        }
    },
    watch: {
        darkTheme: {
            handler: function (u)
            {
                localStorage.setItem('theme', (u * 1) + "");
            },
        }
    },
    methods: {
        toggleShowComplete()
        {
            this.showComplete = !this.showComplete;
        },
        addItem()
        {
            // validation check
            if (this.new_todo) {
                this.todoList.unshift({
                    id: this.todoList.length,
                    title: this.new_todo,
                    done: false,
                    importance: this.picked
                });
            }
            else {
                console.log("Animate shake");
                const self = this
                self.animated = true
                setTimeout(() =>
                {
                    self.animated = false
                }, 1000);
            }
            // reset new_todo
            this.new_todo = '';
            this.picked = 3;
            this.modalOpened = false;
            // save the new item in localstorage
            return true;
        },
        clearAll()
        {
            this.todoList = [];
        },
        showModal()
        {
            this.modalOpened = true;
        },
        hideModal()
        {
            this.new_todo = "";
            this.picked = 3;
            this.modalOpened = false;
        },
        swapTheme()
        {
            this.darkTheme = !this.darkTheme;
        },
    },
});