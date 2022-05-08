import React, {Component} from 'react';
import TaskItem from "./TaskItem";

class TaskList extends Component {
    render() {
        return (
            <div>
                <div className="task-header" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div className="title" style={{marginRight: 20}}>
                        Task
                    </div>
                    <div className="title">
                        Actions
                    </div>
                </div>
                <div className="task-body">
                    {this.props.tasks.map((task, index) => (
                        <TaskItem key={index} taskItem={task} id={index} deleteTask={this.props.deleteTask}
                                  editTask={this.props.editTask} toggleTask={this.props.toggleTask}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default TaskList;
