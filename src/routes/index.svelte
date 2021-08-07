
<script>
    import { onMount } from "svelte";
    import Credit from "../Components/Credit.svelte";
    import NewTask from "../Components/NewTask.svelte";
    import NoTask from "../Components/NoTask.svelte";
    import Tabs from "../Components/Tabs.svelte";
    import Task from "../Components/Task.svelte";
    import Local from "../Functions/storage";
    import { change,store } from "../store";
    let tasks = [];
    let activeTab;
    let todos;
    let completed;
    let archived;
    let showing;
    store.subscribe(store => {
        tasks = store.tasks;
        todos = store.tasks.filter(task => !task.completed && !task.archived);
        completed = store.tasks.filter(task => task.completed && !task.archived);
        archived = store.tasks.filter(task => task.archived);
        showing =()=> activeTab === 'todo' ? todos : activeTab === 'done' ? completed : archived;
        activeTab = store.activeTab;
    });

    const markTask=(id)=>{
        let index = tasks.findIndex(task => task.id === id);
        // 
        return {
            done: ()=>{
                tasks[index].completed = !tasks[index].completed;
                store.update(store => change(store, tasks));
                Local().update($store.tasks);
            },
            archive: ()=>{
                tasks[index].archived = !tasks[index].archived;
                store.update(store => change(store, tasks));
                Local().update($store.tasks);
            },
            delete: ()=>{
                tasks.splice(index, 1);
                store.update(store => change(store, tasks));
                Local().update($store.tasks);
            }
        }
    }
    onMount(()=>{
        Local().get().then(res => {
            console.log(res)
            store.update(store => change(store, {tasks:res}))
        });
    })
</script>

<div class="container">
<div class="app">
    <Tabs />
    <div class="list">
        {#each showing() as task}
             <!-- content here -->
            <Task {task} markTask={markTask}/>
        {:else}
        <NoTask />
        {/each}

        {#if $store.activeTab === 'todo'}
        <!-- content here -->
            <NewTask />
        {/if}
    </div>

    <Credit />
</div>
</div>


<style>
    .container{
        display: flex;
        justify-content: center;
        height: 100vh;
    }
    .app{
        max-width: 1020px;
        width: -webkit-fill-available;
        position: relative;
    }

    .list{
        padding: 0px 32px;
        display: flex;
        flex-flow: column-reverse;
    }

    @media(max-width: 640px){
        .list{
            padding: 0px 24px;
        }
    }

    @media(max-width: 520px){
        .list{
            padding: 0px 16px;
        }
    }


</style>