import React, { Component } from 'react';
import CharacterDataService from '../service/CharacterDataService';

class ListCharactersComponent extends Component{

    constructor(props) {
        super(props)
        this.state = {
            characters:[],
            message: null
        }
        this.refreshCharacters = this.refreshCharacters.bind(this)
    }

    componentDidMount() {
        this.refreshCharacters();
    }

    refreshCharacters() {
        CharacterDataService.retrieveAllCharacters(CharacterDataService.CHARACTER)
        .then(
            response => {
                console.log(response);
                this.setState({characters: response.data})
            }
        )
    }

    render() {
        return(
            <div className="container">
                <h3>All Characters</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Character Id</th>
                                <th>User Id </th>
                                <th>Name</th>
                                <th>Experience Points</th>
                                <th>Gold</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.characters.map(
                                    character =>
                                    <tr key={character.characterId}>
                                        <td>{character.characterId}</td>
                                        <td>{character.userId}</td>
                                        <td>{character.characterName}</td>
                                        <td>{character.expPoints}</td>
                                        <td>{character.gold}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCharactersComponent;