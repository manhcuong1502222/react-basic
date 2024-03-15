// AddComponent.js
import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    };

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleChangeSalary = (event) => {
        const value = event.target.value;
        if (!isNaN(value)) { // Kiểm tra xem giá trị nhập vào có phải là số không
            this.setState({
                salary: value
            });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        });
        this.setState({
            title: '',
            salary: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChangeTitleJob}
                /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="number" // Đổi type thành "number"
                    value={this.state.salary}
                    onChange={this.handleChangeSalary}
                /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddComponent;
