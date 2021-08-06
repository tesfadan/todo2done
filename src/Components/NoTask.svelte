<script>
import { store } from "../store";
    let activeTab;

    store.subscribe(store => {
        activeTab = store.activeTab;
    })

</script>

<div class="{activeTab} noTaskMessage">
    {#if activeTab === 'todo'}
         <!-- content here -->
    <h4> You have zero tasks todo.</h4>
    {:else if activeTab === 'done'}
         <!-- else if content here -->
         <h4> Nothing to see here.</h4>
    {:else}
         <!-- else  content here -->
         <h4>You have zero archived tasks.</h4>
    {/if}

</div>

<style>
    div{
        border-top: 2px solid #9697af20;
    }

    div.todo{
        border-top: unset;
    }

    h4{
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        color: #CDCFE850;
    }

    @media(max-width: 640px){
        h4{
            font-size: 20px;
        }
    }

    @media(max-width: 520px){
        h4{
            font-size: 18px;
        }
    }
    
</style>