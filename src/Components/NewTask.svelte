<script>
import { onMount } from "svelte";
import Local from "../Functions/storage";
import { change,store } from "../store";

    let newTask = {
        task: String,
        id: Number,
        completed: false,
        archived: false
    };

    store.subscribe(store => {
        newTask = store.newTask;

    });

    const addTask =()=> {
        console.log($store.tasks)
        if(newTask.task.replace(" ", '').length > 0 && $store.activeTab === 'todo'){
        store.update(store => change(store, 
        store.tasks.push({
            ...newTask,
            task: newTask.task,
            id: store.tasks.length,
        })));

        store.update(store => change(store, {newTask: {
            task: '',
            id: '',
            completed: false,
            archived: false
        }}));

        Local().update($store.tasks);
    }

    }

    onMount(()=>{
        window.addEventListener("keydown", event =>{
            if(event.keyCode === 13){
                addTask();
            }
        })
    });


</script>
<div class="newTask">
    <input 
    bind:value={$store.newTask.task}
    placeholder="Do something" autofocus />
    <button on:click={addTask}>Add Task</button>
</div>

<style>
    .newTask{
        display: flex;
        width: -webkit-fill-available;
        align-items: center;
        height: 80px;
        padding: 0px 16px;
        justify-content: space-between;
        border-radius: 3px;
        margin-bottom: 18px;
        background: #1c1f31;
        border: 1px solid #9697af20;
        border: 1px solid #EEEFF6;
        padding-right: 12px;
    }

    input{
        font-size: 20px;
        color: #cccddd;
        background-color: unset;
        border: unset;
        border: unset;
        display: block;
        padding: 0px;
        outline: 0px;
        display: flex;
        line-height: 16px;
        width: 100%;
        margin-right: 24px;
    }

    button{
        background: unset;
        border: unset;
        transition: 0.07s ease-in;
        color: #b3b5ca;
        padding: 8px 12px;
        border-radius: 17px;
        font-size: 14px;
        background-color: #EEEFF605;
        background-color: #F75465;
        color: white;
        cursor: pointer;
        height: 70%;
        border-radius: 12px 4px 4px 12px;
        font-size: 18px;
        width: 136px;
        font-weight: 500;
        user-select: none;
    }

    @media(max-width: 640px){
        input, button{
            font-size: 16px;
        }
    }

    @media(max-width: 520px){
        input, button{
            font-size: 14px;
        }
    }

</style>