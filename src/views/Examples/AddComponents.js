import React from 'react';

class AddComponents extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.title && this.state.salary) {
            this.props.addNewJob({
                id: Math.floor(Math.random() * 1001),
                title: this.state.title,
                salary: this.state.salary
            });

            this.setState({
                title: '',
                salary: '',
            });
        } else {
            alert('Please fill in both title and salary');
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title Jobs:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChangeTitle} /><br />

                    <label htmlFor="salary">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={this.handleChangeSalary} /><br />

                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default AddComponents;
