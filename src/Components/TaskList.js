import React, {Component} from 'react';
import TaskItem from "./TaskItem";
import styles from './../style/styles.module.scss';

class TaskList extends Component {
    render() {
        return (
            <div className={styles.taskContainer}>
                <div className={styles.taskHeader}>
                    <div className={styles.title}>
                        Task
                    </div>
                </div>
                <div className={styles.taskBody}>
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
