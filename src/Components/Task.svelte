<script>
    export let task = {
        task: String,
        id: Number,
        complete: Boolean,
        archived: Boolean
    };
</script>

<div class="task">
    <div class="taskContent">{task.content}</div>
    <div class="taskOptions">
        <button>Mark Done</button>
        <button>Edit</button>
        <button>Delete</button>
    </div>
</div>

<style>

</style>