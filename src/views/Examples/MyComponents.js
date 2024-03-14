import React from 'react';
import ChildComponent from './ChildComponents';
import AddComponents from './AddComponents';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'job1', title: 'Embedded Dev', salary: '1200$' },
            { id: 'job2', title: 'Software Dev', salary: '1500$' },
            { id: 'job3', title: 'Mobile Dev', salary: '1000$' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {
        return (
            <>
                <AddComponents addNewJob={this.addNewJob} />

                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        )
    }
}

export default MyComponent;
