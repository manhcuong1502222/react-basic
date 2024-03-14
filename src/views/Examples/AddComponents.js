import React from 'react';

class AddComponents extends React.Component {

    state = {
        title: '',
        Salary: '',
    }

    HandleChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    HandleChangeSalary = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }

    HandleSubmit = (event) => {
        event.preventDefault();
        this.props.AddJob(this.state);
        this.setState({})
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="title">title Jobs:</label><br />
                    <input type="text"
                        value={this.state.title}
                        onChange={(event) => this.HandleChangetitle(event)} /><br />

                    <label htmlFor="Salary">Salary:</label><br />
                    <input type="text"
                        value={this.state.Salary}
                        onChange={(event) => this.HandleChangeSalary(event)} /><br />

                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }

}

export default AddComponents;