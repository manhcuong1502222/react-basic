import React from 'react';
import ChildComponent from './ChildComponents';

class MyComponent extends React.Component {



    state = {
        name: '',
        age: '',
        arrJobs: [
            { id: 'job1', title: 'Embedded Dev', salary: '1200$', },
            { id: 'job2', title: 'Software Dev', salary: '1500$', },
            { id: 'job3', title: 'Mobile Dev', salary: '1000$', }
        ]
    }

    HandleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    HandleChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }


    HandleChangeGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="name">name:</label><br />
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.HandleChangeName(event)} /><br />

                    <label htmlFor="age">age:</label><br />
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.HandleChangeAge(event)} /><br />

                    <input type="submit" value="Submit" />
                </form>

                <ChildComponent name={this.state.name} age={this.state.age} gender={this.state.gender} arrJobs={this.state.arrJobs} />

            </>
        )
    }
}

export default MyComponent;
