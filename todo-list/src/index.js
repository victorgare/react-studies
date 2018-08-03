import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/bootstrap/css/bootstrap.min.css";
import './index.css';

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            task: "",
            taskList: []
        };

    }

    handleChange(event) {
        const task = event.target.value;

        this.setState({
            task: task
        });
    }

    handleClick() {
        const task = this.state.task;
        const taskList = this.state.taskList.slice();

        if (task !== "") {
            taskList.push(task);

            this.setState({
                task: "",
                taskList: taskList
            });
        }
    }

    render() {
        const taskList = this.state.taskList;

        const tasks = taskList.map((step, task) => {

            return (
                <li key={step + task}>
                    {step}
                </li>
            );
        });

        return (
            <div className="container">
                <hr className="invisible" />
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="row">
                            <div className="col-lg-9">
                                <label className="primary">Tarefa</label>
                                <input type="text" onChange={this.handleChange.bind(this)} value={this.state.task} className="form-control" />
                            </div>
                            <div className="col-lg-3">
                                <hr className="invisible" />
                                <button type="button" onClick={() => this.handleClick()} className="btn btn-info">Adicionar</button>
                            </div>
                        </div>
                        <hr className="invisible" />
                        <div className="row">
                            <div className="col-lg-6 offset-4">
                                <ol>
                                    {tasks}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

ReactDOM.render(<TodoList />, document.getElementById("root"))