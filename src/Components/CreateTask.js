import React, {Component} from 'react';
import styles from './../style/styles.module.scss';

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state.task);
        this.setState({
            task: ''
        });
    }

    render() {
        return (
            <div className={styles.header}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.task}
                           placeholder={'Görev Girin'}
                           onChange={this.handleChange}
                           autoFocus
                    />
                    <button type={"submit"}> Ekle </button>
                </form>
            </div>
        );
    }
}

export default CreateTask;
