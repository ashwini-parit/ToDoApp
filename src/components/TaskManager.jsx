import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TaskDeleteModal from './TaskDeleteModal';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Complete React Project', status: 'In Progress' },
    { id: 2, name: 'Review Code', status: 'Completed' },
    { id: 3, name: 'Write Unit Tests', status: 'Not Started' },
    { id: 4, name: 'Fix Bugs', status: 'In Progress' },
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [taskToDelete, setTaskToDelete] = useState(null);

 
  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setTaskToDelete(null); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Task List</h2>

      {/* Search bar for searching tasks */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <ul style={{ marginTop: '20px' }}>
        {filteredTasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            <strong>{task.name}</strong> - <em>{task.status}</em>
            <button 
              onClick={() => setTaskToDelete(task)} 
              style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', borderRadius: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {taskToDelete && (
        <TaskDeleteModal
          task={taskToDelete}
          onDeleteTask={handleDeleteTask}
          onClose={() => setTaskToDelete(null)}
        />
      )}
    </div>
  );
};

export default TaskManager;
