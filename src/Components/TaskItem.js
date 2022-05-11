import React, {Component} from 'react';
import styles from '../style/styles.module.scss';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.taskItem.task,
            isEditing: false
        }
    }

    setEditingState = (isEditing) => {
        this.setState({isEditing: isEditing});
    }

    toggleTask = () => {
        this.props.toggleTask(this.props.id);
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.id);
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editTask(this.props.id, this.state.task);
        this.setState({isEditing: false})
    }

    render() {
        return (
            <div className={styles.taskItem} >
                {this.state.isEditing ? (
                    <>
                        <div className={styles.editForm}>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    defaultValue={this.state.task}
                                    onChange={this.handleChange}
                                    autoFocus
                                />
                            </form>
                        </div>
                        <div className={styles.editFormButtons}>
                            <button onClick={this.handleSubmit} type={"submit"}>Kaydet</button>
                            <button onClick={() => this.setEditingState(false)} type={"button"}>Geri</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.toggleTask} onClick={this.toggleTask}>
                            <input type="checkbox" readOnly checked={this.props.taskItem.isCompleted}/>
                            <span className={this.props.taskItem.isCompleted ? ('completed') : ('not-completed')}>
                            {this.props.taskItem.task}
                            </span>
                        </div>
                        <div className={styles.editButton}>
                            <button onClick={() => this.setEditingState(true)}>Güncelle</button>
                        </div>
                        <div className={styles.editButton}>
                            <button onClick={this.deleteTask}>Sil</button>
                        </div>
                    </>
                )}

            </div>
        );
    }
}

export default TaskItem;
