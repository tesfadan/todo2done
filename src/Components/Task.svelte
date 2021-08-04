<script>
    export let task = {
        task: String,
        id: Number,
        completed: Boolean,
        archived: Boolean
    };

    export let markTask;


</script>

<div class="task">
    <div class="taskContent">{task.task}</div>
    <div class="taskOptions">
        <button on:click={()=>markTask(task.id).done()}>
            {task.completed ? 'Mark undone': 'Mark Done'}
        </button>
        <button>Edit</button>
        <button disabled={task.archived} on:click={()=>markTask(task.id).archive()}>Delete</button>
    </div>
</div>

<style lang="sass">
    .task{
        display: flex;
        width: -webkit-fill-available;
        align-items: center;
        background: #b9c5d6;
        height: 80px;
        padding: 0px 16px;
        font-size: 20px;
        justify-content: space-between;
        border-radius: 3px;
        margin-bottom: 18px;
    }

    .taskOptions{
        height: max-content;
        display: flex;
    }
    
    .taskOptions button{
        margin-left: 12px;
        cursor: pointer;
    }
</style>