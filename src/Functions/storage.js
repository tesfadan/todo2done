export default function Local() {
    return {
        get: async () => {
            var tasks = window.localStorage.getItem("tasks");
            tasks = JSON.parse(tasks);
            return tasks === null ? [] : tasks;
        },
        update: (tasks) => {
            var stringfied = JSON.stringify(tasks);
            window.localStorage.setItem("tasks", stringfied)
        }
    }
}