import TaskResource from "../resources/task.resource.js";
import Joi from "joi";

let tasks = [
    { id: 1, title: "Set up environment", description: "Install Node.js, npm, and git", completed: true },
    { id: 2, title: "Create a new project", description: "Create a new project using the Express application generator", completed: false },
    { id: 3, title: "Install nodemon", description: "Install nodemon as a development dependency", completed: true },
];

const taskSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.base': '"title" should be a type of text',
        'string.empty': '"title" cannot be empty',
        'any.required': '"title" is required',
    }),
    description: Joi.string().required().messages({
        'string.base': '"description" should be a type of text',
        'string.empty': '"description" cannot be empty',
        'any.required': '"description" is required',
    }),
    completed: Joi.boolean().strict().messages({
        'boolean.base': '"completed" should be a type of boolean',
    }),
});

async function getAllTasks(req, res) {
    return res.json(tasks.map(task => TaskResource(task)))
}

async function getSingleTask(req, res) {
    const id = req.params.id;
    const task = tasks.find(task => task.id == id)

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    return res.json(TaskResource(task))
}

async function newTask(req, res) {
    const { error, value } = taskSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorDetails = error.details.map(err => err.message);
        return res.status(400).json({ errors: errorDetails });
    }
    
    const task = value;
    if(task.status == undefined) 
        task.status = "pending"
    task.id = tasks.length + 1
    tasks.push(task);
    return res.status(201).json({success: true, message: 'Task created successfully', data: TaskResource(task)})
}

async function updateTask(req, res) {
    const id = req.params.id;
    const task = tasks.find(task => task.id == id)

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    const { error, value } = taskSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorDetails = error.details.map(err => err.message);
        return res.status(400).json({ errors: errorDetails });
    }

    Object.assign(task, value);
    
    return res.json({success: true, message: 'Task updated successfully', data: TaskResource(task)})
}

async function deleteTask(req, res) {
    const id = req.params.id;
    const task = tasks.find(task => task.id == id)

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks = tasks.filter(task => task.id != id);

    return res.json({success: true, message: 'Task deleted successfully', data: TaskResource(task)})
}

export { getAllTasks, getSingleTask, newTask, updateTask, deleteTask }