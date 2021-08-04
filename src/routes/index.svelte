
<script>
import Task from "../Components/Task.svelte";
import Tabs from "../Components/Tabs.svelte";
import NewTask from "../Components/NewTask.svelte";
import { change, store } from "../store";
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
        // 
        return {
            done: ()=>{
                tasks[id].completed = !tasks[id].completed;
                store.update(store => change(store, tasks));
            },
            archive: ()=>{
                tasks[id].archived = !tasks[id].archived;
                store.update(store => change(store, tasks));
            }
        }
    }

</script>

<div>
    <Tabs />
    <div class="list">
        {#each showing() as task}
             <!-- content here -->
            <Task {task} markTask={markTask}/>
        {/each}

        {#if $store.activeTab === 'todo'}
        <!-- content here -->
            <NewTask />
        {/if}
    </div>
</div>


<style>
    .list{
        padding: 0px 32px;
        display: flex;
        flex-flow: column-reverse;
    }
</style>