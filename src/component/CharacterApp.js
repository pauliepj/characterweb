import React, { Component } from 'react';
import ListCharactersComponent from './ListCharacters';

class CharacterApp extends Component {
    render(){
        return (<>
            <h1>Character Builder Application</h1>
            <ListCharactersComponent/>
            </>
        )
    }
}

export default CharacterApp;