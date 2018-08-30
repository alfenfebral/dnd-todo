const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Task 1 Content'},
    'task-2': { id: 'task-2', content: 'Task 2 Content'},
    'task-3': { id: 'task-3', content: 'Task 3 Content'},
  },
  columns : {
    'column-1': {
      id: 'column-1',
      title: 'Todo',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Complete',
      taskIds: []
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
}

export default initialData;