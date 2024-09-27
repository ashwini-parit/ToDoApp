import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskEditForm from '../components/TaskEditForm';
import TaskDeleteModal from '../components/TaskDeleteModal';
import { Container, Button } from 'react-bootstrap';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container className="mt-5">
      <h2>Tasks</h2>
      <Button variant="primary" onClick={() => setShowForm(true)}>New Task</Button>
      <TaskList 
        tasks={tasks}
        onEdit={(task) => { setCurrentTask(task); setShowEditForm(true); }}
        onDelete={(task) => { setCurrentTask(task); setShowDeleteModal(true); }}
      />
      {showForm && <TaskForm onAddTask={handleAddTask} onClose={() => setShowForm(false)} />}
      {showEditForm && <TaskEditForm task={currentTask} onEditTask={handleEditTask} onClose={() => setShowEditForm(false)} />}
      {showDeleteModal && <TaskDeleteModal task={currentTask} onDeleteTask={handleDeleteTask} onClose={() => setShowDeleteModal(false)} />}
    </Container>
  );
};

export default TaskPage;
