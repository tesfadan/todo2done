
<script>
    import { change, store } from "../store";
    let tabs = [];
    let activeTab;
    store.subscribe(store => {
        tabs = store.tabs;
        activeTab = store.activeTab;
    });

    function selectTab(tab){
		store.update(store => change(store, {activeTab: tab.uid}));
    }

</script>

<div class="tabs">
    <ol>
        {#each tabs as tab}
             <!-- content here -->
             <li 
                class={`tab ${activeTab === tab.uid ? 'selected' : ''}`}
                on:click={selectTab(tab)}
             >{tab.label}</li>
        {/each}
    </ol>

</div>


<style>
    .selected{
        color: red;
    }
</style>