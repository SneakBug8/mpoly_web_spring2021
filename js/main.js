new Vue({
    el: '#app',
    data()
    {
        return {
            todoList: [
                { "id": 0, "title": "Big width item", "done": false, importance: 3 },
                { "id": 1, "title": "Medium item", "done": false, importance: 2 },
                { "id": 2, "title": "Small-width item", "done": false, importance: 1 },
                { "id": 4, "title": "Archived item", "done": true, importance: 1 }
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
        this.getTodos();
        if (localStorage.getItem('theme')) {
            this.darkTheme = true && localStorage.getItem('theme');
        }
    },
    watch: {
        todoList: {
            handler: function (updatedList)
            {
                localStorage.setItem('todo_list', JSON.stringify(updatedList));
            },
            deep: true
        },
        // 5
        darkTheme: {
            handler: function (u)
            {
                localStorage.setItem('theme', (u * 1) + "");
            },
        }
    },
    methods: {
        getTodos()
        {
            if (localStorage.getItem('todo_list')) {
                this.todoList = JSON.parse(localStorage.getItem('todo_list'));
            }
        },
        toggleShowComplete()
        {
            this.showComplete = !this.showComplete;
        },
        addItem()
        {
            if (this.new_todo && this.picked) {
                this.todoList.unshift({
                    id: this.todoList.length,
                    title: this.new_todo,
                    done: false,
                    importance: this.picked
                });
                this.new_todo = '';
                this.picked = 3;
                this.modalOpened = false;
            }
            else {
                const self = this
                self.animated = true
                setTimeout(() =>
                {
                    self.animated = false
                }, 1000);
            }
            return true;
        },
        clearAll()
        {
            this.todoList = [];
        },
        showModal()
        {
            this.modalOpened = true;
            this.$refs.closebutton.focus();
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