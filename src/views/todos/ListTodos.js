import React from 'react';
import './ListTodos.scss';

class ListTodos extends React.Component {

    state = {
        ListGames: [
            { id: 'Game1', title: 'League of legends', Playtime: '100' },
            { id: 'Game2', title: 'Fc Online', Playtime: '20' },
            { id: 'Game3', title: 'Teamfight Tactics', Playtime: '10' }
        ],
        newGameTitle: '',
        newGamePlaytime: '',
        editedGameId: null,
        editedGameTitle: '',
        editedGamePlaytime: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAddGame = () => {
        const { newGameTitle, newGamePlaytime } = this.state;
        if (newGameTitle && newGamePlaytime) {
            const newGame = {
                id: `Game${this.state.ListGames.length + 1}`,
                title: newGameTitle,
                Playtime: newGamePlaytime
            };
            this.setState(prevState => ({
                ListGames: [...prevState.ListGames, newGame],
                newGameTitle: '',
                newGamePlaytime: ''
            }));
        }
    }

    handleEditGame = (id, title, playtime) => {
        this.setState({
            editedGameId: id,
            editedGameTitle: title,
            editedGamePlaytime: playtime
        });
    }

    handleSaveEdit = () => {
        const { editedGameId, editedGameTitle, editedGamePlaytime } = this.state;
        this.setState(prevState => ({
            ListGames: prevState.ListGames.map(game =>
                game.id === editedGameId ? { ...game, title: editedGameTitle, Playtime: editedGamePlaytime } : game
            ),
            editedGameId: null,
            editedGameTitle: '',
            editedGamePlaytime: ''
        }));
    }

    handleCancelEdit = () => {
        this.setState({
            editedGameId: null,
            editedGameTitle: '',
            editedGamePlaytime: ''
        });
    }

    handleDeleteGame = (id) => {
        this.setState(prevState => ({
            ListGames: prevState.ListGames.filter(game => game.id !== id)
        }));
    }

    render() {
        const { ListGames, newGameTitle, newGamePlaytime, editedGameId, editedGameTitle, editedGamePlaytime } = this.state;

        return (
            <div className='list-games-container'>
                <div className='add-games'>
                    <input type="text" name="newGameTitle" value={newGameTitle} onChange={this.handleInputChange} placeholder="Enter your game" />
                    <input type="text" name="newGamePlaytime" value={newGamePlaytime} onChange={this.handleInputChange} placeholder="Enter your playtime" />
                    <button type="button" onClick={this.handleAddGame}>Add</button>
                </div>

                <div className='list-game-content'>
                    {ListGames && ListGames.length > 0 &&
                        ListGames.map((item, index) => {
                            return (
                                <div className='game-list' key={item.id}>
                                    {editedGameId === item.id ? (
                                        <>
                                            <input type="text" name="editedGameTitle" value={editedGameTitle} onChange={this.handleInputChange} />
                                            <input type="text" name="editedGamePlaytime" value={editedGamePlaytime} onChange={this.handleInputChange} />
                                            <button onClick={this.handleSaveEdit}>Save </button>
                                            &#160;
                                            <button onClick={this.handleCancelEdit}>Cancel </button>
                                        </>
                                    ) : (
                                        <>
                                            <span> {index + 1}. {item.title} - {item.Playtime} hours &#160; &#160; </span>
                                            <button onClick={() => this.handleEditGame(item.id, item.title, item.Playtime)}>Edit</button>
                                            &#160;
                                            <button onClick={() => this.handleDeleteGame(item.id)}>Delete</button>
                                        </>
                                    )}
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
