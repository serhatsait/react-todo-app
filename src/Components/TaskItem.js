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
            <div className={styles.lorem} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                {this.state.isEditing ? (
                    <>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    defaultValue={this.state.task}
                                    onChange={this.handleChange}
                                    autoFocus
                                />
                            </form>
                        </div>
                        <div>
                            <button onClick={this.handleSubmit} type={"submit"}>Kaydet</button>
                            <button onClick={() => this.setEditingState(false)} type={"button"}>Geri</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{marginRight: 20, cursor: "pointer"}} onClick={this.toggleTask}>
                            <input type="checkbox" style={{cursor: "pointer"}} readOnly checked={this.props.taskItem.isCompleted}/>
                            <span className={this.props.taskItem.isCompleted ? ('completed') : ('not-completed')}>
                            {this.props.taskItem.task}
                            </span>
                        </div>
                        <div style={{marginRight: 20}}>
                            <button onClick={() => this.setEditingState(true)}>Güncelle</button>
                        </div>
                        <div style={{marginRight: 20}}>
                            <button onClick={this.deleteTask}>Sil</button>
                        </div>
                    </>
                )}

            </div>
        );
    }
}

export default TaskItem;
