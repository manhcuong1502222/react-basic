import React from 'react';

class ChildComponent extends React.Component {
    render() {
        let { arrJobs } = this.props;

        return (
            <>
                <div><button>Show</button></div>

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

                <div><button>Hide</button></div>
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
