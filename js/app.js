const app = Vue.createApp({
    data(){
        return{
            title: "My Tasks",
            tasks: [],
            task: ''
        }
    },
    methods:{
        addTask(){
            this.tasks = [
                ...this.tasks,
                this.task
            ]
            this.task = ''
        }
    }
});

app.mount('#app');