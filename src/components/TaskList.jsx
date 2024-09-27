import React from 'react';
import { Table, Dropdown } from 'react-bootstrap';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Comments</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">Actions</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onEdit(task)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => onDelete(task)}>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center">No tasks available</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TaskList;
