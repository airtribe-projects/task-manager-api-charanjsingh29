import TaskRouter from "./src/routes/task.router.js";
import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', TaskRouter);

app.use((req, res, next) => {
    res.status(404).json({message: 'Not Found'})
})

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

export default app
