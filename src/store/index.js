import { writable } from 'svelte/store';

export const store = writable({
    tabs: [
        {
            uid: 'todo',
            label: 'Todo',
        },
        {
            uid: 'done',
            label: 'Done'
        },
        {
            uid: 'archived',
            label: 'Archived'
        }
    ],
    activeTab: 'done'
});

export const change = (previous, update) => {
    return { ...previous, ...update }
}