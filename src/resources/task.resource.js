const TaskResource = (task) => ({
    id: task.id,
    title: task.title,
    description: task.description || null,
    completed: task.completed || false,
  });

export default TaskResource;
