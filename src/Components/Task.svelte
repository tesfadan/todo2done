<script>
import Local from "../Functions/storage";
import { store } from "../store";
    export let task = {
        task: String,
        id: Number,
        completed: Boolean,
        archived: Boolean
    }, markTask;

    let editMode = false;

    let index = $store.tasks.findIndex(t => t.id === task.id);

    const update =(input)=>{
        // console.log("Update");
        editMode = false;
        $store.tasks[index].task = input;
        Local().update($store.tasks);
    }

</script>

<div class={`task  ${editMode ? 'editing' : ' ' }`}>
    <p 
        class="taskContent"
        contenteditable={true}
        on:click={()=> editMode = true}
        on:dblclick={e => update(e.target.innerText)}
        on:blur={e => update(e.target.innerText)}>{task.task}</p>

         <!-- content here -->
    <div class="taskOptions {editMode ? 'editMode' : ''}">
        {#if !task.archived}
             <!-- content here -->
             <button on:click={()=>markTask(task.id).done()}>
                {task.completed ? 'Mark Todo': 'Mark Done'}
            </button>
        {/if}

        <button on:click={()=>markTask(task.id).archive()}>
            {!task.archived ? 'Archive': 'Restore'}
        </button>

       {#if task.archived}
            <!-- content here -->
            <button class="deleteBtn" 
            on:click={()=>markTask(task.id).delete()}>Delete</button>
       {/if}

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
        position: relative;
    }

    .task.editing{
        border: 1px solid #EEEFF6;
    }

    .taskContent{
        font-size: 18px;
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

    .task.task.editing .taskContent{
        color: #EEEFF6;
    }

    .taskOptions{
        height: max-content;
        display: flex;
        opacity: 0;
        transition: 0.07s ease-in;
        width: 300px;
        justify-content: flex-end;
        position: absolute;
        background-color: #1c1f31;
        max-width: max-content;
        right: 12px;
    }

    .taskOptions button{
        margin-left: 12px;
        cursor: pointer;
        user-select: none;
    }

    .taskOptions.editMode{
        display: none;
    }

    .task:hover .taskOptions{
        opacity: 1;
    }

    .editing:hover .taskOptions{
        opacity: 0;
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
    }

    button.deleteBtn:hover{
        color: #ff1d34;
        background-color: #ff1d3430;
    }

    button:hover{
        background-color: #EEEFF610;
    }

    @media(max-width: 640px){
        .taskContent{
            font-size: 16px;
        }
    }

    @media(max-width: 520px){
        .taskContent{
            font-size: 14px;
        }
    }
</style>