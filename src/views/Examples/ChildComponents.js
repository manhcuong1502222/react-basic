// ChildComponent.js
import React from 'react';

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    };

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        });
    };

    handleOnclickDelete = (job) => {
        this.props.deleteAJob(job);
    };

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button style={{ color: 'blue' }} onClick={this.handleShowHide}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {arrJobs.map((item) => (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                    <span onClick={() => this.handleOnclickDelete(item)}>$</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <button onClick={this.handleShowHide}>Hide</button>
                        </div>
                    </>
                }
            </>
        );
    }
}

export default ChildComponent;
