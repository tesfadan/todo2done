<script>
    export let task = {
        task: String,
        id: Number,
        completed: Boolean,
        archived: Boolean
    };

    export let markTask;

    let editMode = false;


    const blur=()=>{
        console.log("BLURRR")
    }


</script>

<div class={`task  ${editMode ? 'editing' : ' ' }`}>
    {#if editMode}
         <!-- content here -->
    <input 
        autofocus
        class="taskContent"
        bind:value={task.task}
        on:dblclick={()=> editMode = !editMode} />
    {:else}
         <!-- else content here -->
    <div on:dblclick={()=> editMode = !editMode} class="taskContent">{task.task}</div>
    {/if}

    
    <div class="taskOptions">
        <button on:click={()=>markTask(task.id).done()}>
            {task.completed ? 'Mark undone': 'Mark Done'}
        </button>
        <!-- <button>Edit</button> -->
        <button disabled={task.archived} on:click={()=>markTask(task.id).archive()}>Delete</button>
    </div>
</div>

<style >
    .task{
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
    }

    .task.editing{
        border: 1px solid #EEEFF6;
    }

    .taskContent{
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
    }

    .task.task.editing .taskContent{
        color: #EEEFF6;
    }

    .taskOptions{
        height: max-content;
        display: flex;
        opacity: 0;
    }
    
    .taskOptions button{
        margin-left: 12px;
        cursor: pointer;
    }

    .task:hover .taskOptions{
        opacity: 1;
    }

    button{
        background: unset;
        border: unset;
         /* border: 1px solid #CDCFE8; */
         color: #b3b5ca;
        padding: 8px 12px;
        border-radius: 17px;
        font-size: 14px;
        background-color: #EEEFF605;
    }

    button:hover{
        background-color: #EEEFF610;
    }
</style>