import { writable } from 'svelte/store';

export const store = writable({
    newTask: {
        task: '',
        id: Number,
        completed: false,
        archived: false
    },
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
    activeTab: 'todo',
    tasks: []
});


export const change = (previous, update) => {
    return { ...previous, ...update }
}