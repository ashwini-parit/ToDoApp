import axios from 'axios';

export const fetchTasks = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2'); // Placeholder for actual API
    const tasks = response.data.map(task => ({
      assignedTo: task.title,
      status: task.completed ? 'Completed' : 'Pending',
      dueDate: '2024-09-27',
      priority: 'Medium',
      comments: 'Sample comment'
    }));
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};
