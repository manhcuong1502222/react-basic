import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJobs: false,
    }

    HandleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {

        let { showJobs } = this.state;
        let { arrJobs } = this.props;
        let { check } = showJobs === true ? 'showJobs = true' : 'showJobs = false';

        return (
            <>
                {showJobs === false ?
                    <div><button onClick={() => this.HandleShowHide()}>Show</button></div>

                    :
                    <>
                        <div className='Job-lists'>
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
                                    </div>
                                )
                            })
                            }
                        </div>

                        <div>
                            <div><button onClick={() => this.HandleShowHide()}>Hide</button></div>

                        </div>
                    </>
                }

            </>
        );

    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;

//     return (
//         <>
//             <div className='Job-lists'>
//                 {arrJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>
//                     )
//                 })
//                 }
//             </div>
//         </>
//     );

// }

export default ChildComponent;
