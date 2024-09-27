import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskForm = ({ onAddTask, onClose }) => {
  const [task, setTask] = useState({
    assignedTo: '',
    status: 'Not Started',
    dueDate: '',
    priority: 'Normal',
    comments: ''
  });

  const handleSubmit = () => {
    const newTask = { ...task, id: Date.now() };
    onAddTask(newTask);
    onClose();
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" value={task.assignedTo} onChange={(e) => setTask({ ...task, assignedTo: e.target.value })} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })}>
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Control as="select" value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })}>
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control type="text" value={task.comments} onChange={(e) => setTask({ ...task, comments: e.target.value })} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskForm;
