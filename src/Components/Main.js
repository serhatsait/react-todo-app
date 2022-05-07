import React, {Component} from 'react';
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const tasks = []
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks
        }
    }

    createTask = (task) => {
        if (task.trim === "") {
            alert('Görev boş olamaz!')
            return;
        }
        tasks.push({task, isCompleted: false})
        this.setState({
            tasks: tasks
        })
    }

    deleteTask = (taskId) => {
        tasks.splice(taskId, 1);
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
            <div>
                Todos
                <CreateTask createTask={this.createTask} />
                <br/>
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
            </div>
        );
    }
}

export default Main;
