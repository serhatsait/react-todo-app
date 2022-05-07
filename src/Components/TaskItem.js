import React, {Component} from 'react';

class TaskItem extends Component {

    deleteTask = () => {
        this.props.deleteTask(this.props.id);
    }

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                <div style={{marginRight: 20}}>
                    {this.props.taskItem.task}
                </div>
                <div style={{marginRight: 20}}>
                    <button>Güncelle</button>
                </div>
                <div style={{marginRight: 20}}>
                    <button onClick={this.deleteTask}>Sil</button>
                </div>
            </div>
        );
    }
}

export default TaskItem;
