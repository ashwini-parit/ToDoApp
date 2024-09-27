import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TaskDeleteModal = ({ task, onDeleteTask, onClose }) => {
  const handleDelete = () => {
    onDeleteTask(task.id);
    onClose();
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete the task: <strong>{task.name}</strong>?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskDeleteModal;
