// MyComponents.js
import React from 'react';
import ChildComponent from './ChildComponents';
import AddComponent from './AddComponents';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
    };

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        });
    };

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        });
    };

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob} />
            </>
        );
    }
}

export default MyComponent;
