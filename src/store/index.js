import { writable } from 'svelte/store';

export const store = writable({
    newTask: {
        task: '',
        id: 0,
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
    tasks: [
        {
            id: 0,
            task: 'Learn Svelte',
            completed: false,
            archived: false
        },
        {
            id: 1,
            task: 'Goto Airport',
            completed: false,
            archived: false
        }
    ]
});

export const change = (previous, update) => {
    return { ...previous, ...update }
}