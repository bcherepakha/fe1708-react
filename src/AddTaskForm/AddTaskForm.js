import React from 'react';

export class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    changeTask = event => {
        const {value} = event.target;

        this.setState({
            text: value
        });
    }

    submitForm = event => {
        event.preventDefault();
        const {text} = this.state,
            {addTask} = this.props;

        addTask({
            text,
            completed: false
        });

        this.setState({
            text: ''
        });
    }

    render() {
        const {text} = this.state;

        return (
            <form className="add-task" onSubmit={this.submitForm}>
                <input
                    type="text"
                    name="task"
                    value={text}
                    placeholder="Add task description"
                    aria-label="Add task description"
                    onChange={this.changeTask}/>
                <button type="submit">
                    Add task
                </button>
            </form>
          );
    }
}
