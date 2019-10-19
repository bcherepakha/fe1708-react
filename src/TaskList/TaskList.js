import React from 'react';
import { Task } from '../Task/Task';

// function removeTask(id, removeTaskFunc) {
//     return function() {
//         removeTaskFunc(id);
//     }
// }

export class TaskList extends React.Component {
    static getDerivedStateFromProps(props) {
        const {filterName, tasks} = props;
        let viewedTasks;

        switch (filterName) {
            case 'all':
                viewedTasks = tasks;
                break;
            case 'completed':
                viewedTasks = tasks.filter(task => task.completed);
                break;
            default:
                viewedTasks = tasks.filter(task => !task.completed);
                break;
        }

        return {
            viewedTasks
        };
    }

    state = {
        viewedTasks: []
    }

    render() {
        const {removeTask, completeTaskToggle} = this.props,
            {viewedTasks} = this.state;

        return (
            <ul className="task-list">
                {viewedTasks.map(task => <Task
                    key={task.id}
                    text={task.text}
                    completed={task.completed}
                    removeTask={() => removeTask(task.id)}
                    completeTaskToggle={() => completeTaskToggle(task.id)}/>)}
            </ul>
        );
    }
}
