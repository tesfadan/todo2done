
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
        padding: 32px 48px;
        width: -webkit-fill-available;
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
        color: #9697af;
        user-select: none;
    }

    .tabs .active{
        color: #ffffff;
    }

    @media(max-width: 640px){
        .tabs{
            padding: 24px 32px;
        }

        .tabs ol{
            font-size: 24px;
            font-weight: 600;
        }
    }

    @media(max-width: 520px){
        .tabs{
            padding: 16px 24px;
            margin: 12px 0px;
        }

        .tabs ol{
            font-size: 18px;
        }
    }

</style>