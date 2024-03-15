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
                    <input type="text" placeholder="Enter your playtime" />
                    <button type="button">Add</button>
                </div>

                <div className='list-game-content'>
                    {ListGames && ListGames.length > 0 &&
                        ListGames.map((item, index) => {
                            return (
                                <div className='game-list' key={item.id}>
                                    <span>{item.title} &#160; &#160;</span>
                                    <button>Edit</button>
                                    &#160;
                                    <button>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }




}

export default ListTodos;