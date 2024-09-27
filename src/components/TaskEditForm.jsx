import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskEditForm = ({ task, onEditTask, onClose }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    onEditTask(editedTask);
    onClose();
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control
              type="text"
              value={editedTask.assignedTo}
              onChange={(e) => setEditedTask({ ...editedTask, assignedTo: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={editedTask.status}
              onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={editedTask.dueDate}
              onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              value={editedTask.priority}
              onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
            >
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control
              type="text"
              value={editedTask.comments}
              onChange={(e) => setEditedTask({ ...editedTask, comments: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEdit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskEditForm;
