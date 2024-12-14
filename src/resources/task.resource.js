const TaskResource = (task) => ({
    id: task.id || task._id, // Support for MongoDB's _id
    title: task.title,
    description: task.description || null,
    completed: task.completed || false,
  });

export default TaskResource;