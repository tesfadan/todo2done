
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
                class={`tab ${activeTab === tab.uid ? 'active' : ''}`}
                on:click={selectTab(tab)}
             >{tab.label}</li>
        {/each}
    </ol>

</div>

<style lang="scss">
    .tabs{
        padding: 32px;
        width: 100%;
    }

    ol{
        all: unset;
    }

    .tabs ol{
        display: flex;
        list-style: none;
        font-size: 32px;
        font-weight: 700;
    }

    .tabs li{
        cursor: pointer;
        margin-right: 20px;
        color: #b9c5d6;
    }

    .tabs .active{
        color: #008ae6;
    }

</style>