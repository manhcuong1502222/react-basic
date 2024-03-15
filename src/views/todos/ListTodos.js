import React from 'react';
import './ListTodos.scss';

class ListTodos extends React.Component {

    state = {
        ListGames: [
            { id: 'Game1', title: 'League of legends', Playtime: '100' },
            { id: 'Game2', title: 'Fc Online', Playtime: '20' },
            { id: 'Game3', title: 'Teamfight Tactics', Playtime: '10' }
        ]
    }


    render() {

        let { ListGames } = this.state;

        return (

            <div className='list-games-container'>
                <div className='add-games'>
                    <input type="text" placeholder="Enter your game" />
                    <button type="button">Add</button>
                </div>

                <div className='add-playtime'>
                    <input type="text" placeholder="Enter your playtime" />
                    <button type="button">Add</button>
                </div>

                <div className='list-game-content'>

                    <div className='game-list'>
                        <span>Game 1 	&#160; 	&#160;</span>
                        <button>Edit</button>
                        &#160;
                        <button>Delete</button>
                    </div>
                    <div className='game-list'>
                        <span>Game 2 	&#160; 	&#160;</span>
                        <button>Edit</button>
                        &#160;
                        <button>Delete</button>
                    </div>
                    <div className='game-list'>
                        <span>Game 3 	&#160; 	&#160;</span>
                        <button>Edit</button>
                        &#160;
                        <button>Delete</button>
                    </div>

                </div>
            </div>

        )
    }



}

export default ListTodos;